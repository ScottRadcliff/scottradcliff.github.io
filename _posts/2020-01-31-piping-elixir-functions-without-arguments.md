---
layout: post
title: Piping Elixir Functions Without Arguments
date: 2020-01-31
---

Yesterday as I was working on some Elixir code, I discovered something that wasn't obvious to me before. If you have a function that takes an argument, you can leave the argument out if you piping functions.

In retrospect it makes sense. When you pipe functions in Elixir, the data being piped in becomes the first argument.

IO.inspect and Enum.reject are the examples that I was working with.

IO.inspect has two variations. One with two arguments and one with three arguments. I'm just using the one with two arguments. The functions signature is this:

  inspect(item, opts \\ [])

So, assuming I have some variables called coll, I can inspect that with `IO.inspect(coll)`. The opts I always uses is label, so I can find it easily in the log. `IO.inspect(coll, label: "Debug Collection")`


But if I am piping my coll variable through a series of calls, I can leave out all arguments because opts is optional.

    coll
    |> some_function
    |> IO.inspect
    |> some_other_function

Previously, I was inserting the inspect call where I could to see what was there. This is just one of things that I didn't expect and was not obvious to me, coming from an OOP background.

I only discovered this when I needed to get rid of some `nils` in an `Enum` type. I could not figure out how to skip `nils`. I could use `Emun.reject(enumerable, fun)`, but I could only use it in the middle of a series of pipes. And I didn't know what the variable would be, or how to use it. Turns out you don't need it. Same style works perfectly.

    coll
    |> some_function
    |> IO.inspect
    |> Enum.reject
    |> some_other_function

