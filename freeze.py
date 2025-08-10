from flask_frozen import Freezer
from app import app, ensure_pygments_css


def main() -> None:
    ensure_pygments_css()
    Freezer(app).freeze()


if __name__ == "__main__":
    main()
