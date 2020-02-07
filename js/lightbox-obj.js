module.exports = {
   
    close: function() {
        // console.log('close from lightbox obj')
        $(document).on('click', '.overlay, .lightbox .close', function() {
            $('.overlay').remove();
            $('.lightbox').remove();
        });
    },

    hover: function() {
        // console.log('hover from lightbox obj');
        $(document).on('mouseenter', '.lightbox .thumbs ul li img', function() {
            // console.log('hover thumb');
            var src = $(this).attr('src');
            $('.lightbox .images .hero').attr('src', src);

        });

        $(document).on('mouseleave', '.lightbox .thumbs ul li img', function() {
            var originalSrc = $('.lightbox div.thumbs ul li:nth-of-type(1) img').attr('src');
            // console.log('unhover thumb');
            $('.lightbox .images .hero').attr('src', originalSrc);
        });

    },
    
    click: function() {
        $(document).on('click', '.lightbox .thumbs ul li img', function() {
            var src = $(this).attr('src');
            $('.lightbox .images .hero').attr('src', src);
        });
    }
};