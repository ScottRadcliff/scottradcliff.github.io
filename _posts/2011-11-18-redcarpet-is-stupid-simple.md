---
layout: post
title:  Redcarpet Is Stupid Simple
date:   2011-11-18
categories:
---

Adding [markdown](http://daringfireball.net/projects/markdown/) has been on my very long list of todos for this site. I recently rebuilt this site in just plain 'ol rails. Partly because I thought it was the best system, but also so I can play. I really thought adding markdown support would be more difficult. I almost feel like I skipped something.

I went with [Redcarpet](https://github.com/tanoku/redcarpet) and it's as easy as storing the markdown in your database and making a few method calls in preparation for display.

    Redcarpet.new(post.content).to_html.html_safe

Really. That's it. I haven't even tossed that in a helper yet. As always, that's to Ryan Bates and [Railscasts](http://railscasts.com/episodes/272-markdown-with-redcarpet) for a great intro.

Now to add live preview like Stack Overflow.


