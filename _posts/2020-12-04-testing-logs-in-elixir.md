---
layout: post
title: Testing Logs in Elixir
date: 2020-12-04
---

I work on an app that logs a bunch of data. Typically, I wouldn't test logging, but we have some issues where bad pattern matching is causing some 500 errors because it can't handle the responses we are getting.

After some poking around, I ended up on a cool way in [ExUnit](https://hexdocs.pm/ex_unit/ExUnit.html#content) to test for specific log messages. But there is one major issue that tripped me u[]

The module is `ExUnit.CaptureLog` and allows you to pass in a function and check that the log has the message you expect.

On the surface, it's pretty simple. `assert capture_log(fn -> Logger.error(msg) end) =~ msg` That will assert that `Logger.error(msg)` actually logs `msg`.

Just replace `Logger.error(msg)` with the function that performs the logging and your all set. Mine looks like this because I know if it got to logging something that contains `webhook_received`, the code executed properly: `assert capture_log(fn -> Persistence.MessageQueue.log_message(event_data) end) =~ "webhook_received"`

Unfortunately, I was getting a success message when it clearly wasn't passing. I really don't know why. What I do know is that the log setting in config directly effects this, and defaults to `:warn`. By setting that to `:info`, messages start to flow through when testing, and the assertions start to actually pass/fail accurately.

You may have already noticed that setting the log messages to `info` makes for a really noisy test suite. But, there is a way around that also. 

I haven't gotten to it yet, but `@tag :capture_log` will allow you to define which tests should report logs and which ones shouldn't.

[This forum thread](https://elixirforum.com/t/exunit-capturelog-assert-capture-log-2-not-capturing-level-info/8617/13) was super helpful.
