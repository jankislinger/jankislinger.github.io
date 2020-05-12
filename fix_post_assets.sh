#!/usr/bin/env bash

sed -i -E "s/\]\(\.\.\/assets/\]\(\/assets/" _posts/*.md
