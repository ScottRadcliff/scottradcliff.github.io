---
layout: post
title: Escaping Input with Sinatra
date: 2019-09-22
---

I have been hacking around on a little side project and I wanted to go super bones with it, so I skipped Rails and went with Sinatra. Not even a modular app. Just a simple classic app with an `app.rb` file and some views.

It's good for me to get back to simplicity once in a while. Big frameworks have a way of letting me forget some basic programming things because the framework does it for me.

I also decided I didn't want to use an ORM. Well, not a big ORM. I grabbed [Sequel](http://sequel.jeremyevans.net/). And figured I would only use what I needed to get the job done.

And since I was going with classic with Sinatra, I just wrote rawish SQL.

I have to admit it was pretty glorious. A couple of routes in one file, and some simple database queries. It's worth mentioning that since I only use this app on my computer for the time being, I don't need to guard against SQL injection. This frees me up to just put pieces together.

The app doesn't do anything super interesting. It just saves text and renders some markdown.

But before long, without the crutch of a framework, I got stuck on something *super* simple.

I ran into my first issue when I pasted some text into a textarea and went to save it. 

    Sequel::DatabaseError - PG::SyntaxError: ERROR:  syntax error at or near "t"

Originally, I thought it was an encoding issue from copying and pasting. After trying some different things, I was able to read a little more into the error message.

Turns out the Sequel library was inserting the values wrapped in single quotes, and having an apostrophe in there broke the SQL statement.

Easy enough, just escape the string and insert the escaped string. I'm embarassed to report that escaping that string took a few sessions to figure out (it's a side project, so I work on it here and there).

I tried `String#dump`. Nope.

I started working on a RegEx solution, but threw it out pretty quickly. I didn't like it and knew it wasn't the right solution.

I tried quoting the string with the [percent string](https://ruby-doc.com/core/doc/syntax/literals_rdoc.html#label-Percent+Strings) syntax. `%q[]`. I was **sure** this would work, but I couldn't get it to work. I don't use these special percent methods often, and it shows. Looks like I may have been able to get it to work with `%Q`.

I finally found something that works.

    Rack::Utils.escape_html(string)


And as it turns out (RTFM), it was [in the docs](http://sinatrarb.com/faq.html#escape_html) and I never saw it.


