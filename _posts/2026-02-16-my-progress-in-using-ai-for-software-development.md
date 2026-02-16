---
layout: post
title: My Progress in Using AI in Software Development
date: 2026-02-16
---

I always knew there could be a point where something in the software development industry would change so drastically, that I would either be in danger of becoming obsolete, or I would need to relearn how to build software.

I pushed back on AI for a good while, but it won. It is so tied into how we are building software as an industry that I had to take a deeper look.

It really came from a conversation with some friends. I realized I was behind. It felt as if everyone except for me was using AI in some way. Some way too much, in my opinion, and others more selectively.

I decided that I was already behind and needed to spend the time relearning how to make software in 2026.

My day job does have a Claude subscription, but it's usually out of tokens by the time I get to it. So I decided to really dig into [Codex](https://openai.com/index/introducing-the-codex-app/). Partly because it's free for the time being. I wanted to be able to use it as I wish, and then worry about the cost.

I like that Codex isn't really an editor. At first I didn't like the fact that it just made changes to my repo. But if you're branch is clean, using `git diff` is a great way to see what it's doing, and just discard or refactor what you don't like. Years of code review turned out to be super helpful.


**AI Process For Now**

Turns out my standard flow for building software is a great fit for AI. I like to sit and think about the problem, sketch out some sort of design; classes, functions, I/O, etc... Then implement that design. Sometimes test first, sometimes just start hacking things if I'm unsure how things might work out.

So now, I do that same thing. But once I get to the implementation stage, I plug what I am trying to do  into Codex. Since it has context of the project, and a smaller scope to think about, it usually has good results.

I've gotten better at telling it to build a plan so I can see what it's choosing to do. Then alter and implement once I'm happy.

So for now, I keep a text file open all day just for prompts. I like to write them up in a text file and make sure it's super specific before going to Codex.

I still can't get anything to create an entire app by me telling it what to build. But going to a hack night Thursday and maybe I can learn that. (I haven't been to a hack night in years.)
