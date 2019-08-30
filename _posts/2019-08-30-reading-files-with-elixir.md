---
layout: post
title: Reading Files With Elixir
date: 2019-08-30
---
I've been playing with Elixir again. This time I wrote down a few simple programs I could easily build as a learning exercise. Reading a file, url shortener, markdown library, etc...

I decided to start with file related stuff. Reading, writing, and appending. I thought I would fly through these like I would in another language, but I've found a few things that I was unfamiliar with.

Let's start with reading files. I'll list out the steps to take to build this super simple file reader module, talk about a snag I hit, and push you in a direction to learn more after this.

Start by opening your terminal and creating a directory called `SimpleFile`. Now cd into that directory.

We are going to have a sample text file to read and an Elixir file. The steps will assume that these are both in the same directory.

Now let's create our test file. Create a file called `text.txt` with the contents _Hi There_. The contents of the file aren't important. Our code just needs something to read.

Now we can create our Elixir file. Create a file called `simple_file_reader.exs`. 

A note about file extensions. Elixir has two file extensions `ex` and `exs`. `ex` files are meant for compiling. And `exs` files are meant for scripting. We can just run an `exs` file and Elixir will interpret it. We _could_ compile it, but the extension should communicate it's intent. We are going to go with `exs` since this is just a simple script that we will run from the command line.

Still inside the `simple_file_reader.exs` file, create a module called `SimpleFile`

    defmodule SimpleFile do
    end

And now the function to read the file. We will just call it `read`.

    defmodule SimpleFile do
      def read do
      end
    end

And finally we will use the `File` module in Elixir to read the contents of the sample file we created earlier

    defmodule SimpleFile do
      def read do
        File.read("./sample.txt")
      end
    end

Just like in Ruby, Elixir will return the last thing it touches, so we can omit the return statement.

One last thing to get this to work. We need to call our function so we can see the results in the terminal. After the module definition, use the `IO` module to puts the results. The whole thing looks like this.

    defmodule SimpleFile do
      def read do
        File.read("./sample.txt")
      end
    end

    IO.puts(SimpleFile.read)


Now we can run the file with the `elixir` command. Still in the terminal, type

    elixir simple_file_reader.exs

You will immediately see an error.

    ** (Protocol.UndefinedError) protocol String.Chars not implemented for {:ok, "Hi there\n"} of type Tuple
    (elixir) lib/string/chars.ex:3: String.Chars.impl_for!/1
    (elixir) lib/string/chars.ex:22: String.Chars.to_string/1
    (elixir) lib/io.ex:654: IO.puts/2

This is because the `read` function of the `File` module returns a tuple. You can see that on the first line of the error `not implemented for {:ok, "Hi there\n"} of type Tuple`. I'm not going to lie. It took me a while to figure this out. I just haven't worked with tuples enough to know how to deal with them. Eventually I was able to find the solution.

The `Kernel` module in Elixir has a function called [elem/2](https://hexdocs.pm/elixir/Kernel.html#elem/2). It takes a tuple and an index, (tuples are zero-based), and just returns that part of the tuple. For us, we care about the second part, so we will use the index of 1.

Update the puts statement to use `elem`

    IO.puts(elem(SimpleFile.read, 1))

Now run the file again in the terminal `elixir simple_file_reader.exs` and you will see the contents of the file.

I got farther than that, but that seems like a good stopping point. I'd like to write up how to put this into a [mix project](https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html) and pass it any file. And I'd also like to say that is coming, but I'm terrible at commitment.

