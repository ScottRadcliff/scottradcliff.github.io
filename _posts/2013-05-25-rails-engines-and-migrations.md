---
layout: post
title:  Rails Engines And Migrations
date:   2013-05-25
permalink: rails-engines-and-migrations
categories:
---

Getting migrations to run when setting up your Rails engine can be a bit
tricky. If you generate some sort of migration either via a scaffold or model,
and run `rake db:migrate`, you will see no output. There is nothing telling you
if you failed or you succeeded.

What you need to do is cd into your dummy app `cd test/dummy` and copy the
migrations over to the app, and then run them with `rake
<engine_name>:install:migrations`.

This is on Ruby 2.0 and Rails 4.0.0.rc.


