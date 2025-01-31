FROM ruby:3.4.1

# Set the working directory
WORKDIR /app

# Install dependencies
RUN apt-get update -qq && apt-get install -y nodejs npm && \
    gem install bundler jekyll

# Copy the Gemfile and Gemfile.lock
COPY Gemfile ./

# Install gems
RUN bundle install

# Copy the rest of the application
COPY . .

# Expose port 4000 for Jekyll server
EXPOSE 4000

# Set the default command to serve the Jekyll site
CMD ["jekyll", "serve", "--host", "0.0.0.0"]

