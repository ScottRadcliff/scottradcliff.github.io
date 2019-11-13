---
layout: post
title: Viewing Schema with Sequel
date: 2019-11-02
---

Topic: Use DB.schema(:table) to view the schema of any table with Sequel


As far as I know, Sequel[link] doesn't give you a schema file that you can look at to see what the structure of certain tables looks like. But there is a way to display that data. Sequel includes a schema method that takes a table name and displays the schema. It's not as readable as ActiveRecord's schema file, but it is possible to pull that data.

I'm working on a Sinatra app that uses Sequel with PostgreSQL as the database and ORM. I'm not using migrations yet. I just started this app by hacking around. I needed a personal wiki to store some data, so I'm just playing around with some stuff that I don't normally get to.

While I was thinking about what would happen if another developer were to work on this, I thought about the structure of some of the models and needed something to look at other than psql that could let someone know what fields a table has.

To do this the manual way:

* Load up a console with your connection string postgres://[username]:[host]/[db_name]
* Call DB.scheme(:table) to view your schema. It contains a lot of information.

```
[[:id,
  {:oid=>23,
   :db_type=>"integer",
   :default=>"nextval('entries_id_seq'::regclass)",
   :allow_null=>false,
   :primary_key=>true,
   :type=>:integer,
   :auto_increment=>true,
   :ruby_default=>nil}],
 [:content,
  {:oid=>25,
   :db_type=>"text",
   :default=>nil,
   :allow_null=>true,
   :primary_key=>false,
   :type=>:string,
   :ruby_default=>nil}],
 [:title,
  {:oid=>1043,
   :db_type=>"character varying(255)",
   :default=>nil,
   :allow_null=>true,
   :primary_key=>false,
   :type=>:string,
   :ruby_default=>nil,
   :max_length=>255}]]
```




