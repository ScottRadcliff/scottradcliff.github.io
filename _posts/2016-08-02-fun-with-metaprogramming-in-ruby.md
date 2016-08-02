---
layout: post
title:  Fun with Metaprogramming in Ruby
date:   2016-08-02
---

I've been programming in Ruby for awhile. Somewhere around 5-6 years. And I don't really play with the metaprogramming stuff much. I know it's there, and I know it's powerful, but I don't often see a need in my day to day programming.

I've been  playing around with a toy app in almost pure Ruby. I say almost, because I am using [Sinatra](http://www.sinatrarb.com/) and some libraries, but no [Rails](http://rubyonrails.org/) or other frameworks. Sinatra has this weird instance variable thing going on where if you are sending the user back to the form after a validation failure, you don't always get the object back, which leave the form without the previously entered values. I'm sure I'm calling something wrong. This is part of the problem with working in frameworks too much. You lose your edge on how to wire things up with just a programming language.

So I thought it would be cool to build a couple of libraries to do some regular things that I could reuse.

Enter `FormValues`. A simple class that can take a hash of values from a form and generates methods to call these values as needed. I figure this way I don't need to keep track of objects, I can just call the methods as needed. Seems like a good place for cookies or sessions in pure Ruby. The [CGI](http://ruby-doc.org/stdlib-2.3.1/libdoc/cgi/rdoc/CGI.html) class has both of these.

I wanted to show how I created a _getter_ method for each key/value pair from the hash I pass in. _The Hash will go away. It will probably become a cookie. I'm still hacking on this_

~~~
def initialize(params)
  @data = Hash.new
  params.each do |key,value|
    @data["#{key}"] = value
    define_singleton_method "#{key}" do
      @data["#{key}"]
    end
  end
end
~~~
{: .language-ruby}

So, if I pass a hash as params like this `{first_name: "Scott", last_name: "Radcliff"}`. I would get the methods `#first_name` and `#last_name` that would return _Scott_ and _Radcliff_.

Metaprogram all the things.