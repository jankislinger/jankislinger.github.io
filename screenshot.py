from __future__ import annotations

import argparse
import functools
import http.server
import logging
import os
import socket
import socketserver
import sys
import threading
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Tuple

from flask_frozen import Freezer
from app import app

LOGGER = logging.getLogger("freeze_and_screenshot")


# -----------------------------
# Logging
# -----------------------------

def setup_logging(verbosity: int, log_level: str | None) -> None:
    if log_level:
        level = getattr(logging, log_level.upper(), logging.INFO)
    else:
        level = logging.DEBUG if verbosity > 0 else logging.INFO
    logging.basicConfig(
        level=level,
        format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
        datefmt="%H:%M:%S",
    )


# -----------------------------
# Freeze site
# -----------------------------

def freeze_site(build_dir: Path) -> None:
    LOGGER.info("Freezing Flask app -> %s", build_dir)
    build_dir.mkdir(parents=True, exist_ok=True)
    original_dest = app.config.get("FREEZER_DESTINATION")
    try:
        app.config["FREEZER_DESTINATION"] = str(build_dir)
        freezer = Freezer(app, with_static_files=True, log_url_for=False)
        total = 0
        for rule, filename in freezer.freeze_yield():
            total += 1
            LOGGER.debug("Wrote %s -> %s", rule, filename)
        LOGGER.info("Freeze yielded %d URLs", total)
        freezer.freeze()
    finally:
        if original_dest is not None:
            app.config["FREEZER_DESTINATION"] = original_dest


# -----------------------------
# HTTP server
# -----------------------------

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:  # noqa: A003
        LOGGER.debug("HTTP: " + format, *args)


def start_server(directory: Path) -> tuple[socketserver.TCPServer, int]:
    LOGGER.info("Starting local HTTP server for %s", directory)
    handler = functools.partial(QuietHandler, directory=str(directory))
    httpd = socketserver.TCPServer(("127.0.0.1", 0), handler)
    port = httpd.server_address[1]
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    # Probe
    with socket.create_connection(("127.0.0.1", port), timeout=2):
        pass
    LOGGER.info("HTTP server at http://127.0.0.1:%d", port)
    return httpd, port


# -----------------------------
# Page mapping helpers
# -----------------------------

@dataclass
class PageMap:
    rel_path: Path
    url_path: str
    safe_name: str


def make_safe_name(rel_html: Path) -> str:
    p = rel_html.as_posix()
    if p.endswith("/index.html"):
        p = p[: -len("/index.html")] or "root"
    elif p == "index.html":
        p = "root"
    elif p.endswith(".html"):
        p = p[: -len(".html")]
    return p.replace("/", "__") or "root"


def html_to_url_path(rel_html: Path) -> str:
    p = rel_html.as_posix()
    if p.endswith("/index.html"):
        return "/" + p[: -len("/index.html")] + "/"
    if p == "index.html":
        return "/"
    return "/" + p


def collect_html(build_dir: Path) -> List[Path]:
    files = sorted(build_dir.glob("**/*.html"))
    LOGGER.info("Discovered %d HTML files in %s", len(files), build_dir)
    for f in files:
        LOGGER.debug("Found HTML: %s", f.relative_to(build_dir))
    return files


def map_pages(build_dir: Path) -> List[PageMap]:
    pages: List[PageMap] = []
    for rel in collect_html(build_dir):
        rel_to_build = rel.relative_to(build_dir)
        pages.append(PageMap(rel_to_build, html_to_url_path(rel_to_build), make_safe_name(rel_to_build)))
    if pages:
        LOGGER.info("Page map (rel -> URL -> name):")
        for p in pages:
            LOGGER.info("  %s -> %s -> %s", p.rel_path, p.url_path, p.safe_name)
    else:
        LOGGER.warning("No HTML files found in %s", build_dir)
    return pages


# -----------------------------
# Screenshot
# -----------------------------

def ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def parse_profiles(arg: str) -> Dict[str, Tuple[int, int]]:
    """Parse profiles string like 'mobile:390x844,tablet:768x1024,pc:1440x900'"""
    profiles: Dict[str, Tuple[int, int]] = {}
    for chunk in arg.split(","):
        chunk = chunk.strip()
        if not chunk:
            continue
        name, dims = chunk.split(":", 1)
        w, h = dims.lower().split("x", 1)
        profiles[name.strip()] = (int(w), int(h))
    return profiles


