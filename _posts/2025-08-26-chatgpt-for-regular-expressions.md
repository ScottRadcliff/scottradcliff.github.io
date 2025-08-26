---
layout: post
title: ChatGPT for Regular Expressions
date: 2025-08-26
---

I have this project that I've been chipping away at for years. I forget about it for long periods of time, and then decide to see where I left off.

It's a [markdown library in Elixir](https://github.com/ScottRadcliff/bargain).

I'm at the point now where _most_ things work and I'm throwing chunks of text at it to see if it converts it correctly.

Naturally that exposes some bugs around things I missed. The trick is that because I have these long stretches where I don't work on the project, I forget things.

I had a bug in my logic that built hyperlinks. I hadn't considered a hyphen in the link text, so the regex didn't match and the conversion was ignored.

The regex before the bug fix

`~r/\[(?<text>[\w\.?\s]+)\]\((?<url>http[s]?\:\/\/\w+[\.\w+]+\w+)\)/i`

I didn't remember what this did, and didn't really want to walk through step by step. Decided to see what ChatGPT had to say

I asked ChatGPT `explain ~r/\[(?<text>[\w\.?\s]+)\]\((?<url>http[s]?\:\/\/\w+[\.\w+]+\w+)\)/i`

This was the response

---

This is a **regular expression** written in Ruby (or a similar language) that captures **Markdown-style links** in a string. Let's break it down:

**Pattern Breakdown**

#### `~r/.../i`

- `~r/.../` → This is the **syntax for a regex literal** in Elixir or Ruby.
    
- `/i` → **Case-insensitive flag** (matches uppercase and lowercase letters without distinction).
    

#### `\[(?<text>[\w\.?\s]+)\]`

- `\[` → Matches a literal **opening square bracket** (`[`).
    
- `(?<text>[\w\.?\s]+)` → **Named capture group (`text`)**:
    
    - `[\w\.?\s]+` → Matches:
        
        - `\w` → Any **word character** (letters, digits, underscores).
            
        - `\.` → A literal period (`.`).
            
        - `?` → An **optional question mark**.
            
        - `\s` → Any **whitespace character** (spaces, tabs).
            
    - **Example match:** `"Click here"`, `"My link"`.
        
- `\]` → Matches a literal **closing square bracket** (`]`).
    

#### `\((?<url>http[s]?\:\/\/\w+[\.\w+]+\w+)\)`

- `\(` → Matches a literal **opening parenthesis** (`(`).
    
- `(?<url>http[s]?\:\/\/\w+[\.\w+]+\w+)` → **Named capture group (`url`)**:
    
    - `http[s]?` → Matches **"http"** or **"https"**.
        
    - `\:\/\/` → Matches `://` (the standard separator in URLs).
        
    - `\w+` → Matches one or more **word characters** (e.g., `example`).
        
    - `[\.\w+]+` → Matches:
        
        - `\.` → A literal dot (`.`).
            
        - `\w+` → One or more word characters (e.g., `com`, `org`, `net`).
            
    - `\w+` → Ensures the URL ends in a valid **TLD** (e.g., `.com`, `.net`).
        
- `\)` → Matches a literal **closing parenthesis** (`)`).
    

### **Example Matches**

|Input String|`text` Capture|`url` Capture|
|---|---|---|
|`[Google](https://google.com)`|`"Google"`|`"https://google.com"`|
|`[My Site](http://example.org)`|`"My Site"`|`"http://example.org"`|

### **Summary**

This regex identifies **Markdown-style links** and extracts:

- The **link text** (inside `[...]`).
    
- The **URL** (inside `(...)`).
    

Let me know if you need modifications or further explanations! 🚀

---

The biggest hurdle was that I don't use named capture groups that often, and frankly, I was lazy and didn't want to dig into how that worked. 

In a matter of probably seconds, I got the info I needed, and knew what the fix was. Simply add `\-` to the first optional group.

In my opinion, this the perfect use of AI for a developer. I knew the information, I was just looking up what I needed to be reminded of. Sort of the new way to look up docs. In fact, I use it for that all the time.

If I didn't understand how to build a regex for extracting hyperlinks from markdown, and used ChatGPT, that's a problem. That level of copy and paste is as bad as it's always been. Maybe worse now because ChatGPT has return pretty complex solutions with very little work.

