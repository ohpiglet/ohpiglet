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
      <li><i>{{ post.date | date: "%B %-d %Y" }}</i> - <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

ddong

{% comment %}show navigation tag here{% endcomment %}
<div class="archive-label-meta" style ="margin-top:25px">
{% assign i = 0 %}
{% comment %} remove the separator. {% endcomment %}
{% assign counts_year = counts | split: ', ' | reverse %}
{% assign years = years | split: ', ' %}
{% for year in years reversed %}
<ul class="post-categories">       
     <a href = "#{{year}}" style = "font-family: Raleway,Arial,sans-
      serif; font-size:14px">{{ year }} ( {{counts_year[i]}} )</a>
</ul>
{% assign i = i | plus: 1 %}
{% endfor %}
</div>

{% comment %}list post link for each year{% endcomment %}
{% assign counts = counts | split: ', ' | reverse %}
{% assign i = 0 %}
{% for post in site.posts %}
    {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3 id = "{{year}}" class="archive-title">{{ post.date | date: '%B %Y' }}</h3>
	  {% assign i = i | plus: 1 %}
      {% endif %}
	<div class="archive-meta" style="margin-left:15px;line-height:16px">
	 <div class="post-date" style="margin-right:30px; font-size:16px; 
          width:180px"><i class="icon-calendar"></i>{{ post.date | date:
          "%e %B %Y" }}</div>
     <a class="post-link" href="{{ post.url | relative_url }}">
     <h2 class="archive-link">{{ post.title | escape }}</h2>
     </a>
   </div>
{% endfor %}