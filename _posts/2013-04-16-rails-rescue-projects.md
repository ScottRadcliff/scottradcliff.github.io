---
layout: post
title:  Rails Rescue Projects
date:   2013-04-16
categories:
---

[Everyday Rails](http://everydayrails.com/2013/04/16/rails-rescue-2-testing.html) has a great series of posts on a Rails rescue project. Definitely recommended. Part 2 talks about testing.

> While the previous developer did have some tests in place, I quickly lost faith in them: On first run I got a number of deprecation warnings, then 60 percent of the provided tests failed.

I see this too, but it's important to note that blaming the developer is never the right move. There are so many variables that you are unaware of. Blame the code, not the developer.


> I began writing request specs (now known as feature specs in Capybara 2.0 and onward). I started with something basic: What happens when a user logs in?

That's pretty much how I approach untested applications. Start from the outside and see what happens. I'm looking to see what  setup is required, what files are touched, and the responses are.

Also, I'm not sure I would completely wipe the spec directory. It's probably the right thing to do, but I would prefer to keep *something* there while I build out the other tests, and then remove the old tests.
