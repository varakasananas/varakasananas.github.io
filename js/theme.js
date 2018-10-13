/*!
 * */


!function (t) {
    "use strict";
    t("a.page-scroll").bind("click", function (a) {
        var o = t(this);
        t("html, body").stop().animate({scrollTop: t(o.attr("href")).offset().top - 50}, 1250, "easeInOutExpo"), a.preventDefault()
    }), t("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 100
    }), t(".navbar-collapse ul li a").click(function () {
        t(".navbar-toggle:visible").click()
    }), t("#mainNav").affix({offset: {top: 50}})
}(jQuery);

window.onload = function () {
    function setLowVolume() {
        let myAudio = document.getElementById("audio1");
        myAudio.src = src="audio.mp3";
        myAudio.volume = 0.3; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
    };

    /* preloader and audio*/
    setTimeout(function () {
        /*document.getElementById('page-preloader').classList.add('loaded');*/
        $("#loader").fadeOut();
        setLowVolume();

    }, 1500)
};




jQuery(document).ready(function () {
    let owl = $('.owl-carousel');
    let owl2 = $('.owl-animation');
    owl.owlCarousel({
        lazyLoad: true,
        loop: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }

    });
    /*    owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });*/
    jQuery('#animated-thumbnials').lightGallery({
        selector: '.item',
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        download: false
    });
    /*    lightGallery(document.getElementById('animated-thumbnials'), {selector: '.item'});*/

    /*2 owl*/

    owl2.owlCarousel({
        lazyLoad: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        slideSpeed: 3000,
        smartSpeed: 4000,
        autoplayHoverPause: true,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }

    });
    /*    owl2.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });*/
    jQuery('#animated-thumbnials2').lightGallery({
        selector: '.item',
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false,
        download: false
    });

});
