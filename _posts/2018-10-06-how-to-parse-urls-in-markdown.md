---
layout: post
title: How to Parse URLs in Markdown
date: 2018-10-06
---

I have been spending some free time hacking on a little Markdown library in Ruby. It's a fun project. I hadn't built a Markdown library before, and it's good practice to work on something that isn't necessarily work, but for fun and learning. It's a great way to play around and not worry about how long it takes, or how fast it is. One last point. It's a great way to play with new things without worrying about budgets or breaking anything.

It's in a pretty ugly state. The class is called `Render` and the main method is also called `render`. I'll change that later.  As I'm writing tests, the word render kept coming to mind, so I went with it.

<!--more-->

What I really end up with is some form of `markdown.render`, which I like. I need to rethink what the interface looks like. The tests look something like this. _I don't like the use of the variable `str`, so I'll change that also._


    describe "hyperlinks" do
      it "renders a hyperlink" do
        str = "Please [visit google](http://google.com)."
        markdown = Render.new(str)
        expect(markdown.render).to eql "<p>Please <a href=http://google.com>visit google</a>.</p>"
      end
    end


But that's not the interesting part. The interesting part is the regular expressions. In particular the hyperlink regular expressions. It took me longer than I thought to get a working solution that worked globally.

First, the use case.

Take a string, find all occurrences where we have text inside square brackets, followed by text in parentheses. Take the text from the parenthesis, and build a hyperlink with the text from the square brackets as the displayed text.

Example: This is a string with a `[link](http://google.com)` to Google.

In this example, we want to render a hyperlink that reads `<a href="http://google.com">link</a>`

The tricky part is that we need to reverse the order of the text found. The first capture is used last, and the second capture is used first.

So, we need a way to capture that text, but without the square brackets or the parentheses.

This was my first tab at it.

`/\[(.+)\]\((.+)\)/`

Seemed to do the trick. Here is what it does.

* `\[` Find the first square bracket. 
* `(.+)\]` Capture everything inside the square brackets. The parentheses will capture everything inside, and the `\]` completes the first part, telling it stop there. Again, escaping the square brackets because they have special meaning. A `.` is anything. And a `+` is one or more times. Essentially, I’m telling it grab *anything* from inside the square brackets. As long as there is something.
* `\(` Then find the next parentheses. Escaping again, because parentheses have special meaning in regular expressions. We need to escape to make sure we get the parentheses, and not the special meaning.
* `(.+)\)` And then again, we want to capture everything inside the parentheses. So we use parentheses for their intended purpose. A lot of parentheses on this one. This can get a little confusing.

After all of that, the regex matches, and pulls out the text I need into capture groups.

If I were to run this with Ruby's match method I would see the results.

    "This is a string with a [link](http://google.com) to Google".match(/\[(.+)\]\((.+)\)/)
      => #<MatchData "[link](http://google.com)" 1:"link" 2:"http://google.com">

The first segment, `"[link](http://google.com)”` is the whole match, and the next two, numbered 1 and 2 are the captures. These are what we need. Now we can build our link tag.

`match` is cool, but we need substitution. Ruby has `gsub`, which can either update a copy of the string or the string in place.

When using captures, we use `\n` to refer to the captures. We use this to update our match with our new link.

Now we can call this:

    "This is a string with a [link](http://google.com) to Google".gsub(/\[(.+)\]\((.+)\)/, '<a href=\2>\1</a>')
      => "This is a string with a <a href=http://google.com>link</a> to Google"

I can't seem to figure out how to wrap the URL in quotes. Partly because if you use double quotes you get unicode back.

    "This is a string with a [link](http://google.com) to Google".gsub(/\[(.+)\]\((.+)\)/, "<a href=\2>\1</a>")
      => "This is a string with a <a href=\u0002>\u0001</a> to Google"

I've tried a few things and decided it wasn't that big of a deal and moved on.

So, this works. Sort of…

The problem is when we have multiple links in one markdown string. Our _just give me everything inside_ way of capturing breaks.

Take this string for example.

    "This is a string with a [link](http://google.com) to Google. And [one to yahoo](http://yahoo.com) also."

If we run that through our `gsub` code block, we get some unexpected results.

    "This is a string with a [link](http://google.com) to Google. And [one to yahoo](http://yahoo.com) also.".gsub(/\[(.+)\]\((.+)\)/, '<a href=\2>\1</a>')
      => => "This is a string with a <a href=http://yahoo.com>link](http://google.com) to Google. And [one to yahoo</a> also."

I can't really explain what happened. I just know that the `.+` operation took too much because it got confused due to multiple matches.

We need to be a little more specific.

The next version of the regex doesn't just grab anything, but rather grabs either a word character or a space, one or more times.

    "This is a string with a [link](http://google.com) to Google. And [one to yahoo](http://yahoo.com) also.".gsub(/\[([\w|\s]+)\]\((\S+)\)/, '<a href=\2>\1</a>')

You may notice that the first capture uses `\w` and `\s`.

    \[([\w|\s]+)\]

The `\w` is for a  word characters; letters, numbers, or underscores. And the `\s` is any whitespace character. This allows us to have multiple words in the link text.

One last thing with this segment. The `|` in between the `\w` and `\s` is for either of those. So that I can match a word character or space multiple times.

The last segment has a small subtle change.

    \((\S+)\)

The `\S` signifies any non-whitespace character, with the `+` one or more times.

Because URLs do not have spaces, we can capture the whole thing with this change.

Now, finally, we have a working regex for capture multiple links in markdown and rendering.

The final substitution code is:

    gsub(/\[([\w|\s]+)\]\((\S+)\)/, '<a href=\2>\1</a>')

Now we can transform any number of links on a block of markdown defined text.






