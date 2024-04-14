---
layout: default
title: Chive
---

# Chive

Browse all posts by month and year.

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

CCCCC

<ul class="taxonomy-index">
  {% assign postsInYear = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  {% for year in postsInYear %}
    <li>
      <a href="#{{ year.name }}">
        <strong>{{ year.name }}</strong> <span class="taxonomy-count">{{ year.items | size }}</span>
      </a>
    </li>
  {% endfor %}
</ul>

fffff

{% for yearMonth in postsByYearMonth %}
  <h2>{{ year.name }}</h2>

  <h2>{{ yearMonth.name }}</h2>
  <ul>
    {% for post in yearMonth.items %}
      <li><b>{{ post.date | date: "%B %-d %Y" }}</b> - <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

kjgdhgkdfhgdfgh


{{ content }}

<ul class="taxonomy__index">
  {% assign postsInYear = site.posts | where_exp: "item", "item.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  {% for year in postsInYear %}
    
      <a href="#{{ year.name }}">
        <strong>{{ year.name }}</strong> <span class="taxonomy__count"></span>
      </a>
    
  {% endfor %}
</ul>

hgjkshglfdghldfgldfgd

