import datetime
from pathlib import Path

from flask import Flask, render_template, Response
from pygments import highlight
from pygments.lexers import get_lexer_by_name, guess_lexer, TextLexer
from pygments.formatters import HtmlFormatter

app = Flask(__name__)

POSTS = [
    {
        "title": 'Bringing the "Carousel" Experience to Recommender Systems',
        "html_file": "posts/default.html",
        "publish_date": datetime.date(2025, 8, 7),
        "stub": (
            "If you've ever opened your favorite app—whether for videos, music, shopping, "
            'or beyond—you’ve likely seen multiple rows—or "carousels"—of recommendations: '
            "“Keep Watching,” “Just for You,” “Hot Right Now,” and so on. Yet, much of the "
            "academic research out there still focuses on a single ranked list—a single "
            "column of suggestions."
        ),
    },
    {
        "title": 'Converting Tables to HTML: All the Ways',
        "html_file": "posts/presenting_html.html",
        "publish_date": datetime.date(2025, 7, 27),
        "stub": (
            "If you've ever opened your favorite app—whether for videos, music, shopping, "
            'or beyond—you’ve likely seen multiple rows—or "carousels"—of recommendations: '
            "“Keep Watching,” “Just for You,” “Hot Right Now,” and so on. Yet, much of the "
            "academic research out there still focuses on a single ranked list—a single "
            "column of suggestions."
        ),
    },
]


@app.route("/")
def index():
    return render_template("index.html", posts=POSTS)


@app.route("/blog/bringing-the-carousel-experience-to-recommender-systems/")
def post_full_page_recommender():
    return render_template("post.html", post=POSTS[0])

@app.route("/blog/converting/")
def post_converting_html():
    table_01 = Path("code_include").joinpath("table_01.html").read_text()

    return render_template("post.html", post=POSTS[1], table_01=table_01)


@app.route("/pygments.css")
def pygments_css():
    light_css = HtmlFormatter(style="friendly", cssclass="codehilite").get_style_defs(".codehilite")
    dark_css  = HtmlFormatter(style="monokai",  cssclass="codehilite").get_style_defs(".dark .codehilite")
    return Response(light_css + "\n\n" + dark_css, mimetype="text/css")


@app.template_filter("pyghl")
def pygments_filter(code: str, lang: str):
    return highlight_code(code, lang)


def highlight_code(code: str, lang: str) -> str:
    formatter = HtmlFormatter(cssclass="codehilite", nowrap=False)
    lexer = get_lexer_by_name(lang, stripall=False)
    return highlight(code, lexer, formatter)


if __name__ == "__main__":
    app.run()
