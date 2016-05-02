$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $(".header").addClass('smaller');
        } else {
            $(".header").removeClass("smaller");
        }
    });
});
