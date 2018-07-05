# Drop the ORM

ORMs are great. They really do make CRUD apps easier to work with.

But on the other hand, we should always evaluate our toolbox. We should look at the tools we use and question them.

I'm starting to wonder if using SQL is becoming a lost art.

Working on a new project, I questioned whether I needed an ORM.

I just grabbed the [sqlite3 gem](https://rubygems.org/gems/sqlite3/versions/1.3.11), and after some work to figure out how to set up a DB and some tables, I dove back into writing SQL. **It was glorious**. The code to create and fetch records was so succinct. A throw back to simpler days.

It's worth trying raw SQL to remember how simple things used to be.

Here are some things that may help you get started if you are not familiar with the SQL language. These may vary by [DBMS](https://www.geeksforgeeks.org/dbms/).

## `.find()`
Getting a single record is probably the most common task in an ORM. Given a unique id, find this object and return it. In ActiveRecord it might look like `User.find(params[:id])`. Essentially what this is doing is selecting an entire record that matches that id that is defined as `params[:id]`. For simplicity, let's assume the id is 1; so evaluated the call would be `User.find(1)`

In SQL, it would look like this: `SELECT * FROM users WHERE id = 1`.

This says _get all fields from users where the id field matches the id passed in_. An ORM will simply this by wrapping it a method.

Most ORMs that I have worked with only accept an id as a parameter to `.find()`. But they have added `.find_by()` where you can passing a field and a value. Something like this: `User.find_by(email: 'scott@example.com')`; which translates to something very close to the find method. `SELECT * FROM users WHERE email='scott@example.com'`


## `.all()`
This one is common also. Just give me everything. Often used for index pages to display all records. ActiveRecord would user `User.all` to get all users.

In SQL, it would look like this `SELECT * FROM users`.

Similar to `.find()`, this grabs all fields in all records and you would display the fields you care about. You could limit what you get by calling `.select()`.

If you wanted just the email address of all users, you could call `User.select(:email)`.

In SQL, it would look like this `SELECT email FROM users`.

The difference in some ORMs and SQL is that an ORM will typically always include the id. It needs this id to link to a specific record. You could alter your SQL also gra the id by doing this: `SELECT id, email FROM users`


## `.where()`


## `.update()`
