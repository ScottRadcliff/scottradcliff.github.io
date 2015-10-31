---
layout: post
title:  Automating Tasks
date:   2011-08-20
permalink: automating-tasks
categories:
---

I am experimenting with automating more tasks. I’m starting with my login for work. Every morning when I fire up my machine for work, I start a few programs. It’s not really a big deal, but I decided to venture into shell scripting to make this a command. My shell scripting skills currently suck.

The script is held in my code/helpers directory, so it needs to set the working directory to Applications so I can launch the apps I need. Once in the directory, I just launch the applications that I launch every morning.

<code># Open apps for work</code><br />
<code>cd ~/../../Applications;</code>

<code>open "Google Chrome.app"</code><br />
<code>open Skype.app</code><br />
<code>open Mail.app</code><br />
<code>open TextMate.app</code>
