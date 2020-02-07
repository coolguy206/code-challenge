var lightbox = require('./lightbox-obj.js');

$(document).ready(function() {

    lightbox.close();

    // lightbox.hover();

    // lightbox.click();


    var decimal = function(elem) {
        var x = elem;
        x = x.toFixed(2);
        return x;
    };

    $.getJSON("js/json.json", function(json) {
        console.log(json);

        var elem = '';
        $.each(json.groups, function(i, val) {

            // console.log(val.reviews);

            var sellPriceH = decimal(val.priceRange.selling.high);
            var sellPriceL = decimal(val.priceRange.selling.low);


            var flags = '';
            $.each(val.flags, function(j, arr) {
                var div = `<div>${arr.id}</div>`;
                flags = flags + div;
            });


            var images = `<li><img src="${val.hero.href}" alt="${val.name}"></li>`;
            $.each(val.images, function(l, img) {
                var img = `<li><img src="${img.href}" alt="${val.name}"></li>`;
                images = images + img;
            });

            var messages = '';
            let messagesLength = val.messages;
            // console.log(messagesLength.length);
            if (messagesLength >= 1) {
                $.each(val.messages, function(k, str) {
                    var h3 = `<h3>${str}</h3>`;
                    messages = messages + h3;
                });
            }

            let reviews = `
                <div class="reviews">
                  <h2>Reviews</h2>
                  <p>
                    Average Rating: ${val.reviews.averageRating}<br>
                    Review Count: ${val.reviews.reviewCount}
                  </p>
                </div>
                `;




            let li = `
        <li>
          <a href="#" data-url="${val.links.www}">
            <img class="hero" src="${val.hero.href}" alt="${val.name}">
            <h2>${val.name}</h2>
          </a>
          <div class="flags">${flags}</div>
          <h3 class="sale">$${sellPriceL} - $${sellPriceH}</h3>
          <div class="messages">${messages}</div> 
          ${reviews}
          <ul>${images}</ul>
        </li>`;

            elem = elem + li;

        });

        $('.container ul').append(elem);

        //click
        $('.container a').click(function(e) {
            e.preventDefault();
            const url = $(this).attr('data-url');
            const hero = $(this).find('.hero')[0].outerHTML;
            const name = $(this).find('h2')[0].outerHTML;
            const flags = $(this).siblings('.flags')[0].outerHTML;
            const salePrice = $(this).siblings('.sale')[0].outerHTML;
            const messages = $(this).siblings('.messages')[0].outerHTML;
            const reviews = $(this).siblings('.reviews')[0].outerHTML;
            const thumbs = $(this).siblings('ul')[0].outerHTML;
            const overlay = '<div class="overlay"></div>';

            /*const lightbox = `
                <div class="lightbox">
                  <div class="close">X</div>
                  <div class="thumbs">${thumbs}</div>
                  <div class="images">${hero}</div>
                  <div class="details">
                    <a href="${url}" target="_blank">${name}</a>
                    ${flags}
                    ${salePrice}
                    ${messages}
                    ${reviews}
                  </div>
                </div>`;*/

            const lightbox = `
                <div class="lightbox">
                  <div class="close">X</div>
                  <div class="images">${thumbs}</div>
                  <div class="details">
                    <a href="${url}" target="_blank">${name}</a>
                    ${flags}
                    ${salePrice}
                    ${messages}
                    ${reviews}
                  </div>
                </div>`;

            $('body').prepend(overlay, lightbox);


            $('.lightbox .images ul').bxSlider();

            //move lightbox on mobile
            if ($(window).width() <= 414) {
                var y = window.pageYOffset;
                $('.lightbox').css('top', y);
            }

        });
    });

});