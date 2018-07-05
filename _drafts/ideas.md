
# Apathy in Software Design



# List all associations for a Class or Object in Rails

Thing.reflect_on_all_associations(:belongs_to)



# Kill Server Running on the Port You Need

lsof -i tcp:3000 -t

kill -9 pid

kill -9 $(lsof -i tcp:3000 -t)


https://stackoverflow.com/a/32044615/218707

