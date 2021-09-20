---
layout: post
title: Blockquotes in Markdown and Elixir
date: 2021-02-26
---


This is the fifth post in a series about building an Elixir library. You can see the other posts here:

* [Creating an Elixir Library](http://scottradcliff.com/creating-an-elixir-library.html)
* [Parsing Paragraphs in Markdown with Elixir](http://scottradcliff.com/parsing-paragraphs-in-markdown.html)
* [Parsing Links in Markdown with Elixir](http://scottradcliff.com/parsing-hyperlinks-in-markdown.html)
* [Italics, Markdown, and Elixir](http://scottradcliff.com/italics-markdown-and-elixir.html)

And again, I haven't touched this project in a long time. Revisiting it, and checking the README, it looks like Blockquotes are up next. Should be pretty simple. I opted for just one level of blockquote for now.

Initially I thought that I would need another module like [Hyperlink](https://github.com/ScottRadcliff/bargain/blob/master/lib/hyperlink.ex), [Bold](https://github.com/ScottRadcliff/bargain/blob/master/lib/bold.ex), or [Italics](https://github.com/ScottRadcliff/bargain/blob/master/lib/italics.ex). Turns out I didn't need a new module. It's really simple. One function does everything.

```
def create_blockquote(text) do
  replaced = String.replace_prefix(text, "> ", "<blockquote>")
             |> String.replace_suffix("", "</blockquote>")
  "<p>#{replaced}</p>"
end
```
Rather than doing some regex capture and then replace, I opted to just replace the beginning and end of the string if it starts with "> ". Looking at this now, I may need to update to also accept a ">" without the additional space. I'm not sure. I'll look up some markdown docs to see if the space is typically required.

This did require one more change. I needed to update the parse method to react to a line that starts with ">".

```
defp parse(text) do
  cond do
    String.match?(text, ~r/^\#/)          -> create_heading(text)
    String.match?(text, ~r/^[[:alpha:]]/) -> create_paragaph(text)
    String.match?(text, ~r/^>/)           -> create_blockquote(text)
  end
end
```
That last line directs to the blockquote code.

While throwing data in the module to check the results, I noticed a bug. If a string has multiple newlines, it doesn't split properly and breaks the whole thing. So I updated the split function to use a regex that looks for any number of newlines.

```
def generate(text) do
  parsed  = Enum.map(String.split(text, ~r/(\n)+/), fn x -> 
    String.trim(x)
    |> parse
  end)
  {:ok, Enum.join(parsed)}
end
```

Next up is code formatting. I expect this to take awhile. I see a good amount of manipulation there.
