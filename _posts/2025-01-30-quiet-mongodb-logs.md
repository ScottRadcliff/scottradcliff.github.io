---
layout: post
title: Quiet MongoDB Logs
date: 2025-01-30
---


I find myself in a Rails project again. And this particular Rails project uses MongoDB. The logging from MongoDB is excessive, maybe it's Mongoid, I don't know. But it's extremely excessive.

For every one event in the app, I might get 5 lines of Rails output; the router, some controller stuff, and views rendered. I get 47 lines of Mongo logs. I counted.

I think we can agree that's insane. I tried everything I could find. I updated the Mongo initializer, the Mongo config, tried updating the development config, and even looked in the Dockerfile. I even tried setting it to report only errors, which is kinda crazy. Nothing worked.

In the end, just regular old unix tools did the job,

My solution is just to filter with `tail` and `grep`

`tail -f log/development.log | grep -v "MONGO"`


Much more sane and I can get to the full insanity log level if I choose.

