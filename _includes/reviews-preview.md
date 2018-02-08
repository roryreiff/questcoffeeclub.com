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