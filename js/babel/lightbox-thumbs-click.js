"use strict";

//thumbs click
$('.lightbox .thumbs ul li img').click(function () {
  var src = $(this).attr('src');
  $('.lightbox .images .hero').attr('src', src);
});
//# sourceMappingURL=lightbox-thumbs-click.js.map
