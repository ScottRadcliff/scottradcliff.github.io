FROM ruby:3.2

# Install dependencies (node, etc. required for Jekyll)
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy gem dependencies first to cache better
COPY Gemfile Gemfile.lock ./

# Force clean bundle install inside the container
RUN bundle config set --local path 'vendor/bundle' \
 && bundle install --jobs 4 --retry 3

# Copy the rest of your Jekyll site
COPY . .

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling", "--watch"]


