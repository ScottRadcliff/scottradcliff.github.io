---
layout: post
title:  How To Clear A Sqlite Database With The Sequel Gem
date:   2015-03-03
categories:
---

I’ve been playing with a new [Sinatra](http://sinatrarb.com) app. While I am building it out, I am getting back to basics. I’m only adding what I need as I need it. I really have no preconceptions of what I am building. It’s a journaling app, and I am just starting with a big ‘ol textarea.

Keeping with simplicity, my database is super simple. I am just using [sqlite](http://www.sqlite.org/) and accessing it via the [Sequel](http://sequel.jeremyevans.net/index.html) Rubygem.

While putting things together, I had some crappy data I wanted to clear out, but didn’t want to write some method to reset the database or setup environments yet. Turns out it’s pretty simple with Sequel.

With a sqlite database called `journal` and a table called `entries`, in a terminal, I just run

    sequel sqlite://journal.db

This drops me into an [irb](http://ruby-doc.org//stdlib-2.0/libdoc/irb/rdoc/IRB.html) session with `DB` setup as my database.

Sequel implements a [`drop_table` method](http://sequel.jeremyevans.net/rdoc/classes/Sequel/Database.html#method-i-drop_table)

    DB.drop_table(:entries)

Now I have my clean database.
