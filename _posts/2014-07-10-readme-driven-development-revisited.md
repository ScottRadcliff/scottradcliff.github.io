---
layout: post
title:  Readme Driven Development Revisited
date:   2014-07-10
categories:
---

A couple of years ago, Tom Preston-Werner wrote a [blog post](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) about writing your README first. The basic premise was simple. Before you write any code, write down how it will work. Detail all of your documentation, and then once you have a solid understanding about how your library will work, you then drop back and write the code.

It was quite popular, and a lot of developers loved the article.  It solved two problems. First, it provided a solid way to provide documentation for users of your library. Second, it provided an opportunity to find and think through possible solutions before they were programmed.

Tom stated that we missed something between [waterfall](http://en.wikipedia.org/wiki/Waterfall_development) and [agile](http://en.wikipedia.org/wiki/Agile_development).

On the complete opposite side of this issue, Joel Spolsky wrote a [blog post](http://www.joelonsoftware.com/articles/fog0000000036.html) about creating highly detailed functional specs.

Joel stated that without all the details formally documented, a developer can't possibly know what to build. There are just too many questions that need to be answered, and these questions are easier to answer in a detailed text document.

Joel goes so far as to say that no code is written at Fog Creek Software without a spec.

I think there is some room between the two of these. There is a sweet spot between a README for a library and a fully detailed document for an application.

# Functional Specs
Before I dive into what I think the sweet spot is, let's define what a functional spec is.

A functional spec is document that details all of the user flows of an software application. It goes way beyond just documenting how an app works. It goes into great detail about every possible item in the application. Generally, these documents have wireframes and screenshots of the user interface. A functional spec might go so far as to have personas and scenarios.

The knock on full fledged functional specs is that you can't possibly know everything up front. These specs are directly tied to waterfall. The idea is that a product manager creates these documents and "hands them over the wall" to the developers, who then strictly follow them.

The problem with this method is change. As developers learn about the application while developing it, it becomes difficult to add features based on new knowledge because the manager has spent several hours detailing everything.

Joel really goes into detail in his blog series. He makes some great points and has me about 80% convinced that these documents are quite useful.

My problem is that most of these specs go too far.


# Readmes
When Tom described the process of documenting your library or project with a README first, he referenced the fact that we lost something between functional specs and agile practices.

Tom targeted libraries and projects specifically, I tried it out and thought it was great, but I don't write a lot of libraries. I write lots of applications, and in a true agile mindset, documentation before code is evil. So I kinda forgot about it and moved on.

But these types of documents do work with software applications regardless of type. It's super helpful to think through views and features and document how all of that will work.

This leads right into TDD. Something gets lost with user stories. They typically lose context, even with the given when then syntax.

# The Sweet Spot
Okay, so if we have these monster documents that are created in a word processor by some manager and then we have simple text files created by developers, where do they meet in the middle.

Well, the word spec has a bad connotation with it. Traditionalists think of these docs as final and agilists run from them like the plague.

What about guide? What if these docs were not final spec, but guides. Maybe these docs just state _based on what we know right now, this is how the application will work_. The guide then becomes more of a minimum set of features and screens. And it's easier to change a guide. No one feels bad about updating a simple guide that doesn't have three full days worth of work attached to it.

## The Functional Guide
So, this is it. I think a Functional Guide is what serves me best. I can take everything from Readme Driven Development and _some_ aspects from Functional Specs and create a hybrid.

The format depends on the audience. If it's developers, then it should absolutely be a README. If you use markdown, you can add images of wireframes, sketches, or whatever else you need to communicate. Plus, it's diffable in Git. You can update the doc as you build out new features and deploy the new README with the branch you are working on. It just becomes part of the refactoring process.

If your audience isn't developers, then maybe a formal document makes more sense. Something interchangeable, like a PDF. It becomes a little harder to track changes, but it's certainly possible.

In the end, this is really about thinking. Thinking about the users of the software. How will they interact? What is the best flow for them to complete a job? In fact, what [jobs need to be done](http://www.innosight.com/services-expertise/expertise/jobs-to-be-done.cfm)?

One last point. If you've ever been the newest team member, you'll know that it can be really difficult to get up to speed on a project. It would be incredibly useful to have a document that you could look through that detailed the thoughts behind some of the decisions that were made. Bonus points for being able to go through the history of that document.

And finally, I'm just finding what works for me. Maybe this is totally insane to you. I don't know. Maybe your brain is wired differently from mine. I know that when I sit and start typing out how an app should work, it opens a lot of door to ideas that I know I wouldn't have thought of before.

Give it a shot. See what you think.

I'd love to hear your thoughts on what works for you. If you don't mind, send me an email at scott@scottradcliff.com and share your experience.






