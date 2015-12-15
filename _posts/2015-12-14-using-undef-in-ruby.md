---
layout: post
title: Using undef in Ruby
date:   2015-12-14
categories:
---

Defining methods in Ruby is pretty simple. Type `def`, a name for your method, then some code, and finally `end` it. It looks like this

    def name
      …code
    end

Maybe undefine isn't the right word. I think hides is a better description. It hides the method.

<!--more-->

Once you use `undef` in a class, you cannot call a method of that name.

## Why Use undef
So how would you use `undef`?

The best case I can come up with is using it in metaprogramming. Maybe you want to make sure no one defines a certain method at runtime. Ruby can be pretty crazy. Remember, *everything* is open. Restricting a method of a certain name can be handy.


## How to Use it
Using it is pretty straightforward. Let’s say we have a class called `Name` that takes a first and last name. But for the sake of this example, we don’t want anyone calling `first_name`, even though it’s totally legit and exists.

The class might look like this.

    class Name
      def initialize(first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end

      def first_name
        puts @first_name
      end

      def last_name
        puts @last_name
      end


      def full_name
        puts @first_name + “ “ + @last_name
      end

      undef first_name
    end

Then loading this in IRB and trying to call `first_name` will result in an error.

    irb -r ./testing_undef.rb

    @person = Name.new(“Scott”, “Radcliff”)

    @person.first_name

You will see `NoMethodError: undefined method `first_name’ for #<Name:0x007fd51b1ca8e8>`

Because we called `undef first_name` after it was defined, we removed access to it. Even though we get a `NoMethodError` exception, it still exists. If we had called `undef` on a method that didn't exist, that would have resulted in a `NameError`.

`NameError: undefined method `first_name' for class `Name'`

While it's possible to undefine a method in Ruby, I'm not exactly sure how helpful it is in day to day programming.
