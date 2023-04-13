$(window).on('load',function (){
    if (jQuery('#testimonials').length) {
        jQuery('#testimonials').owlCarousel({
            loop: true,
            margin: 68,
            nav: false,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items:1
                },
            }
        })
    }
})