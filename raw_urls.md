---
layout: default
title: Raw URLs
---

# Raw URLs

All the URLS in raw format.

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for yearMonth in postsByYearMonth %}

  <ul>
    {% for post in yearMonth.items %}
      
      '{{ site.url }}{{ post.url }}',
      
    {% endfor %}
  </ul>
{% endfor %}
