FROM jekyll/jekyll:3.8

RUN gem install jekyll-gist

CMD ["jekyl", "serve"]