---
layout: post
title: Anonymous Functions in Elixir
date: 2020-02-06
---

While learning Elixir there are these little learning moments where the task would be simple in another language, but is a little more complex in a new language and new paradigm.

The task was to create an anonymous function that reacts to the value of the arguments.

From [Programming Elixir](https://pragprog.com/book/elixir16/programming-elixir-1-6):

_If the first two are zero, return "FizzBuzz." If the first is zero, return "Fizz." If the second is zero, return "Buzz." Otherwise return the third argument._

Seems simple enough, but I was stuck. Based on the examples I had to look back on, I was using the wrong syntax. Those examples used tuples, and I was passing in arguments directly.

Also, anonymous functions and their arguments can be a bit misleading. I thought I would need `fn (a,b,c)`, but I actually leave that out, and just pattern match for those.

    fizzbuzz = fn
      (0,0,_) -> "Fizz Buzz"
      (0,_,_) -> "Fizz"
      (_,_,c) ->  c
    end

    IO.puts(fizzbuzz.(3,3,1))

Then I tried to run it in an iex console. I could load it with `iex fizzbizz.exs`, but couldn't call the function. Nothing worked.

I just decided to run it with elixir directly and print out the result of calling the function within the file.

    elixir fizzbuzz.exs

