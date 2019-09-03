//mobile move lightbox
if ($(window).width() < 415) {
  var offset = window.pageYOffset + 'px';
  $('.lightbox').css('top', offset);
}