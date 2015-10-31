---
layout: post
title:  Can I Delete My Rails Migrations
date:   2013-10-31
permalink: can-i-delete-my-rails-migrations
categories:
---

As I was working today, I had a thought. Why do I need all of those database migrations? I don't use them. When I fire up a new environment, it's much easier to run `rake db:schema:load`. And the migrations are redundant. All of that data is in the schema file.

I can't recall digging through migrations when I need to see the attributes of a model or what datatype it accepts. I always reach for the schema file. Once I've migrated successfully, I don't need the migration file anymore. It's a means to an end.


## There is No Compelling Reason to Keep Migrations
The most obvious reason to remove your migrations is that they are redundant. They are in your schema file, in your `db/migrations` directory, and you can get them from version control if needed. I would argue that they may confuse developers in certain situations and not provide documentation as some have claimed.

Let's say you create a product model. Then, three months later you add a few fields to that product model. Simple, create a migration to add the new fields. Now you have the product fields in two different migrations with other migrations in between. This is a point of frustration for the new developer. If you've never been the new developer, trust me on this. I would rather remove those migrations and force new developers to use the schema to see how the product table is built.

### The Migrations Directory Doesn't Get Smaller, Only Larger
Your migrations, which maybe just a few files now, will grow to an enormous size with time. If whatever application you're working on is around for a few years, you will start to fear that migrations directory. It's kinda like the tests that you inherit that you are afraid to touch because they are scary. If you have never inherited tests, I'm jealous.

### New Environments are Easier with schema:load
When you fire up a new environment, using `rake db:schema:load` is easier. It just takes that schema file and loads it up in the appropriate database. I migrated a very old application with over a hundred migrations *once*. I spent the next couple of hours commenting out code here, uncommenting code there, just to get it to a working state. There are more points of failure then you realize. Schema load takes seconds and it's done.

## Although, I Would Keep Some
Even with all that negative stuff about why you don't need them, I would keep some. I think 5-10 should do it. Sometimes I need to roll back and fix a migration rather then create a new one. I wouldn't go much past 5.

Recent migrations can be helpful if you forgot something and would like to rollback, edit a migration, and rerun them. Again, more than 5 is more work then it's worth.

## Yes you can delete migrations.
I haven't found migrations helpful to keep around, or helpful when I come onto a new project. For me, I can just remove them and not worry about the past. 
