# TEDxSunwayUniversity Website

![](/images/tedxsu-logo-main.png)

Built with Jekyll, Bootstrap, Font Awesome

### To Create New Posts/Pages

Add your new post/page into `_posts` and name it in this format:

```
YEAR-MONTH-DAY-title.MARKUP
```

For example, a post created on the 25th of May, 2018, with the title 'Welcoming New Students' created in HTML would be named

```
2018-05-25-welcomeing-new-students.html
```

You can use markdown (CommonMark) or HTML for new posts, and don't forget to include the YAML Front Matter.

For most posts, just add this to the top of the page.

```
---
layout: post
title: [YOUR TITLE HERE]
---
```

For more information on how to use Jekyll, and how to modify this website in general, check out [Jekyll's Docs](https://jekyllrb.com/docs/home/)


### Building the site

To build the site, you will need Ruby, Ruby Gems, Bundler, and Jekyll

You can check out [Jekyll Docs](https://jekyllrb.com/docs/home/) on how to install all the necessary components to build the site.

To build:

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000`

### Credits

The site was built with Jekyll, Bootstrap, and Font Awesome. Everything else, :heart: and care.

