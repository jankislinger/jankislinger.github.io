import datetime

from flask import Flask, render_template

app = Flask(__name__)

POSTS = [
    {
        "title": 'Bringing the "Carousel" Experience to Recommender Systems',
        "html_file": "posts/default.html",
        "publish_date": datetime.date(2025, 8, 7),
        "stub": (
            "When you open your favorite app—whether for videos, music, shopping—you "
            "don’t see a single endless list of movies. Instead, you’re greeted by a "
            'page full of carousels — <i>Because You Watched…</i>, <i>Award Winners</i>, '
            'or <i>Family Comedies</i>. This layout is not just prettier — '
            "it’s a completely different recommendation problem."
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
