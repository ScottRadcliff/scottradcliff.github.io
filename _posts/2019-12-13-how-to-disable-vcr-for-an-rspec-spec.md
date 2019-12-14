---
layout: post
title: How to Disable VCR for an RSpec spec
date: 2019-12-13
---

Sometimes you need to disable your testing tools in order to know what you're testing.  Mocking and stubbing are great. But only when you know what you are dealing with.

If you have VCR installed and configured in your Ruby app, and need to disable to make real requests until you know your code works, add the following lines.

    WebMock.allow_net_connect!
    VCR.turn_off!

Of course, make sure you take these lines out once you're done.
