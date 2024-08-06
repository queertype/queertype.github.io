$(window).scroll(function () {
    document.title = window.scrollY
    var scrollTop = window.scrollY;

if ($(window).width() < 600) {
    if (scrollTop > 10) {
            $(".nav").css({
                "filter": "drop-shadow(0px 0px 10px #3C50FF)",
                "padding-top": ".4em",
                "padding-bottom": ".2em"

            });

            $(".logo").css({
                "width": "3.5em"
            });
        }
    };
if ($(window).width() < 600) {

    if (scrollTop == 0) {

            $(".nav").css({

                "filter": "drop-shadow(0px 0px 100px #3C50FF)",
                "padding-top": ".8em",
                "padding-bottom": ".4em"

            });
            $(".logo").css({
                "width": "4.5em"
            });
        }

    }
}

);

$(window).on("resize", function () {
    if ($(window).width() < 600) {

        $(".nav").css({
            "filter": "drop-shadow(0px 0px 0px #FFF6FE)",
            "padding-top": ".8em",
            "padding-bottom": ".4em"


        });
        $(".logo").css({
            "width": "4,5em"
        });


    };

    if ($(window).width() > 600) {

        $(".nav").css({
            "filter": "drop-shadow(0px 0px 0px #FFF6FE)",
            "padding-top": "1em",
            "padding-bottom": ".4em"


        });
        $(".logo").css({
            "width": "5em"
        });

    };


    ;
});
