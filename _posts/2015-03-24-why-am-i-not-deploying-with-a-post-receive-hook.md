---
layout: post
title:  Why Am I Not Deploying With A Post Receive Hook
date:   2015-03-24
categories:
---

I'm the type of guy that likes control. I like to know how things are working so that when they break, *and they will break*, I know how to fix them. This can be a good thing and a bad thing. It's a good thing because I think it makes me a better developer. I've never regretted learning something about the systems I work with. It's bad because I generally don't like systems that do stuff for me. Even though they may be saving me work.

Take Heroku for example. It can save a ton of time. But what happens when it breaks? What happens when it doesn't support what I want to do? As far as I know, I still can't write to the file system on Heroku. So I don't use it for my projects. I manage my own VPS. It's not that hard. Seriously.

Even though managing a VPS is relatively simple, it can make deploying more work that it has to be. Capistrano and other tools are way too much.

I've done dinosaur deploys for a long time. Push to some repo. SSH into my server, pull, and run any asset or bundling tasks I need.

That is until I started looking at `post-receive` hooks in Git. These are **awesome** and exactly what I need. I haven't played with them yet,  but I will be. I think I can squeeze in an hour or so to play tomorrow.

Here is one of the better articles on how `post-receive` hooks work when you host your own git repos.

[https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks](https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks). 
