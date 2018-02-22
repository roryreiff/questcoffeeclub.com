---
layout: default
title: Frequent Asked Questions
permalink: /faqs/
description: All the questions you might have about Quest Coffee Club, as well as links to support.
keywords: coffee, Colombia, help, questions, subscription, shipping, support, contact
---

{% include hero-faqs.html %}
<div class="spacer-60"></div>
{% assign reviews = site.customer_reviews | sort: 'date'%}
<div class="outer">
    <div class="inner">
        <div id="reviews-wall">
            {% for review in reviews reversed %}
            <div class="box box-review half-with-gutter {% cycle 'odd', 'even' %}">
                <p>"{{review.comment}}"</p>
                <div class="expand">
                    <div class="person">
                    <p>{{review.name}}<br>{{review.location}}</p>
                    </div>
                    <div class="rating">
                        <div class="stars stars-{{review.stars}}"></div>
                        <p>{{ review.date | date: '%B %d, %Y' }}</p>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>       
</div>
<div class="spacer-80"></div>
{% include cta.html %}