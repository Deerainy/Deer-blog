---
layout: page
title: 归档
permalink: /archive/
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
<h2 class="archive-year">{{ year.name }}</h2>
<ul class="archive-list">
  {% for post in year.items %}
  <li class="archive-item">
    <time>{{ post.date | date: "%m月%d日" }}</time>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
{% endfor %}
