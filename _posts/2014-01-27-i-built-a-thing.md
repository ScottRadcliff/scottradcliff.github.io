---
layout: post
title:  I Built A Thing
date:   2014-01-27
categories:
---

This past week I became frustrated with RSS readers. RSS is a large part of my day, and because of that I like for the app I use to be reliable. I don't require too much of the app. Just give me stuff to read and don't do anything stupid.

I won't go into why my previous reader app failed me. You can read all about Feedly and their practices with a quick search. There was too much negative stuff for me and I felt it was time to get out before it got any worse. There is some truth to the statement *where there is smoke, there's fire*; too much smoke for me.

I'm sure Feedly has some great people working for them, I don't blame the employees. It's just not a good option for me.

## Building Tools for Me

One of the goals that I created for this year was to build my own tools. If there is something I do a lot, I should build a tool for myself to use. I don't plan on building these tools to sell, but that may end up happening someday if I think they are good enough.

If you read or follow [Nathan Kontny](http://ninjasandrobots.com/), which you should, he often talks about how be built [Draft](https://draftin.com) with nothing else in mind but to create a better writing experience for himself. He didn't worry about features or lack of. He didn't worry about adding things that other people may have seen as must haves. He just built something he wanted. And then iterated. Nate often talks about how simple Draft was in the beginning.

As a matter of fact, you should go read about [Abe](http://ninjasandrobots.com/abe), where Nate talks about building the simplest thing that could work as a starting point.


## Featureless

That's how I approached this new RSS tool. The smallest thing that does what I need it to do. I want it to do more, but it works as it is. Now I can iterate, and learn.

It's missing a ton of features.

- It doesn't pull in only updated feeds.
- It doesn't track what I've already read.
- I have to manually enter a source.

Here is what it does.

- Pull in a full list of sources and display the last 5 entries from each source.
- Build a list of sources in the sidebar as links based on the feeds it has fetched.
- Replace content with data from a single feed when a source from the sidebar is clicked.


I like what I have built so far in a weekend. It does what I want it to. I can already see some issues that need to be addressed. Those are up next.

- Speed enhancements. Pulling in all sources is very slow. Thinking that maybe pulling in all source urls and fetching the one at a time asynchronously is a better option. It currently fetches them all through a server side API call and then returns a large array of everything.
- Loading indicator. I need something to let me know the app is working on fetching data.
- Error handling. From time to time, a feed will fail to load. When that happens, the app fails silently.

## Learn by Doing

I've learned a lot about what I need from an RSS reader and about the failure points. The way I am accessing sources is still susceptible to failure. If one fails, the whole thing crashes.

I forgot how much fun it is to build these tools. Time just kind of slips away. It's freeing to now have to worry about what someone else might want.

