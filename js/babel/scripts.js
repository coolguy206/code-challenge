"use strict";

var lightbox = require('./lightbox-obj.js');

$(document).ready(function () {
  lightbox.close(); // lightbox.hover();
  // lightbox.click();

  var decimal = function decimal(elem) {
    var x = elem;
    x = x.toFixed(2);
    return x;
  };

  $.getJSON("js/json.json", function (json) {
    console.log(json);
    var elem = '';
    $.each(json.groups, function (i, val) {
      // console.log(val.reviews);
      var sellPriceH = decimal(val.priceRange.selling.high);
      var sellPriceL = decimal(val.priceRange.selling.low);
      var flags = '';
      $.each(val.flags, function (j, arr) {
        var div = "<div>".concat(arr.id, "</div>");
        flags = flags + div;
      });
      var images = "<li><img src=\"".concat(val.hero.href, "\" alt=\"").concat(val.name, "\"></li>");
      $.each(val.images, function (l, img) {
        var img = "<li><img src=\"".concat(img.href, "\" alt=\"").concat(val.name, "\"></li>");
        images = images + img;
      });
      var messages = '';
      var messagesLength = val.messages; // console.log(messagesLength.length);

      if (messagesLength >= 1) {
        $.each(val.messages, function (k, str) {
          var h3 = "<h3>".concat(str, "</h3>");
          messages = messages + h3;
        });
      }

      var reviews = "\n                <div class=\"reviews\">\n                  <h2>Reviews</h2>\n                  <p>\n                    Average Rating: ".concat(val.reviews.averageRating, "<br>\n                    Review Count: ").concat(val.reviews.reviewCount, "\n                  </p>\n                </div>\n                ");
      var li = "\n        <li>\n          <a href=\"#\" data-url=\"".concat(val.links.www, "\">\n            <img class=\"hero\" src=\"").concat(val.hero.href, "\" alt=\"").concat(val.name, "\">\n            <h2>").concat(val.name, "</h2>\n          </a>\n          <div class=\"flags\">").concat(flags, "</div>\n          <h3 class=\"sale\">$").concat(sellPriceL, " - $").concat(sellPriceH, "</h3>\n          <div class=\"messages\">").concat(messages, "</div> \n          ").concat(reviews, "\n          <ul>").concat(images, "</ul>\n        </li>");
      elem = elem + li;
    });
    $('.container ul').append(elem); //click

    $('.container a').click(function (e) {
      e.preventDefault();
      var url = $(this).attr('data-url');
      var hero = $(this).find('.hero')[0].outerHTML;
      var name = $(this).find('h2')[0].outerHTML;
      var flags = $(this).siblings('.flags')[0].outerHTML;
      var salePrice = $(this).siblings('.sale')[0].outerHTML;
      var messages = $(this).siblings('.messages')[0].outerHTML;
      var reviews = $(this).siblings('.reviews')[0].outerHTML;
      var thumbs = $(this).siblings('ul')[0].outerHTML;
      var overlay = '<div class="overlay"></div>';
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

      var lightbox = "\n                <div class=\"lightbox\">\n                  <div class=\"close\">X</div>\n                  <div class=\"images\">".concat(thumbs, "</div>\n                  <div class=\"details\">\n                    <a href=\"").concat(url, "\" target=\"_blank\">").concat(name, "</a>\n                    ").concat(flags, "\n                    ").concat(salePrice, "\n                    ").concat(messages, "\n                    ").concat(reviews, "\n                  </div>\n                </div>");
      $('body').prepend(overlay, lightbox);
      $('.lightbox .images ul').bxSlider(); //move lightbox on mobile

      if ($(window).width() <= 414) {
        var y = window.pageYOffset;
        $('.lightbox').css('top', y);
      }
    });
  });
});
//# sourceMappingURL=scripts.js.map
