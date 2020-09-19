---
title: "Install RStudio on Chromebook"
author: author
post_date: 2020-07-07
layout: post
output: jekyllthat::jekylldown
excerpt_separator: <!--more-->
excerpt_image: "gganimate-covid/animate-1.gif"
---

**tl;dr**
Don't install RStudio on Chromebook, it's not that seamless. Run RStudio server in docker container and use 
RStudio in Chrome - it's Chromebook after all. And if your device isn't powerful enough you can always set up server
in a cloud and connect remotely.

<!--more-->

## Intro

I'm using R and Python daily for data analyses and recently I've bought a Chromebook (Acer 13 Spin). I was mostly
curious whether it can be used as desktop PC on daily basis. I was pleased how versatile the device is. It combines
Chrome browser, Debian container and Android tablet with only a few limitations. But one of the limitation was
installing and using RStudio.

There are some tutorials online about how to install RStudio on Chromebook. The system evolves so fast that most of the
tutorials were outdated even though they weren't that old. After I'd finally installed RStudio and all dependencies
I found out that cursor in editor and console is always displayed a bit off compared to where it should be. So it was
hard to predict where will the next character appear. Unfortunately, I wasn't able to fix this issue and there wasn't
anything related online. At that point I realized I'd been doing it wrong the whole time.
