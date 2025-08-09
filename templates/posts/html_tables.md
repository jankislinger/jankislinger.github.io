According to the zen of Python there should be one and only one way to do anything.
But that is nowhere near truth when it comes to converting tables to html for presentation.
In  this blog post we'll discuss all the ways and which one do you want to use.

Why are there so many options?
Because there are plenty of ways to process tables in Python - from data frame libraries like Polars or Pandas to ORM like SQLAlchemy.
And there are almost as many ways to present these, from Jupyter notebook to web frameworks like Django or Flask.
We must narrow it down to data frames in Polars (with occasional side steps to Pandas) to Jupyter and Flask.

What are the selection criteria?
As with any analysis, we need to know who the target audience is, and - more importantly in our case - how we can deliver the result to them.
Are you doing an analysis in Jupyter notebook and distributing the rendered html or is your work part of a dashboard running on a server?
It could be the case that html may not be even a valid option and pdf is the way - don't give up, we'll discuss that as well.
If it is part of bigger project on which you collaborate with other people you should consider the tools you already use.
The solutions differ in the amount of html and css you need to write yourself.

## Start simple

Let's start simple and create the table "manually" in html templates in Flask.
Let's use gapminder dataset as an example.

```html
<!-- table_01.html -->
<table>
  <thead>
  <th>Country</th>
  <th>Life Expectancy</th>
  <th>GDP per Cap.</th>
  </thead>
  {% for row in table %}
  <tr>
    <td>{{ row.country }}</td>
    <td>{{ row.life_exp }}</td>
    <td>{{ row.gdp }}</td>
  </tr>
  {% endfor %}
</table>
```

Let's also create the data and interpolate the template.

```python
import polars as pl
from flask import render_template

data = pl.DataFrame([
    ("Austria", 65, 12345),
    ("Belgium", 71, 23456),
], schema=["country", "life_exp", "gdp"])
render_template("table_01.html", table=data.to_dicts())
```

Obviously, that example is oversimplified, and we would have just created a list of dictionaries ourselves in this case.
In most cases, the data you want to present are a result of data transformations and aggregations.

This approach is the most versatile out of all the methods mentioned in this post.
If you want to style your table to match the rest of the page, you just need to add some css and you're done.
If you're lucky to get help from a designer with the styling html is usually something they can help with.
You can work separately in two files in two completely different languages.

Let's say you want to use tailwind css (used on this page) and throw in some table formatting.
Let's put some bar chart into life expectancy and let's signify the country with the highest gdp.

## Rendering in Jupyter Notebooks

Most of the data analysis happens in Notebooks anyway and all data frame libraries have some support for rendering into html.
Let's assume you do your data analysis using Polars.
But even if you don't the conversion from one to another is mostly seamless these days.

Polars uses Great Tables as the default method for styling.
You should check out the examples on their website for some inspiration
