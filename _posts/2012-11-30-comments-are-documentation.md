---
layout: post
title:  Comments Are Documentation
date:   2012-11-30
categories:
---

I love the [RubyRougues](http://rubyrogues.com/), and spent some time today catching up on some missed podcasts. There is a recent episode about [documenting code](http://rubyrogues.com/079-rr-documenting-code/) that I disagree with enough to warrant a post about my thoughts.

First, let me just say self-documenting code is a fallacy. It may be self-documented to *you*, but that doesn't mean that it is for someone else. Maybe the person reading you code is at a different level, or maybe they are new to your particular language. Whatever it is, there are way too many variables to assume that your code is so incredibly awesome that it speaks for itself.

## I'm Not talking about inline comments
Let me state that I am not talking about inline comments. When someone says that they hate comments and that comments are a code smell, I always picture larger documentation-like comments. I'm really not sure what comments they are talking about, but I put zero comments in the body of the method.

I do comment almost all of my methods. I include a minimum of three things.

1) What does this method do

2) What does it expect

3) What does it return

That's pretty much it. Some are longer with examples calls and returns; some are shorter with just the three items I listed. I use [TomDoc](http://tomdoc.org) as a guide. If you haven't read TomDoc, go read through it, there are some good tips for documenting code in there.

So, if you've made it this far, you may expect an example. Here is a small example from code I was working on this week.

    # Public
    # Creates associations with all line items passed to the order instance
    #
    # line_items = String of line_item ids separated by commas
    # Usage: @order.add_line_item_associations("1234, 63273, 73636")
    #
    # Returns nothing
    def add_line_item_associations(line_items)
      if line_items
        line_items_arr = line_items.split(",")
        line_items_arr.each {|item| update_line_item(item) }
      end
    end

The documentation tells the reader the things that I mentioned. It defines what it does, it tells what the input is. *This is important, because it can be confusing. The parameter name is line_items. That could be an array of line items, a hash of line items, or what it actually is, a string of line item ids.*  And it defines what it returns, in this case nothing. *Yea, I know Ruby always returns something*

Is this helpful to the next developer? Absolutely. Is it helpful to me? You betcha. Six months from now, when this code hasn't been looked at in a long time, I can see why I wrote this and what it's for.

Comments aren't evil when used correctly.

One last thing. Update your code? Update your docs.

