---
layout: default
title: Archive1
---

# Archive1

Browse all posts by year. If that's too much, try the Random button.

foo

<a href="#2024">Go to 2024</a>
<h2 id="moss">Moss</h2>
foo

<button class="randombutton" onclick="randompage()"><span>Random</span></button>

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for yearMonth in postsByYearMonth %}
  <h2 id="{{ year.name }}">{{ year.name }}</h2>

  <h2>{{ yearMonth.name }}</h2>
  <ul>
    {% for post in yearMonth.items %}
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> - <i>{{ post.date | date: "%B %-d, %Y" }}</i></li>
    {% endfor %}
  </ul>
{% endfor %}
