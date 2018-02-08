---
layout: default
title: How it works
permalink: /reviews/
---

<h1>Reviews</h1>

<p>test</p>

{% for customer_review in site.customer_reviews %}
    <p>Name: {{ customer_review.name }}</p>
    <p>Stars: {{ customer_review.stars }} out of 5</p>
{% endfor %}