# Drop the ORM

ORM's are great. They really do make CRUD apps easier to work with.

But on the other hand, we should always evaluate our toolbox. We should look at the tools we use and question them.

I'm starting to wonder if using SQL is becoming a lost art.

Working on a new project, I questioned whether I needed an ORM.

I just grabbed the [sqlite3 gem](https://rubygems.org/gems/sqlite3/versions/1.3.11), and after some work to figure out how to set up a DB and some tables, I dove back into writing SQL. **It was glorious**. The code to create and fetch records was so succinct. A throw back to simpler days.

It's worth trying raw SQL to remember how simple things used to be.
