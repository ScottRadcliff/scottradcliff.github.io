---
layout: post
title: Learned in Elixir
date: 2019-09-09
---

Lately I've been sharpening the saw, sort of. Working on some things that I am not that good at (yet). I spend about 30 minutes a day. It's a great way to start up and get the juices flowing or spend some time winding down in the evening.

Today I'm writing a Binary Search in Elixir and hit quite a few things I had to Google. This is a list of things I learned in Elixir today:

* I learned that you use [Kernel.round/1](https://hexdocs.pm/elixir/Kernel.html#round/1) to convert float to integer. `round(5.0) => 5`
* I learned that you use [Enum.to_list/1](https://hexdocs.pm/elixir/Enum.html#to_list/1) to convert a range to a list. `Enum.to_list 1..500 => [1,2,3...]`
* I learned there isn't an Array type
* I learned to access an index for Enum, you use [Enum.at/3](https://hexdocs.pm/elixir/Enum.html#at/3). `Enum.at([1,2,3], 2) => 3` -- The third parameter is `default` and it's optional.
* I learned that to get the length of a list, use [Kernel.length/1](https://hexdocs.pm/elixir/Kernel.html#length/1). `length([1,2,3]) => 3`

