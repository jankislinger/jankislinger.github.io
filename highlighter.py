# /// script
# dependencies = [
#   "pygments",
# ]
# ///

from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

code = """def hello(name):
    print(f"Hello, {name}!")"""

# Create formatter with inline styles or CSS classes
formatter = HtmlFormatter(cssclass="codehilite", nowrap=False)
highlighted_code = highlight(code, PythonLexer(), formatter)

print(highlighted_code)  # contains <span> tags
print(HtmlFormatter().get_style_defs(".codehilite"))  # CSS to include
