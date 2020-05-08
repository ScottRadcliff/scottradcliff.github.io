---
layout: post
title: Get Yesterday's Date in Elixir
date: 2020-05-07
---
I'm working on my second production Elixir system and ran  into something that's  a bit of a no-brainer in Ruby. I needed yesterday's date. I'm working on  an integration that needs to send a date range as `start date` and `end date` for an API request. That date is always yesterday and today. Basically, give  me everything from yesterday until now.

Crazy simple in Ruby. Without Rails: `Date.today.prev_day` and with Rails: `Date.yesterday`.

I tried typing that in Elixir. Doesn't work.

Elixir's date library  is really good, but doesn't have something for yesterday. And this is rare,  but the  docs don't really tell you how to do that.

The solution is to create a date and pipe into  the add function with `-1`  as the parameter.

We can just use `utc_today()` to get today's date and use that for our  pipe.

```
Date.utc_today()
|> Date.add(-1)
```
