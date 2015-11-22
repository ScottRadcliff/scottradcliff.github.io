---
layout: post
title:  You Probably Suck At Writing Maintainable Software
date:   2014-01-07
categories:
---

If there is one element of software that no one ever wants to do, it's maintaining it after it's built.

I can see why. Building is fun and maintaining what's already done, and most likely built by someone else is not.

It can get really bad if the one building it doesn't think about the one maintaining it. If you've ever been the maintenance guy, you are nodding your head right now. You may even be thinking "At last! Someone feels my pain!".

If you are the guy building and passing it off to someone else, it's easy to do some really small things that make maintaining software less painful. And in turn make the maintenance guy love you, or at the very least, like you a whole lot.

## Documentation

I know, I know. Writing docs is not fun. You don't need a lot of documentation, but a comment here or there really helps. Bonus points for comments with examples.

If you are shaking your head in disbelief right now about the notion that I would even suggest you cheapen your awesome code with comments. Know this. Your code isn't that great. Sure it may look awesome now, and you may sit back and grin at the genius of it. The next guy won't think it's so great. The next guy doesn't have context around why it was needed or why it had to be programmed a certain way. Communicate those details.

It's not just comments. [A living README](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) is a great place to add examples and details about the project.

We've all seen the blank README. Or even worse, the default Rails README.

The key here is to error on the side communication.

## Verbosity

Let me get this out of the way. [You are not clever](http://scottradcliff.com/post/dont_be_clever).

That super cool method that your wrote that handles several conditions in one place is a monster to understand. Other developers have no idea why you would need to have all the logic in one place.

I'm sure your chest swelled as you wrote this amazing thing that was clever and smart. Unfortunately, you are the only one that thinks so.

Error on the side of verbosity. If you have the option of chaining a bunch of things together, or separating them into a few lines, choose the clearer option and show me some examples of how it works.

## Weekly Self Code Review

Here is one thing I have started doing. Set aside some time each Friday to read through the code you have written during the week. Anything that isn't immediately clear, add some examples/docs for it. Try explaining it at a high level. Can you explain what it does in one sentence? If not, maybe it's time to refactor and make it clearer.

If you have not tried going back and reading what you have programmed. Even if it's just a couple of days later. Try it. I guarantee it will change the way build software.

