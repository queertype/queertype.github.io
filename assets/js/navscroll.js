$(window).on("scroll resize", function () {
    // Get the current scroll position and window width
    var scrollTop = $(window).scrollTop();
    var windowWidth = $(window).width();

    // Determine if the width is less than 600px
    var isMobile = windowWidth < 600;

    // Apply styles based on scroll position and window width
    if (isMobile) {
        if (scrollTop > 10) {
            $(".nav").css({
                "filter": "drop-shadow(0px 0px 10px #3C50FF)",
                "padding-top": ".4em",
                "padding-bottom": ".2em"
            });
            $(".logo").css({
                "width": "3.5em"
            });
        } else {
            $(".nav").css({
                "filter": "drop-shadow(0px 0px 0px #FFF6FE)",
                "padding-top": ".8em",
                "padding-bottom": ".4em"
            });
            $(".logo").css({
                "width": "4.5em"
            });
        }
    } else {
        $(".nav").css({
            "filter": "drop-shadow(0px 0px 0px #FFF6FE)",
            "padding-top": "1em",
            "padding-bottom": ".4em"
        });
        $(".logo").css({
            "width": "5em"
        });
    }
});
