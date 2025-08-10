import polars as pl
from flask import render_template

data = pl.DataFrame(
    [
        ("Albania", 76.423, 5937.029526),
        ("Austria", 79.829, 36126.4927),
        ("Belgium", 79.441, 33692.60508),
        ("Bosnia and Herzegovina", 74.852, 7446.298803),
    ],
    schema=["country", "life_exp", "gdp_per_cap"],
)
render_template("table_01.html", table=data.to_dicts())
