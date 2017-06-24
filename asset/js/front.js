(function ($) {
    $(document).ready(function () {
        //Fix navbar multiple level
        var navbar = $('.pi-navbar-nav');
        var hasBrand = navbar.parents('.navbar').find('.navbar-brand').length;
        navbar.find('>li').each(function () {
            var $this = $(this);
            var caretStr = '<span class="pi-navbar-caret"></span>';
            caretStr += '<span class="pi-navbar-caret pi-navbar-caret-outer"></span>';
            if ($this.find('li').length) {
                $this.append(caretStr);
            }
        });
        navbar.find('ul').addClass('dropdown-menu');

        if (!hasBrand) {
            navbar.css('marginLeft', '-15px');
        }
    });

    $(document).ready(function () {
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