---
layout: post
title: Parsing Paragraphs in Markdown
date: 2020-11-26
---

This is the second post in a what is a series about building an Elixir library. You can see the first post here -> [Creating an Elixir Library](http://scottradcliff.com/creating-an-elixir-library.html).

Now on to adding paragraphs. Which should be pretty easy. But before that, I need to add one change to the heading parsing code. I want to make sure it handles any number of words.

To do this, I need to add one line to `create_heading`. Just `Enum.join(tl, " ")` which just takes everything in the tail and combines them with a space separator.

```
  defp create_heading(text) do
    [hd | tl] = heading_text(text)
    level = String.length(hd)
    "<h#{level}>#{Enum.join(tl, " ")}</h#{level}>"
  end

```

A couple of expectations to make sure everything works. Just add a couple of cases with multiple words.

```
  test "Generates headings" do
    assert Bargain.generate("# Heading")                == {:ok,"<h1>Heading</h1>"}
    assert Bargain.generate("## Heading Two")           == {:ok,"<h2>Heading Two</h2>"}
    assert Bargain.generate("### Heading Two Three")    == {:ok,"<h3>Heading Two Three</h3>"}
    assert Bargain.generate("#### Heading")             == {:ok,"<h4>Heading</h4>"}
    assert Bargain.generate("##### Heading")            == {:ok,"<h5>Heading</h5>"}
    assert Bargain.generate("###### Heading")           == {:ok,"<h6>Heading</h6>"}
  end
```
And now all headings work, but we still only handle ones with pound signs. I haven't decided if I want to handle other versions.

Now on to paragraphs. This seems super simple, but I ran into a few issues as I started to refactor to make sure multiple things could be handled at the same time. For example, a heading followed by a couple of paragraphs.

To start I went with the ridiculously simple TDD version of just returning exactly what I want.

```
  def generate(text) do
    case String.starts_with?(text, "#") do
      true -> {:ok, create_heading(text)}
      false -> {:ok, create_paragaph(text)}
    end
  end
  
  defp create_paragaph(text) do
    "<p>#{text}</p>"
  end
```

Here I just simply add a false clause. If the string doesn't start with a pound sign, assume it's a paragraph and return whatever that is.

Simple test.

```
  test "Generates paragraphs" do
    assert Bargain.generate("This is a paragraph") == {:ok, "<p>This is a paragraph</p>"}
  end
```

Now I needed to handle multiple lines. A little tricky here. I wasn't sure how to split one string into multiple lines. In Ruby I can call `lines` on a string and get what I need, so I looked for something similar. Turns out it's just easier to split on something and enumerate through those. That was the approach I took.

```
  def generate(text) do
    parsed  = Enum.map(String.split(text, "\n"), fn x -> 
      String.trim(x)
      |> parse
    end)
    {:ok, Enum.join(parsed)}
  end

  defp parse(text) do
    cond do
      String.match?(text, ~r/^\#/)       -> create_heading(text)
      String.match?(text, ~r/^[a-zA-Z]/) -> create_paragaph(text)
    end
  end
```

You can see in the `generate` function that I split the string on any newline (technically not correct for markdown, but I'll return to that), remove leading and trailing spaces, and pass it in to be parsed. The use of `map` here is important because it returns a list. We need that list so we can return the string we have built up.

`parse` is interesting. I almost always reach for `case` and do some pattern matching, but I struggled getting some level of regex pattern matching working. The reason being is that the regex returns true/false. That only gives me two possible matches, like in the previous version of `generate`. I'll have plenty more than that.

So the solution is `cond`. With `cond` I can perform several different matches and react to them accordingly.

An interesting side note. Elixir has [character classes](https://hexdocs.pm/elixir/Regex.html#module-captures) you can use. Considering that a paragraph will likely start with a letter, because a number will probably indicate a list, I used `[:alpha]` in place of `[[a-zA-Z]]`, but it acted strangely. -- I just realized my problem. I'll go back and fix it. `[:alpha]` didn't always match because of a syntax error. It should be `[:alpha:]` (see the trailing :). 

The last thing I want to point out is the use of `join` at the end of `generate`. Since we get a list back, something like this `["<h1>Heading</h1>", "<p>This is a paragraph</p>"]`, we need to make that one big string to return.

And finally some tests to make sure I stitched everything together correctly.

```
  test "Generates paragraphs" do
    assert Bargain.generate("This is a paragraph") == {:ok, "<p>This is a paragraph</p>"}
    assert Bargain.generate("This is a paragraph") == {:ok, "<p>This is a paragraph</p>"}
    assert Bargain.generate("This is a paragraph\nAnd another") == {:ok, "<p>This is a paragraph</p><p>And another</p>"}
  end

  test "Generates a heading and paragraphs" do
    test_string = "## This is a heading
    With a paragraph
    and another paragraph"
    assert Bargain.generate(test_string) == {:ok, "<h2>This is a heading</h2><p>With a paragraph</p><p>and another paragraph</p>"}
  end
```

A couple of things here. In `Generates paragraphs`, I wanted to make sure I tested more than one paragraph at a time. And in `Generates a heading and parapgraphs`, I wanted to make sure I could test a more complete markdown string with a heading and a couple of paragraphs at the same time.

Next up is links.




