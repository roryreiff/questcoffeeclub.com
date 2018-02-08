<div class="expand">
{% for review in site.customer_reviews %}
    <div class="box box-review half">
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
<div class="spacer-40"></div>
<a href="/reviews" class="button button-secondary-white button-with-arrow button-medium button-right">See all reviews<span class="button-arrow"></span></a>