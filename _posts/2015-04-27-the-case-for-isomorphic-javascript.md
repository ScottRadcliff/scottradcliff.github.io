---
layout: post
title:  The Case For Isomorphic Javascript
date:   2015-04-27
permalink: the-case-for-isomorphic-javascript
categories:
---

If you know me at all. Even if you haven’t seen me rant on Twitter, you should know that I have this constant struggle with JavaScript. Not in the language itself, but more of an issue with what we, as developers, are doing with it.

Granted, JavaScript is just a programming language. As such, you can do programmery things with it.

My argument has always been *Is this the right task for JavaScript?*. One could say C++ is a great language, but you would be crazy to try and build a complete web application with it. That’s just not what it’s good at. It’s better at close to the metal stuff. Super fast code. And because of that, it’s more difficult to work with than a higher level scripting language.

Here is the part where I declare why JavaScript was invented so  I can make the case that we are using it wrong. But while researching I learned something I didn’t expect.

First, [JavaScript was invented for nonprofessional programmers](http://en.wikipedia.org/wiki/JavaScript#History). That sounds harsh, and I imagine this makes a lot of JavaScript developers angry. It could be reworded as “_JavaScript was invented to target non-java and non-c++ developers._” It was invented to give more developers access to a programming environment that they could work in and possible build more awesome stuff.

I didn’t expect that.

I expected to learn that JavaScript was developed just for web page scripting. That doesn’t appear to be true. I stand corrected.

Here’s the real kicker. Server side JavaScript was actually introduced in 1994 in a Netscape product called [Datacraft](http://www.datacraft.com/livewire.html).

Those involved in the early days of JavaScript were already planning for it to run on the server. They were planning on using JavaScript as a complete programming environment. Client and server.


## The Extracted API Fallacy

The idea of extracting client side code from server side code sounds perfect. Take all of your JavaScript front end stuff and have one app for it. It will handle displaying data, state changes, fancy interactions, and package management. Then take all of your server side logic, create an API, and feed that to your client side app.

Perfect!

We now have a client side app for rich interactions, and we have an API that can feed anything; iOS, Web, Android, etc… What’s not to like?

This is great in theory, but in practice it starts to fall apart  a bit. The first sign is that you still need a front end web server. Well, if you have any sort of progressive modern app you’ll need a web server. At a minimum, you will need a way to compile and serve all of your assets.

You’ll also need **a lot** of libraries and packages. And of course, if you use cool stuff like requiring modules as needed, you need a build process. That’s more dependencies.

All of this before you get to the server side.

The additional complexity is not worth it. This is why so many companies go heavy client side and then go back to the server side. I think if they would have went all in, they would have had a different experience. But that is hard for larger code bases. They definitely felt the pain.

We should be moving to easier, not more difficult.


## Decreasing Complexity with an Isomorphic Approach

I still remember the first time I used Rails. I **knew** it was a game changer and it was how I wanted to build applications. I haven’t seen that with JavaScript yet. Actually, it’s been the opposite. Instead of thinking *This is awesome! I want to build all applications like this.*, I think *OMG this is awful! Why is this so complex?*

Netscape had the right idea in ’94. If you are developing JavaScript apps, develop JavaScript apps. I think about the client side applications I have worked on. It would have been easier to add a node server and a data store than it was to maintain two completely different applications.

I’ve been researching and playing around with isomorphic application development. I really think this is the next logical step for the web.

I’d like to report back with more data once I have a few of these under my belt, but I really encourage you to take a look at isomorphic development. Especially if you’ve felt the extracted API pain.


