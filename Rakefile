require 'time'

desc 'create a new blog post'
task :post do
    title = ENV['TITLE']
    slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"

    file = File.join(
        File.dirname(__FILE__),
        '_posts',
        slug + '.md'
    )

    File.open(file, "w") do |f|
        f << <<-EOS.gsub(/^     /, '')
---
layout: post
title: #{title}
date: DATE
permalink: LINK
categories:
---

        EOS
    end
end



desc 'Import all blog posts for a db export csv file'

task :import do
  require 'csv'
  CSV.foreach("tmp/export.csv", :row_sep => "\n") do |row|
  title = row[1]
  body = row[2]
  permalink = title.downcase.gsub(' ', '-').gsub(/['"]/, "")
  date_created = row[3].split(' ')[0]
  filename = date_created + "-" + permalink
  File.open("./_posts/#{filename}", "w") do |file|
    file.write "hello"
  end
end
  # for each line
  # title = extract the title
  # permalink = format a permalink in hyphens
  # body = extract the body
  # create_date = extract the create date
  # create a new file in _posts with the following format
  #   2015-10-31-{permalink}.md
  # open the file and insert front matter, followed by the body

end
