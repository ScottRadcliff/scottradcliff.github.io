---
layout: post
title: Remove all Double Spaces in Vim
date: 2020-02-18
---

If you're like me and have the joy of a keyboard that doesn't work on your expensive MacBook Pro, and your keyboard insert as many spaces as it feels like at random times. And if you are also a vim user, I have a hack that might help.

I use the following command to find all places with one or more spaces and replace them with a single space. It's worth noting that in vim, you need to escape things you normally wouldn't, like the `{` and `}`

Also worth noting that I am using the `c` modifier so I don't make changes that I don't want to.

`:%s/\s\{2,\}/ /gc`
