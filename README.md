## Tailwind CLI

Install:

```shell
sudo apt install watchman -y
curl -sL https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64 \
  -o tailwindcss
chmod +x tailwindcss
```

Preprocess CSS:
```shell
./tailwindcss -i ./assets/styles.css -o ./static/css/styles.css --minify --watch
```
