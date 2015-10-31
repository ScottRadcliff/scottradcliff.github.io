---
layout: post
title:  Tell Rails Which Record You Want
date:   2015-03-26
permalink: tell-rails-which-record-you-want
categories:
---

Did you know you can tell `ActiveRecord` which record you want in plain english up to the fifth record? I didn't.


`User.first`

`User.second`

`User.third`

`User.fourth`

`User.fifth`

All of these return the record you asked for. This is great for playing in the console and needing a specific record. I use this all the time when developing with just  few records.
