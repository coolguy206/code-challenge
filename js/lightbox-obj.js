module.exports = {
    close: function() {
        $('.overlay, .lightbox .close').click(function() {
            $('.overlay').remove();
            $('.lightbox').remove();
        });
    },
    hover: function() {
        //hover thumbs
        var originalSrc = $('.lightbox .images .hero').attr('src');
        $('.lightbox .thumbs ul li img').hover(function() {
            // console.log('hover thumb');

            var src = $(this).attr('src');
            $('.lightbox .images .hero').attr('src', src);
        }, function() {
            // console.log('unhover thumb');
            $('.lightbox .images .hero').attr('src', originalSrc);
        });
    },
    click: function() {
        $('.lightbox .thumbs ul li img').click(function() {
            var src = $(this).attr('src');
            $('.lightbox .images .hero').attr('src', src);
        });
    }
};
