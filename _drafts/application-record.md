# ApplicationRecord in Rails 5


In Rails 5 there is a surprise. Your models now inherit from `ApplicationRecord`. At first, I was a little offended. I mean what is this `ApplicationRecord` stuff you speak of. Actually, it was code review and I questioned what the file was. Once I realized that neither of us knew what it was, and considering that the app was our first Rails 5 app, we figured out what was going on.

It's an interesting concept. Like `ApplicationController`, you can define global methods for all models. Tossing aside the globals are evil argument, this could turn out to be interesting. A common place for code for all models. I guess you could think of it as a hack for multiple inheritance.