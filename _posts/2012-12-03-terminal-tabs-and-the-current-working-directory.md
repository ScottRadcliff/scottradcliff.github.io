---
layout: post
title:  Terminal Tabs And The Current Working Directory
date:   2012-12-03
permalink: terminal-tabs-and-the-current-working-directory
categories:
---

## Why do I need the CWD on the clipboard
I'm in the terminal all day. While in the terminal, I usually have several tabs open (testing, logging, etc.). Being the lazy developer that I am, I got tired of typing the path to the application several times a day. So I needed to store the cwd on the clipboard without using the mouse. Lazy, remember?

## Placing the CWD on the clipboard
Piping the current working directory on the clipboard is really simple.

    pwd | pbcopy

This places the current working directory on the clipboard so I can just paste it in and be in the app directory in seconds with the least amount of typing as possible.


