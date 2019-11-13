require 'time'

desc 'create a new blog post with a title: rake post TITLE="Some Title"'
task :post do
    title = ENV['TITLE'] || "draft"
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
date: #{Date.today.strftime('%Y-%m-%d')}
---

        EOS
    end
end


desc 'Create a new draft with a title: rake draft TITLE="Some Title"'
task :draft do
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
date: #{Date.today.strftime('%Y-%m-%d')}
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


desc 'Start server '
task :server do
  system 'bundle exec jekyll serve'
end

desc 'Build site'
task :build do
  system 'bundle exec jekyll build'
end
