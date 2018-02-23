{% assign featuredReviews = (site.customer_reviews | where: 'featured', 't' | sort: 'date') | reverse  %}

<div id="reviews-wall">
{% for review in featuredReviews limit: 5 %}
{% assign current_index = forloop.index0 }}
{% assign next_index = current_index | plus: 1 %}
{% assign prev_index = current_index | minus: 1 %}
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
<div class="clear"></div>