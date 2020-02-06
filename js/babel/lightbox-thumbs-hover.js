"use strict";

//hover thumbs
var originalSrc = $('.lightbox .images .hero').attr('src');
$('.lightbox .thumbs ul li img').hover(function () {
  // console.log('hover thumb');
  var src = $(this).attr('src');
  $('.lightbox .images .hero').attr('src', src);
}, function () {
  // console.log('unhover thumb');
  $('.lightbox .images .hero').attr('src', originalSrc);
});
//# sourceMappingURL=lightbox-thumbs-hover.js.map
