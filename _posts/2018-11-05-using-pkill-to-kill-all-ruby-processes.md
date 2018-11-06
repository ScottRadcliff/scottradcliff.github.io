---
layout: post
title: Using pkill to Kill All Ruby Processes
date: 2018-11-05
---

I have found that at the end of the day closing all open apps on my computer is a great to signal that I am done for the day. It's easy enough. Alfred has a command for Quit All Apps. Launching that shuts everything down.

The problem is that it will leave any local web servers for Rails apps in a weird state where starting a new Rails server the next day will error out because one is already running on that port.

In the past I have a done a couple of things. Using Activity Monitor to find and kill all Ruby processes works. So does using `ps aux` and `grep` to find Ruby processes and kill them one by one. But recently I've found the best yet.

`pkill ruby` will kill them all with one command. Super useful and a great time saver.

