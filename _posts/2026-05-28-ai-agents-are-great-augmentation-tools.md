---
layout: post
title: AI Agents Are Great Augmentation Tools
date: 2026-05-18
---

I've drank the kool-aid. I've been using AI to assist in software development for somewhere between four to eight weeks. I was super against it at first. Now I realize that my objection was due to stories of people pushing the entire software development workload to these Agents. I knew that wouldn't work. It may _seem_ like it *could* work. But the lack of experience and knowledge of how software is built, will eventually show, and the project will fail.

Because of that, I was betting more on fixing these vibe coded apps for **a lot** of money, rather then using any of the agents to build something.

I really just discarded it as another attempt to build a business with software, without a knowledge of how software works. The next progression in No Code. Many of the vide coding stories I read, they never looked at the code. Just accepted it.

Turns out, while that it is true that people are being dumb, there is a slice of people using AI in a smarter way.

### A Smarter Way to Use AI

After realizing that I was falling behind. And falling behind fast, I decided to give Codex a fair shot. Started pretty simple. Nothing with AGENTS files, skills, or anything else. Just mostly asking it to explain parts of the code to me and having it develop a plan to implement bug fixes.

I just happened to be on a lot of support during this time. So I was able to develop a really good bug diagnosis, plan, and implement workflow.

That works really well. It works because it has a solid dataset to work from. It can read, follow, and reason through the code way faster than I can. We get to a similar result. Codex just does it in seconds/minutes over possibly hours for me.

Using it that way, it's an augmentation of me. I review every change that is suggests and ask it about things I don't understand, and make sure it a) understands the problem, and b) is implementing something that I approve of. Like I might if I were mentoring a junior developer.

And that's the sweet spot for me. AI, or how I use it, is still bad at big loosely defined problems. I still try every so often. It fails every time. But if I design what I want to build, give it small steps, and review/ask questions, it does the job remarkably well. And learns the tendencies I prefer.

I now think this is a big enough shift that we won't go back to writing everything by hand. I imagine we will still teach how to write code by hand. But it will be like learning to write compilers. It's just a learning exercise, that you _may_ need some day.

From here and moving forward, what I can think of and design, AI can carry out for me. Which works really well for me because I enjoy the design side of things.

### Documenting, PR descriptions, QA steps

It does code pretty well given some guardrails. But it really saves time with some other things that I used to do by hand.

PR Description and QA Steps.

I've always been someone that prefers to add good amount of detail. I believe that a pull request should be light work for the reviewer. No sense in making a reviewer do a bunch of work, when I could have provided some details to make that easier.

That's a prompt now.

_I need a PR description of the changes we've made_

And in seconds, a detailed description of changes is generated for me. I read it and make some changes. In certain situations, I have to tell Codex to explain a certain change for the reviewer. If there is something in particular I want to hit on.

QA steps are another one I don't have to do anymore. Similar prompt.

_I need QA steps for a non-developer for the pull request_

Codex does this way better than I ever did. A detailed list of things to check, and how to check them. It always has edge cases that I wouldn't have thought of.

And the last thing that I've delegated to Codex so far is documentation.  As you may know, there are a large group of developers that don't like docs. I'm not one of them. I prefer some sort of document that details how something was designed to work, some gotchas to look for, and some background into the decisions made.

This would take a ton of time before. Part of the reason that many developers don't like them.

Now a similar prompt.

_Generate some documentation that covers how this works, the decisions we've made, and how to use it_

Like the other prompts, I need to read and refine this. But it does a great job really fast. An additional thing that I sometimes add is to direct Codex by telling it who it should be geared for. It could be for developers, product people, or both in some situations.

### Building Skills

And lastly I've started to work on building skills. And to be honest, I'm not entirely sure it's worth it. I'm sure I'm not doing it right. I'm still super new to them.

I've built two so far.

The first one was an extraction of the bug diagnosis and workflow for implementing the fix. The skill UI looks like this.

    Use $bug-diagnoser.
    Bug: description of issue

It then analyzes the part of the code affected, builds a hypothesis of the issue, considers edge cases, and builds a plan for a fix. It does not implement anything. Just reports back what it found and a path to implement a fix.

It works well. It allows me to walk through a fix with small steps. But it seems to use more tokens. I'm not convinced it's better than my previous approach of saying _I have a bug I want to plan for_ and then paste it in bug description.

The other skill is just a style and refactor check right before PR.

Super simple UI

    $rails-style-review

That will scan the changes and look for refactoring opportunities, dead code, and ask it to adhere to some level of Rails standards and attempt to match the style of the code in the app.

Same story. It's simple and I think it uses more tokens that just asking to do those things.

I'm still continuing to relearn how to build software in the AI age, but I've started to really enjoy delegating a lot of this away. I've always been a very thorough developer, but not a particulalry fast one. Now I'm thorough and fast.
