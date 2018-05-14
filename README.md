# TEDxSunwayUniversity Website

![](/images/tedxsu-logo-main.png)

Built with Jekyll, Bootstrap, Font Awesome

### Adding new pages

In Jekyll, you can separate different webpage components so that you do not need to copy-paste the same thing everywhere when a small change is made to, for example, the footer.


Example:
```
{% includes footer.html %}
```
means to slap footer.html in `/_includes/` at the position specified.


```
{{ site.url }}
```
is a variable located in `_config.yml` that allows you to change variables without modifying every single instance of the site url. Note the double curly braces.

Single curly braces with the percent sign `{% %}` are for logical statements, double curly braces `{{  }}` are for variables.

You will need to include Front Matter as specified in [Jekyll Docs](https://jekyllrb.com/docs/home/) for every new page if you want to use the page templates/layouts in `_layouts`. You can do this by adding two lines of triple dashes and then
```
---
layout: [INSERT LAYOUT OF CHOICE]
title: [INSERT PAGE TITLE]
permalink: [INSERT PERMALINK IF NEEDED]
---
```

To add new event pages, for example, a template for it would be
```html
---
layout: post
title: Event name 2010
permalink: /events/2010-event-name
---
<div>
  <!--
    Your awesome content here
  -->
</div>
```
and the head, navbar, footer, and scripts would all be included because of the layout templates.


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

