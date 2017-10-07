---
layout: post
title:  Writing Code
date:   2016-09-28
---

Anyone that knows me, knows I’m a huge fan of readable code. I think all code should explicitly say what it does. I’m favorable to long method names. Sometimes long class names. And if it makes sense, I am okay with a large number of files. Even if those files don’t contain a lot of code, but help the programmer understand what the program does.

<!--more-->

The style I favor is not quite [Literate Programming](https://en.wikipedia.org/wiki/Literate_programming), but close. I’m not really a fan of writing a mountain of documentation to explain every facet of a program. I am a fan of writing just enough documentation to help the reader understand.

But better than writing documentation to understand the program, I prefer to write the program in a way that is clear what the program does. [Code is written for programmers](http://rumproarious.com/2015/01/20/programs-are-meant-to-be-read-by-humans-and-only-incidentally-for-computers-to-execute/). The computer only understands it once it’s in binary form. The computer doesn’t care if your methods are short, how many of them there are, or how clever the code is. (of course this doesn’t take into account performance. The computer obviously cares about how efficient code runs.)

In [Code Complete 2](http://cc2e.com/), Steve McConnell talks about *Common Software Metaphors*. One of the first ones he  mentions touches on *Software  Penmanship*. It reads:

> The writing metaphor suggests that developing a program is like writing a casual letter— you sit down with pen, ink, and paper and write it from start to finish. It doesn't require any formal planning, and you figure out what you want to say as you go.

Not sure I would go that far. I might say that *the writing metaphor suggests that writing code is like writing an essay. Thinking about what you want to say, outline it, write it, and then edit until it’s good writing*.

Writing a casual letter requires you to think about things you might want to say as you go along. In my experience, this always results in things that I have forgotten to say. In software, this results in incomplete features or bugs. Because of that, I think the metaphor fails a bit.

McConnell seems to agree with my theory.

> For an individual's work or for small-scale projects, the letter-writing metaphor works adequately, but for other purposes it leaves the party early— it doesn't describe software development fully or adequately. Writing is usually a one-person activity, whereas a software project will most likely involve many people with many different responsibilities. When you finish writing a letter, you stuff it into an envelope and mail it. You can't change it anymore, and for all intents and purposes it's complete. Software isn't as difficult to change and is hardly ever fully complete.

McConnell talks about growing a system. Writing code incrementally. But, with a more detailed approach.

> You design a piece, code a piece, test a piece, and add it to the system a little bit at a time. By taking small steps, you minimize the trouble you can get into at any one time.

If approached like an essay, more thoughtfulness is involved and ideas can still be added as you go. I think this leads to a better experience for the developer. Both the developer writing code and the developer reading the code.

The act of writing code is an act of telling another programmer what you expect to happen when the program is run.



