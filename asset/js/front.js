(function ($) {
    $(document).ready(function ($) {
        $('.shop-block-product .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 3},
                400: {items: 4},
                600: {items: 5},
                1000: {items: 5}
            }
        })
    });
})(jQuery)


$('.pi-navbar-nav li a').prepend("<i class='fa fa-genderless'></i>&nbsp;&nbsp;");