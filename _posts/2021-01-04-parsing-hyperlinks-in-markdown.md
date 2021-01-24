---
layout: post
title: Parsing Hyperlinks in Markdown
date: 2021-01-04
---

This is the third post in a what is a series about building an Elixir library. You can see the other posts here:

* [Creating an Elixir Library](http://scottradcliff.com/creating-an-elixir-library.html).
* [Parsing Paragraphs in Markdown with Elixir](http://scottradcliff.com/parsing-paragraphs-in-markdown.html)

It's been a minute since I've posted one of these updates. It's due to a  mixture of other things getting in the way and struggles with recursion. I thought I understood recursion in Elixir, but apparently not. I learned recursion so long ago that I've forgotten most of it. At any rate, I got it, and I think the lesson I learned is that `head | tail` is the best approach trying to iterate the same thing multiple times.

The problem is pretty simple in theory. Look for any part of a string that begins with `[]` and ends with `()`, extract the contents, build a hyperlink with the contents of `()` as the url, and the contents of `[]` as the link text. Then replace the `[]()` part with the actual hyperlink. Do this globally.

The trick here is immutability. The string that you are updating must be new every time. I'll fix that later too.

I'll just present my working solution.

In, my main `Bargain` module, I updated `create_paragraph` to call out to a new module I made called `Hyperlink`.

```
  defp create_paragaph(text) do
    "<p>#{Hyperlink.convert(text)}</p>"
  end
```

And here's the entire Hyperlink module

```
defmodule Hyperlink do
  def convert(string) do
    links = capture_link_segments(string)
           |> build_link

    replace_link(links, string)
  end

  defp replace_link([head | tail], text) do
    replace_link(tail, String.replace(text, ~r/\[\w+\]\(http:\/\/\w+\.com\)/, head, global: false))
  end

  defp replace_link([], string) do
    string
  end

  def capture_link_segments(markdown) do
    Regex.scan(~r/\[(?<text>\w+)\]\((?<url>http\:\/\/\w+\.\w+)\)/, markdown)
  end

  defp build_link(captures) do
    Enum.map(captures, fn x -> 
      "<a href='#{Enum.at(x, 2)}'>#{Enum.at(x, 1)}</a>"
    end)
  end 
end
```

There is some interesting stuff, so I'll unpack this a bit.

I will start with `convert`. That will take our markdown string, pull out the segments (the parts in `[]` and `()`), build links for those into a list, and then replace them all before returning the string. Looking at this now, it should return a tuple `{:ok, string}`. I'm a believer that all public functions should return tuples, but I'll do that later.

 The `capture_link_segments` function will return a list of of those captures. More precisely, a list of lists. Given the string _"This [is a link](http://google.com) and [another](http://google.com)"_, it would return:

 ```
[
  ["[link](http://google.com)", "link", "http://google.com"],
  ["[another](http://google.com)", "another", "http://google.com"]
]
 ```

And I just found a bug. That regex doesn't handle multiple words in the link text.

Then on to build the link with `build_link`. Pretty simple here. Map over the list and create and actual HTML link.

Now the interesting part, and the part that gave me the most trouble. Recursion.

The tricky part is the string of text. We need to manipulate this, but Elixir likes immutability. I went through lots of very messy iterations of this. I won't list them here, but they are in the [commits on GitHub](https://github.com/ScottRadcliff/bargain/commits/master). What I finally had to do is drop back and review recursion in Elixir and write recursion code outside of this project, so I could focus on the solution. Dave Thomas explains this really well in [Programming Elixir](https://pragprog.com/titles/elixir16/programming-elixir-1-6/), a great resource. I went back to that book for review.

Turns out the solution is pretty simple. Elixir has a way of making complicated things simple, but you first need to understand the complicated thing.

By using `head | tail` I was able to constantly iterate of the collection until it was empty. And by passing in a string as the second parameter, I was able to constantly build a new string until I was done. The meat of the recursion is in the first `replace_link([head | tail], text)` function. The match to just return happens in `replace_link([], string)`.

As long as the first parameter has something in the list, it will fire the string replacement operation. If it's empty, it just returns the string. It took me *days* to get here. Those days are just a couple of hours here and there, but still, a very long time. Hopefully, I'll remember this pattern going forward.

Next up is fixing the bugs I found, then italics, bold, etc... I should be able to reuse some of this recursion logic to complete that.

Update: The fix for multiple words was simple. I needed to update the Regex to accept word boundary or whitespace. `~r/\[(?<text>[\w\s]+)\]\((?<url>http\:\/\/\w+\.\w+)\)/`. I still need to address the url part of th regex





