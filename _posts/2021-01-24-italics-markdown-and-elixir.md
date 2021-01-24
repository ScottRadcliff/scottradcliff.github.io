---
layout: post
title: Italics, Markdown, and Elixir
date: 2021-01-24
---


This is the fourth post in a what is a series about building an Elixir library. You can see the other posts here:

* [Creating an Elixir Library](http://scottradcliff.com/creating-an-elixir-library.html)
* [Parsing Paragraphs in Markdown with Elixir](http://scottradcliff.com/parsing-paragraphs-in-markdown.html)
* [Parsing Links in Markdown with Elixir](http://scottradcliff.com/parsing-hyperlinks-in-markdown.html)

Just as I expected, with most of the work done when parsing links was built, italics was pretty simple. I have some duplication that I would like to remove, but it's not that important yet, and I'm cautious to add abstractions without a solid reason.

What I ended up doing it adding a pipe to `create_paragraph` and returning the last part of that `Tuple`. Maybe I could do something better here, but I don't hate it.

```
  defp create_paragaph(text) do
    "<p>#{elem(Hyperlink.convert(text),1)}</p>"
    |> Italics.convert
    |> elem(1)
  end
```

And for the italics work, I created a new module and defined very similar methods from the `Hyperlink` module.

```
defmodule Italics do
  def convert(string) do
    text = string
           |> capture_sections
           |> build_emphasis
           |> replace_emphasis(string)
    {:ok, text}
  end

  defp replace_emphasis([head | tail], text) do
    replace_emphasis(tail, String.replace(text, matcher(), head, global: false))
  end

  defp replace_emphasis([], string) do
    string
  end

  defp capture_sections(string) do
    Regex.scan(matcher(), string, global: true)
  end

  defp build_emphasis(captures) do
    Enum.map(captures, fn x -> 
      "<em>#{Enum.at(x, 1)}</em>"
    end)
  end

  defp matcher do
    ~r/_(?<text>[a-zA-Z0-9\s]+)_/
  end
end
```

If you've read the [parsing links](http://scottradcliff.com/parsing-hyperlinks-in-markdown.html) article, this will look really familiar. The methods almost have the same names, and they share similar responsibilities. The one addition here is the addition of a `matcher` function to hold that `Regex` for me. I got tired of forgetting to update the second place that used the same regex.

Looking at this, I can see where I could extract it. But right now it just feels like premature extraction. I like opening this file and seeing everything `Italics` does right in front of me.

And lastly, the tests are really simple.

```
  test "italicizes text" do
    assert Bargain.generate("there is some _text_ here") == {:ok, "<p>there is some <em>text</em> here</p>"}
    assert Bargain.generate("there is some _text_ here and _here too_") == {:ok, "<p>there is some <em>text</em> here and <em>here too</em></p>"}
    assert Bargain.generate("there _is some text here and here too_") == {:ok, "<p>there <em>is some text here and here too</em></p>"}
  end

```

I just realized that the `Italics` module doesn't have unit tests, but there aren't really necessary. That logic is tested well enough.

Next up, bold text. I expect the same sort of path. Pretty simple.
