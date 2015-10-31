---
layout: post
title:  Testing The Right Things
date:   2013-12-09
permalink: testing-the-right-things
categories:
---

I've been thinking about the next level of TDD for a while. The current (most common) model of TDD doesn't really work as well as it used to. Rather than thinking about how the application should function, I prefer to think about how the application should function *and* how those functions should be built.

I prefer to sit and think about the architecture. I ask myself questions that actually drive out the design. I think about what objects I will use and what messages they will send. Are the methods private or public? Does this data need to persist? What are my edge cases and how will I handle them? All of these questions guide my tests. These are my test cases.

## The Just Test Everything Approach
Today's model of TDD promotes just diving in once you know how something should behave. Start everything with a failing test. Literally, everything. Even loading the index page.

It's easy to test for everything, but is it a waste of time?

TDD is awesome, but I feel it drives many away from just sitting and thinking. Rich Hickey is really onto something with [Hammock Driven Development](http://youtu.be/f84n5oFoZBc)

## The Key is Unit Testing
Lately, I have been trying to strictly unit test everything. If I am using a framework, testing routing or page loads seems inefficient. It's already been tested by the framework and by people smarter than me. I try to move everything I am testing to logic that I introduce. This really leads to a more modular application with lots if classes that I have defined. My controllers are cleaner and so are my tests.

By building classes for everything, I am have the opportunity to really think about how the parts interact with the system.

## Listen To Your Tests, But Think About Them First
Don't let TDD tell you what code you should writing, but instead, you should already know what code to write; TDD should drive functionality. I like to know what I am building before I am building it. The model of TDD that newbs follow promotes having failing tests tell you what to do. Maybe this is the wrong thing to tell them. I think it's better to have newbies think about the solution they have come up with and test that.

Think about how dangerous it is for someone new to programming or a language to start programming something without knowing what they are programming.

Think, design, and then test.
