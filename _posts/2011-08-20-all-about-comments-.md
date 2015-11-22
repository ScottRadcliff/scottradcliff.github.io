---
layout: post
title:  All About Comments 
date:   2011-08-20
categories:
---

Commenting code when I know I will not be returning to it has got me thinking. Firstly, as I finish out this week at my current job and know that someone else will be editing this code in the future; actually, they will probably be finishing the code. I have been writing some really detailed comments. Some of them may be too detailed, but that’s okay. I would rather the next developer look at a comment and think that it was unnecessary, rather than wondering what that code does and spending time decyphering each line to get a grasp on the purpose. I haven’t went as far as

<pre>
<code>
$i=0 // Set variable i to 0
</code>
</pre>

That would be really stupid. But I have written:

<pre>
<code>
// Create an array to store values for different education classes
$classes = array();
</code>
</pre>


I know classes is pretty self explanatory, and I could have named the variable education_classes, but just one comment that takes up no more than one line makes it perfectly clear that this does. Here is another example:

<pre><code>
// filter through options extracting the value
// and applying it to the classes array
foreach($query-&gt;result() as $item) {
  $classes[] = $item;
}
</code>
</pre>

Again, it’s pretty self-explanatory, but when someone hits this code for a quick change or is looking for a possible bug it should help them scan the file looking for the section they need. Of course I have PHP_doc comments for methods and classes. As I look over the code I have written this week I question my comment writing on projects that I know I will return to. I usually do not comment like this and it has burned me in terms of time. Reading each line of code to determine where the culprit of a bug may be is much more time consuming than just scanning the comments.

I say apply too many comments rather than too few. If the other developers that you work with do not like them, they can choose to not read them. My guess is even if the comments seem excessive, they will be useful in that one instance that may save you at 5:00 on a Friday.

Worth noting that this style of commenting has to be kept up to date. Read your comments often, and edit when necessary.

