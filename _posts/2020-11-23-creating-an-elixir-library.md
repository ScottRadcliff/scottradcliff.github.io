---
layout: post
title: Creating an Elixir Library
date: 2020-11-23
---

I've been writing Elixir for a while professionally. I've worked on a couple of production apps. Mainly umbrella apps with just a little bit of [Phoenix](https://www.phoenixframework.org/) for API end points. And that's a ton of fun. But I want to do more. So I decided to just write a bunch of stuff in Elixir. Basically all of my sites/software. A good place to start is a simple library. It's a good exercise, and a good opportunity to learn things that I haven't used much, and then share what I learn.

I'm writing a markdown library called [Bargain](https://github.com/ScottRadcliff/bargain). The readme has a list of features I'm going to implement as part of the generator. I'll write something up each time I learn something new or implement a new part. Starting now.

I started with generating headings. Specifically the # version. In true TDD style, the first passing examples were crazy simple.

```
  def generate(text) do
    case String.starts_with?(text, "#") do
      true -> {:ok, create_heading(text)}
    end
  end

  defp create_heading(text) do
    "<h1>#{heading_text(text)}</h1>"
  end

  defp heading_text(text) do
    String.trim(text)
    |> String.split
    |> tl
    |> Enum.join(" ")
  end
```
It just takes some text, checks to see if it starts with heading syntax. If it does, push it to create the heading.

I originally had the `heading_text` syntax in the `create_heading` function, but decided to break it out into a function that always returns the text of the heading. It just cleans up the string and splits it. `tl` is probably the most confusing part, it breaks it up into head and tail, `tl` gives me everything except for the first part of that List, and then just join the remaining parts into a string of text.

And finally, the obvious part of just returning `h1` explicitly.


The first test looks like this:

```
  test "Generates HTML" do
    assert Bargain.generate("# Heading") == {:ok,"<h1>Heading</h1>"}
  end
```
Pretty simple. I just wanted to make sure it was wired properly and returning a tuple.

The logic for returning this for all headings is a little more interesting.

The tests.

```
  test "Generates headings" do
    assert Bargain.generate("# Heading")      == {:ok,"<h1>Heading</h1>"}
    assert Bargain.generate("## Heading")     == {:ok,"<h2>Heading</h2>"}
    assert Bargain.generate("### Heading")    == {:ok,"<h3>Heading</h3>"}
    assert Bargain.generate("#### Heading")   == {:ok,"<h4>Heading</h4>"}
    assert Bargain.generate("##### Heading")  == {:ok,"<h5>Heading</h5>"}
    assert Bargain.generate("###### Heading") == {:ok,"<h6>Heading</h6>"}
  end

```
I could have had a separate test for each heading, but this is fine.

And the updated code.

```
  def generate(text) do
    case String.starts_with?(text, "#") do
      true -> {:ok, create_heading(text)}
    end
  end

  defp create_heading(text) do
    [hd | tl] = heading_text(text)
    level = String.length(hd)
    "<h#{level}>#{tl}</h#{level}>"
  end

  defp heading_text(text) do
    String.trim(text)
    |> String.split
  end
```

The `generate` function doesn't change, but `create_heading` gets more complex

Instead of calling `tl` in `heading_text`, I opted to call `hd | tl` in `create_heading` so I can get the pound signs for heading level and the text of the heading in one call.

Now I can just call `String.length` to get the heading level, and just display the rest. You may notice that I'm not handling multiple words in the heading. `tl` will be a List.

I'll start on that next. After that I'll start into paragraphs.
