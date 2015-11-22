---
layout: post
title:  Autotesting With Guard
date:   2012-11-09
categories:
---

Creating a Rails application with Guard auto loading my tests is way more fun I anticipated. I am in the middle of upgrading an old Rails app that doesn’t have a very modern toolkit with it. There are very few acceptance tests, no auto runners for detecting and running tests, and most of the code would have to be converted to run on Rails 3 or 4 anyway. 100% rewrite material.

I figured I might as well try out Guard considering I have a lot of tests to write to make sure all of my bases are covered. This particular app is central to this company and if it’s missing a core feature I’ve got problems.

So my current workflow is to place my terminal screen on my MBP screen while my editor is on my external display. I’m not sure why I didn’t try this before. It’s almost like a game. I can make some changes, save the file and just glance over at the terminal. I don’t even have to CMD-Tab to the terminal screen, just look over there and see where I need to head next.

I was previously a fan over running my tests in my editor, but I’ve got to say this makes working in these apps fun again. If you haven’t tried [Guard](https://github.com/guard/guard), you should really give it a shot.
