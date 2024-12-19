---
layout: default
title: Postslist
---

# Posts list

A list of all posts on the website.

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for yearMonth in postsByYearMonth %}

  <h2>{{ yearMonth.name }}</h2>
  <ul>
    {% for post in yearMonth.items %}
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    {% endfor %}
  </ul>
{% endfor %}
