---
layout: default
title: Chive
---

# Chive

Browse all posts by year.

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for yearMonth in postsByYearMonth %}
  <h2>{{ year.name }}</h2>

  <h2>{{ yearMonth.name }}</h2>
  <ul>
    {% for post in yearMonth.items %}
      <li><i><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> - <i>{{ post.date | date: "%B %-d %Y" }}</i></li>
    {% endfor %}
  </ul>
{% endfor %}
