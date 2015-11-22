---
layout: post
title:  Migrate Dev And Test At The Same Time
date:   2012-11-09
categories:
---

I finally got tired of migrating each database whenever I added a change to the schema. So tired, I finally added a alias.

    alias migrate='rake db:migrate; RAILS_ENV=test rake db:migrate'

Now I just run migrate on the command line and both DB's are up to date.
