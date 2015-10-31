---
layout: post
title:  Throw Out That Code
date:   2013-04-12
permalink: throw-out-that-code
categories:
---

At the base of almost every web application is authentication. The app needs to know who it's dealing with. Sometimes there are roles and sometimes not, but there is almost always authentication.

Needless to say, it's important to get authentication right. But not at the risk of adding something that doesn't seem to be working for you.

While building [Velocity](http://velocityapp.net), I ran into this issue. I almost always use [devise](https://github.com/plataformatec/devise) for authentication. I have to confess, I'm not sure why, I've used it since it was released. It just always seems to fit.

But this time it was a little different. I needed a little more control over authentication, and devise hides a lot of details. So I found myself looking up how to do simple things a lot, like customizing the sign in screen.

In hindsight, I should have stripped out devise after the first couple of times it seemed like the wrong tool, but I kept building and integrating devise deeper and deeper into the application.

## A Turning Point
When I get to the students feature, where an instructor can add students to a course, I started to really feel the pain. I finally decided to delete all that code I had written and replace it with something a little simpler and more easily customizable.

After replacing devise, I *feel* better about the code. It's easier to update and customize and is moving along much faster that it was before.

Don't be afraid to delete code that doesn't work for you. Use the right tool for the job.

