## Tailwind CLI

Install:
```shell
curl -sL https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64 \
  -o tailwindcss && chmod +x tailwindcss
```

Preprocess CSS:
```shell
./tailwindcss -i ./assets/styles.css -o ./static/css/styles.css --minify
```


## Taking screenshots

Install:
```shell
uv run python -m playwright install
```

Render screenshots:
```shell
uv run screenshot.py
```
