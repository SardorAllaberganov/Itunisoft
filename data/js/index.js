$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $("nav").addClass("fixed");
        } else {
            $("nav").removeClass("fixed");
        }
    });

    jQuery(".header_animation").addClass("invisible").viewportChecker({
        classToAdd: "visible animated fadeInUp",
        offset: 150,
    });
    jQuery(".about_animation").addClass("invisible").viewportChecker({
        classToAdd: "visible animated fadeInUp",
        offset: 100,
    });

    jQuery(".counter-elements").addClass("invisible").viewportChecker({
        classToAdd: "visible animated fadeInUp",
        offset: 100,
        callbackFunction: function () {
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        },
    });

});
