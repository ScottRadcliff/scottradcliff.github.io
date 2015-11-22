---
layout: post
title:  Mongo Db Ids Sure Are Ugly
date:   2011-11-12
categories:
---

I started on the Learn course management app and decided on using <a href="http://www.mongodb.org/">MongoDB</a> as a backend and have run into a few issues. The major issue that caused me to write a work around are the ids. They are very long, which is fine for security, but not very user friendly if you plan on using ids as part of your url.

Take this url in a MySQL backed rails app: learn.com/courses/3. In a Mongo backend, it would be something like learn.com/courses/4eb6a90621f63c3166000003. Yea, I know, ouch. Try giving that url to someone.

There are some slug gems, but I didn't see anything worthwhile. I just wrote a simple before_save method on the model. It downcases the title, replaces spaces with underscores and saves that as an url field on the collection.
<code>
 def create_url
 &nbsp;&nbsp;self.url = name.downcase.gsub!(" ", "_")
 end
</code>
I have to add some more logic to handle different characters like hypens and such, but it seems like a decent solution for now.
