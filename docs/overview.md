# New Build

This application is a rebuild of an old Rails app that served as the main home for me on the web. I have grown tired of the Rails pattern and decided it was time to branch out into a simpler Sinatra app that has a little more fine grained control and has the features and functionality I want.

## Features
* Simple admin interface with email/password combination for authentication.
* Sass compilation into static HTML files
* Image uploading


## Sections of the site
* Index
* Blog (I can't think of a better name right now)
* Bio/About
* Projects: Both a landing page and individual project pages
* Contact
* Admin



## Admin
When visiting the admin page, the user is authenticated against a cookie. If the cookie exists, proceed. If the cookie doesn't exist, display a login form. **There is no signup page or route**.

When presented with a form, the user can enter an email address and a password. Once the form is submitted, the system checks for a match. If a match is found, a cookie is created and the user can proceed to the admin page. If a match is not found, an error is returned and displays on the login page.

On the admin page, an admin can create or edit blog posts.

### Create a Blog Post
To add a blog post, an admin is presented with a form that contains a title, url, file upload, and body. Upon entering markdown into the body, an area underneath the textarea renders a live preview with every keypress.

Once an admin is done creating the blog post, they can save the blog post and be presented with an empty form to create another.


### Edit a Blog Post
To edit a blog post, an admin selects a previously posted blog post. When selected, the textarea loads the data from the blog post; body, title, and url. Updating the blog post works exactly like creating a blog post, except that when the post is saved, the same data gets loaded into the form.

<hr>

## Blog
The blog holds different types of articles or media.

## Projects
Motivation: The motivation for the projects section of the website is that to display my work, the stuff I really care about, in the best possible way, I need on to control the presentation. This is all about presentation.


Projects display various projects/websites that I have created. The landing page will display a series of small excerpts with an image and link to the project page, either a working web page or code repository.

### Individual Project
When a project image or name is clicked, the user is redirected the website or code repository. If the view project link is clicked, the user is redirected to a full project page. The full project page contains details about technology, motivation, and current status.

<hr>

## Contact
Contact displays various ways to reach out. Social includes Twitter and GitHub. The page also contains a form that requires name, email, and message. Also, the email address is displayed encoded in javascript.

<hr>

## Index
Index displays information about me and what I do. It includes links to my work, including talks, code, and writing.

