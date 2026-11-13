---
layout: post
title: AI Agents and Over Engineering
date: 2026-11-06
---


I've been messing around with writing some skills. It's really just for learning and practice. I figured the best way to get better would be to ask ChatGPT to make me a list of sample projects to build with an agent. And then build them. Initially, I was thinking that I could fine tune my agentic coding skills, but then I realized the real benefit is building *systems* rather than prompts.

So I set out to build something that sort of combined a skill and some code. Code as in a script or small app, something like that. What I've discovered is by far, the biggest problem I have with agents is over engineering.

Even with a decently documented markdown file. It's really difficult to get all of the boundaries defined. Agents are just smarter and think of things we don't. The issue is, they think of things that usually don't matter yet, or scope that we don't think is important. But I miss the hints in the language the agent uses.

I got bit by this over engineering issue again. But I'm still learning. And the good news is I caught it.

## An Example Project

One of the sample projects that ChatGPT suggested was a lean grep-like utility. Seemed simple enough. I'll just think about what grep does, pick a couple of features, and then build that.

This time around, I decided to let the agent pick what language we should use.

So I build a rough sketch in markdown, passed it to Codex, and asked it help me build a plan to implement this in small pieces.

Codex suggests Go. I thought it was cool, since I only had a working knowledge of that language.  So I started building.

And building.

And building.

It was pretty good. I was at the point where I had this executable that I can call from the command line, and I could also use a skill for more natural language type searches. All kinds of bells and whistles. Color coding, links to default editor at the line number reported, timeouts if the directory search was taking too long, etc...

Then I noticed I got bit again. It happens slow. Commit by commit. And maybe it's just my workflow. I like smaller changes that I can review and approve. Often asking questions along the way. I think this helps with scope. But it still got me.

So I created a branch will all the over engineered stuff and it's on GitHub [Over Engineered Go Code](https://github.com/ScottRadcliff/sift/tree/over-engineered) And I built a new branch to simplify. Only a skill. And the code needed is local to that skill. Again I let the agent suggest a language. It liked Python for this. But it did give me some options. I think Python makes sense.

That simplified code is also on GitHub in the main branch of the [Sift Project](https://github.com/ScottRadcliff/sift) 

[See Sift on the Projects page]({{ '/projects/' | relative_url }}#sift).

## How Does This Happen?

I think it's because sometimes the plan that an agent writes in very verbose. It's good. Lots of detail. But I don't read enough of it. I suspect most of us don't. 

I think I have a good grasp on it, but complexity leaks through. Maybe that's the next thing to tackle? I think I'll write a skill to help manage complexity and over engineering.


