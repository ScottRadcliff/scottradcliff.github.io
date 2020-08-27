---
layout: post
title: How to Fix Failed Host Key Verification
date: 2020-08-27
---

If you log into servers regularly, you may run into an issue with a failed RSA key verification. This just means that something changed in the handshake between your machine and the server. If you are sure everything is okay. And that's important. Make sure the server you are logging into is actually the server you think it is! Then the fix is simple. The error message will give you the failed key and even the line it's on. Open the file `~/.ssh/known_hosts`, turn wrapping off so you see one long line at a time. Go to the line in question. And then delete that line. SSH into the server again and save the new RSA key.

This seems really simple, but I was confused the first time this happened. The error is usually because DevOps changed something. But luckily the fix is simple.