def screenshot_all(
    build_dir: Path,
    out_dir: Path,
    base_url: str,
    profiles: Dict[str, Tuple[int, int]],
    full_page: bool,
    wait_network_ms: int,
) -> None:
    from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

    ensure_dir(out_dir)

    pages = map_pages(build_dir)
    if not pages:
        LOGGER.error("No pages discovered; aborting screenshot step.")
        return

    with sync_playwright() as p:
        LOGGER.info("Launching Chromium (headless)")
        browser = p.chromium.launch()

        for profile_name, (w, h) in profiles.items():
            LOGGER.info("=== Profile: %s (%dx%d) ===", profile_name, w, h)

            contexts = {
                "light": browser.new_context(color_scheme="light", viewport={"width": w, "height": h}),
                "dark": browser.new_context(color_scheme="dark", viewport={"width": w, "height": h}),
            }

            for scheme, ctx in contexts.items():
                out_subdir = out_dir / f"{profile_name}_{scheme}"
                ensure_dir(out_subdir)
                LOGGER.info("Output dir for scheme: %s", out_subdir)

                for pm in pages:
                    url = f"{base_url}{pm.url_path}"
                    file_path = out_subdir / f"{pm.safe_name}.png"

                    page = ctx.new_page()
                    # Network/console signals
                    def on_resp(resp):
                        try:
                            if resp.status >= 400:
                                LOGGER.warning("%s %s -> %s", resp.request.method, resp.url, resp.status)
                        except Exception:
                            pass
                    page.on("response", on_resp)

                    LOGGER.info("Open %s -> %s", pm.rel_path, url)
                    try:
                        page.goto(url, wait_until="domcontentloaded", timeout=30_000)
                        page.wait_for_load_state("networkidle", timeout=wait_network_ms)
                    except PWTimeout:
                        LOGGER.warning("Timeout loading %s; continuing.", url)
                    except Exception:
                        LOGGER.exception("Failed to load %s", url)

                    # Ensure scheme is applied
                    page.emulate_media(color_scheme=scheme)

                    try:
                        page.screenshot(path=str(file_path), full_page=full_page)
                        size = file_path.stat().st_size
                        LOGGER.info("Saved %s (%d bytes)", file_path, size)
                    except Exception:
                        LOGGER.exception("Screenshot failed for %s", url)
                    finally:
                        page.close()

            for ctx in contexts.values():
                ctx.close()

        browser.close()


# -----------------------------
# CLI
# -----------------------------

def main() -> None:
    parser = argparse.ArgumentParser(description="Freeze Flask app and capture screenshots for multiple viewports and schemes.")
    parser.add_argument("--build-dir", default="build", help="Directory for frozen site output")
    parser.add_argument("--out-dir", default="screenshots", help="Directory to save screenshots")
    parser.add_argument("--no-freeze", action="store_true", help="Skip freezing and only screenshot existing build")
    parser.add_argument(
        "--profiles",
        default="mobile:390x844,tablet:768x1024,pc:1440x900",
        help="Comma-separated profiles as name:WIDTHxHEIGHT",
    )
    parser.add_argument("--no-full-page", action="store_true", help="Do not capture full-page (viewport only)")
    parser.add_argument("--wait-network-ms", type=int, default=2000, help="Extra wait after load for network idle")
    parser.add_argument("-v", "--verbose", action="count", default=0, help="Increase verbosity")
    parser.add_argument("--log-level", choices=["DEBUG", "INFO", "WARNING", "ERROR"], help="Explicit log level")
    args = parser.parse_args()

    setup_logging(args.verbose, args.log_level)

    build_dir = Path(args.build_dir).resolve()
    out_dir = Path(args.out_dir).resolve()

    LOGGER.info("Python %s", sys.version.replace("\n", " "))
    LOGGER.info("Working dir: %s", Path.cwd())
    LOGGER.info("Build dir: %s", build_dir)
    LOGGER.info("Output dir: %s", out_dir)

    if not args.no_freeze:
        freeze_site(build_dir)

    if not build_dir.exists():
        LOGGER.error("Build dir not found: %s", build_dir)
        raise SystemExit(2)

    httpd, port = start_server(build_dir)
    try:
        base_url = f"http://127.0.0.1:{port}"
        LOGGER.info("Base URL: %s", base_url)
        profiles = parse_profiles(args.profiles)
        if not profiles:
            LOGGER.error("No profiles parsed from --profiles=%r", args.profiles)
            raise SystemExit(2)
        screenshot_all(
            build_dir=build_dir,
            out_dir=out_dir,
            base_url=base_url,
            profiles=profiles,
            full_page=not args.no_full_page,
            wait_network_ms=args.wait_network_ms,
        )
        LOGGER.info("Done. Screens saved under: %s/<profile>_<scheme>/", out_dir)
    finally:
        LOGGER.info("Shutting down HTTP server")
        httpd.shutdown()


if __name__ == "__main__":
    main()
