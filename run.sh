docker build -t jekyll-server .
docker run --rm -it \
  -v "$PWD:/srv/jekyll" \
  -p 4000:4000 \
  jekyll-server