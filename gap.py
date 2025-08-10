# /// script
# dependencies = [
#   "gapminder",
#   "setuptools",
#   "polars",
# ]
# ///
from gapminder import gapminder
import polars as pl

def main() -> None:
    df = (
        pl.from_pandas(gapminder)
        .filter(pl.col("continent") == "Europe")
        .filter(pl.col("year") == pl.col("year").max())
        .sort("country")
        .select("country", life_exp="lifeExp", gdp_percap="gdpPercap")
        .head(4)
    )
    print(df)

    tuples = list(df.iter_rows(named=False))
    print(tuples)


if __name__ == "__main__":
    main()