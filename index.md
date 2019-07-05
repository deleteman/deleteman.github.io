---
title: My Writing Corner 
author:
    twitter: deleteman123
    name: Fernando Doglio
description: Blog about blogging. Get tips on how to start a blog, how to increase your traffic and how to turn your hobbie into an income producing endevour. 
---
{% for post in site.posts %}	
{% assign reminder = forloop.index  | modulo: 2 %}

<div class="blogpost" markdown="1"> 
[![{{post.title}}]({{post.image}})]({{post.url}})
<div class="thumb-text" markdown="1">
## {{post.title}}
### {{post.date | date: "%B %e, %Y"}}
[Read more]({{post.url}}) 
</div>
</div>
{% if reminder == 0  %}
  <div class="clear"></div>
{% endif %}
{% endfor %}	

<div class="sharethis-inline-share-buttons"></div>