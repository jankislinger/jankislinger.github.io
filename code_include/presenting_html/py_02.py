data = data.with_columns(
    is_max_gdp=pl.col("gdp_per_cap") == pl.col("gdp_per_cap").max(),
)
render_template("table_02.html", table=data.to_dicts())
