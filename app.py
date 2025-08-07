import datetime

from flask import Flask, render_template

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
]


@app.route("/")
def index():
    return render_template("index.html", posts=POSTS)


@app.route("/blog/bringing-the-carousel-experience-to-recommender-systems/")
def post_full_page_recommender():
    return render_template("post.html", post=POSTS[0])


if __name__ == "__main__":
    app.run()
