---
layout: post
title:  Exploring A Code Base With Integration Testing
date:   2012-04-05
categories:
---

I work with a lot of code that I don't understand. Going from file to file tracing the path of methods is not always the best method for understanding how a system works. 

There are a few methods for exploring a system. The console is a great option. Unit tests that create objects and check the values of the objects is another good method.Bug the best way I know for exploring an application that I am not familiar with yet, is integration testing.

Whenever I have any code to write to an unfamiliar code base, I can count on integration testing to reveal parts of the system that are unknown to me. My process is very simple. In true TDD/BDD style, I write the smallest amount of code I need to get some result. I will start with just a few steps; visit a page, fill out some fields, and maybe click a link or two and compare the actual result of my actions with my expected result.

This will reveal parts of the system that I didn't know existed, every time. 

