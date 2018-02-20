---
layout: default
title: Our Coffee
permalink: /our-coffee/
---

{% include hero-our-coffee.html %}

{% assign coffees = site.our-coffee | sort: 'roast_date' | reverse  %}

<div id="our-coffees">
    <div class="outer">
        <div class="inner expand-third">
{% for coffee in coffees %}
    <div class="box third">
        <p>"{{coffee.name}}"</p>
    </div>
{% endfor %}
        </div>
    </div>
</div>
<div class="clear"></div>
{% include cta.html %}