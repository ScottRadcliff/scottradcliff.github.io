---
layout: post
title:  Removing User Registration In Devise
date:   2013-03-22
permalink: removing-user-registration-in-devise
categories:
---

I prefer [Devise](https://github.com/plataformatec/devise) for authentication in my Rails apps. While working on [Velocity](http://velocityapp.net), I needed to remove sign ups. Foolishly, I tried some redirects and custom routes with no luck. The work is all done in the model. Remove `:registerable` and you're all set.
