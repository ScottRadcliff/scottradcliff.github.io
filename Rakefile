require 'time'

desc 'create a new blog post with a title: rake post TITLE="Some Title"'
task :post do
    title = ENV['TITLE'] || "draft"
    slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"

    file = File.join(
        File.dirname(__FILE__),
        '_drafts',
        slug + '.md'
    )

    File.open(file, "w") do |f|
        f << <<-EOS.gsub(/^     /, '')
---
layout: post
title: #{title}
date: DATE
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
    File.open("./_posts/#{filename}.md", "w") do |file|
    post_content = <<-CONTENT
---
layout: post
title:  #{title}
date:   #{date_created}
permalink: #{permalink}
categories:
---

#{body}
  CONTENT

    file.write post_content
    end
  end
end

desc 'Remove permalink from all posts'

task :antipermalink do
  files = Dir.entries("_posts")
  files.each do |file|
    if !file.start_with?(".")
      file_to_read = File.new("_posts/" + file)
      tmp_file = File.new("temp_posts/" + file, "w+")
      file_to_read.each do |line|
        tmp_file.write(line) unless line.start_with?("permalink")
      end
    end
  end
end
