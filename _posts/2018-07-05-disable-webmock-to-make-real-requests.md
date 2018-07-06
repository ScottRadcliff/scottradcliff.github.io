---
layout: post
title: Disable Webmock To Make Real Requests
date: 2018-07-05
---

Mocking and stubbing in testing has always been my kryptonite. I know I’m not very good at it, and because of that I tend to steer clear of it when I can. Obviously not a good strategy. So I’m forcing myself to use it more.

One big thing for me is actually making an API request at times, like when building the feature, and then bypassing the request once I know it works. [WebMock](https://github.com/bblimke/webmock), while awesome, seems to hijack all requests regardless of what you are doing.

I finally put some effort into finding out how to disable it so I can ensure it works first.

Just place `WebMock.disable!` right in your test until you ready to start faking the requests.

