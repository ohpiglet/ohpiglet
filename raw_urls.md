---
layout: default
title: Raw URLs
---

# Raw URLs

All the URLS in raw format.

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "" %}

{% for yearMonth in postsByYearMonth %}

  <ul>
    {% for post in yearMonth.items %}
      '<a href="{{ site.baseurl }}{{ post.url }}"></a>',
    {% endfor %}
  </ul>
{% endfor %}
