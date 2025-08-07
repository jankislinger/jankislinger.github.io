from flask_frozen import Freezer
from app import app


def main() -> None:
    Freezer(app).freeze()


if __name__ == "__main__":
    main()
