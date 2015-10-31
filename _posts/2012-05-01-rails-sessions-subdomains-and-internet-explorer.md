---
layout: post
title:  Rails Sessions Subdomains And Internet Explorer
date:   2012-05-01
permalink: rails-sessions-subdomains-and-internet-explorer
categories:
---

When using Rails, subdomains, and sessions; IE will give you fits. IE cannot handle the subdomains and the cookies that Rails uses to store session data. It will not produce any warnings. It just drops all session data because it considers it a cross-site request even through the TLD is the same.

Also worth noting that IE will remove any sessions from subdomains with underscores. This is why I named the session without any underscores in the Gist, just to be safe.

Quick fix. Make sure you pass the TLD prepended with a "." as the domain to the session config.


<script src="https://gist.github.com/2570136.js?file=gistfile1.rb"></script>
