---
layout: post
title: Why Doesn’t Backend Tech Change That Often
date: 2018-07-04
---

I wonder why we don’t hear more about backend technology changes. We often hear that some software product ripped out a certain front-end tool for a different one. Most recently I’ve heard about React being ripped out. But I seem to remember Ember and certainly Backbone being mentioned in the same sort of conversations. The only server side change I can recall is when Twitter ditched Rails.

I have a theory.

A short disclaimer: this isn’t intended as front-end hate. Simply an observation.

Most backend frameworks do different things. Take Sinatra and Rails for example. Both web frameworks. But one simply has some routing and views, while the other is comprehensive. It manages database connection details, secret encryption, asset minification and serving, and even uploading files.

When you need something simple, you grab Sinatra. When you need something much larger, you grab Rails.

The only time you need to change backend tools is when you change languages. Ruby can be slow. If you needed to deal with several connections, like Twitter, you may reach for a language that is more performant.

This isn’t the case with front-end. Rarely does something introduce something new. It seems to be a refresh on the same thing. I just spent some time reviewing VueJS. It’s not that different from React. Both serve a view layer, have component support, and are reactive. It’s just syntax.

There is something to be said about technology maturity and stability.

