---
layout: post
title:  Start Writing To Think
date:   2015-01-07
categories:
---

The next time you are stuck on a programming problem that you are trying to solve. Things just aren’t clicking. You can’t seem to wrap your head around what a solution might look like. Just start writing.

Open a text file and start writing what the problem is and what a solution might look like. Really go into detail. Explain the edge cases, any parameters that will effect behavior, and any errors that would be returned.

Think of this as explaining to someone how to use your software.

I realize this may sound a little goofy. Consider it the solo version of explaining a problem to someone. You are, in fact, explaining the problem to someone. That someone just happens to be you. And you are explaining it to understand it. You get an added bonus of being able visualize a good design from a bad design _before_ you program it.

## The Perils of TDD and the Lack of Thinking
I’ve sounded off before about [losing the planning stage with TDD](http://scottradcliff.com/post/readme_driven_development_revisited). When you start out doing TDD, people _rarely_ talk about thinking through what you are building or thinking about what you need to test. That is, aside from [Rich Hickey](https://www.youtube.com/watch?v=f84n5oFoZBc), but he’s not really putting it in a TDD context.

Most of the TDD examples just jump right into code and driving your design through tests, and that’s great, but when you don’t know where you are headed, you’re really just wasting time.

Writing about the problem and your solution will give you a solid end goal. And with that end goal, you’ll be able to start thinking about all the pieces that will need tests.

It’s at this point that you can jump into a TDD workflow. You have a solution in mind and a good idea of the steps needed to get there. Those are your test cases.

## Example Time
So what does something like this look like?

Here is a super hypothetical example of a feature that allows someone to share something on a fake site called SuperDuper and then sends the result back to an API.

_When a user shares the link on SuperDuper, we get an id back of the post. That id gets saved to a cookie and a POST request is sent to api/superduper/:id, then a new Order record gets created and a success message is returned._

_If the user tries to share but it fails, the application will take into account that the user tried, but the failure was not due to user error, but rather a system error._

So, what did learn by taking the time to write this out?

- We learned what the url structure of the API might look like.
- We learned that we need to store some data in a cookie or other storage mechanism.
- We discovered that we have some specific errors that could require special consideration. Maybe we have two types of errors?

This type of communicating to yourself almost always exposes something you might have missed. The one that sticks out to me are the two types of errors. User and system. This would certainly lead to a better design and a better experience for the user after taking these errors into consideration.

## One System to Rule Them All
Building software really is a personal thing. Even on a team, developers have personal preference and often have to make trade-offs in favor of the way the team likes to build software.

There is no *right* way.

This is just one of many ways to build software. I often drop back to this when I am stuck.

