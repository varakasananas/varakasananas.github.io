/*!
 * */
!function(t){"use strict";t("a.page-scroll").bind("click",function(a){var o=t(this);t("html, body").stop().animate({scrollTop:t(o.attr("href")).offset().top-50},1250,"easeInOutExpo"),a.preventDefault()}),t("body").scrollspy({target:".navbar-fixed-top",offset:100}),t(".navbar-collapse ul li a").click(function(){t(".navbar-toggle:visible").click()}),t("#mainNav").affix({offset:{top:50}})}(jQuery);


function setLowVolume() {
    var myAudio = document.getElementById("audio1");
    myAudio.volume = 0.4; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        autoHeight: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }

    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
    $('#animated-thumbnials').lightGallery({
        selector: '.item',
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false,
        download:false
    });
/*    lightGallery(document.getElementById('animated-thumbnials'), {selector: '.item'});*/
});
