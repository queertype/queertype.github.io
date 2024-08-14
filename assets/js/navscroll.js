$(window).on("scroll resize", function () {
    // Get the current scroll position, window width, and page name
    var scrollTop = $(window).scrollTop();
    var windowWidth = $(window).width();
    var isMobile = windowWidth < 1000;
    var isSchusterFrakturPage = window.location.pathname.endsWith("SchusterFraktur.html");
    var isPollyPage = window.location.pathname.endsWith("Polly.html");
    var isUnnamedPage = window.location.pathname.endsWith("Unnamed.html");

    // Set the default color and size variables
    var shadowColor;
    if (isSchusterFrakturPage) {
        shadowColor = "#232348"; // Different color for Schuster Fraktur page
    } else if (isPollyPage) {
        shadowColor = "#0a1e5a"; // Different color for Polly page
    } else if (isUnnamedPage) {
        shadowColor = "#B43232"; // Different color for Polly page
    }else {
        shadowColor = "#3C50FF"; // Default color
    }
    
    var noShadowColor = "#FFF6FE";
    var navPaddingTop, navPaddingBottom, logoWidth;

    // Apply styles based on scroll position and window width
    if (isMobile) {
        if (scrollTop > 10) {
            navPaddingTop = ".2em";
            navPaddingBottom = "0em";
            logoWidth = "3em";
            $(".nav").css({
                "filter": "drop-shadow(0px 0px 10px " + shadowColor + ")",
                "padding-top": navPaddingTop,
                "padding-bottom": navPaddingBottom
            });
            $(".logo").css({
                "width": logoWidth
            });
        } else {
            navPaddingTop = ".8em";
            navPaddingBottom = ".4em";
            logoWidth = "4.5em";
            $(".nav").css({
                "filter": "drop-shadow(0px 0px 0px " + noShadowColor + ")",
                "padding-top": navPaddingTop,
                "padding-bottom": navPaddingBottom
            });
            $(".logo").css({
                "width": logoWidth
            });
        }
    } else {
        navPaddingTop = "1em";
        navPaddingBottom = ".4em";
        logoWidth = "5em";
        $(".nav").css({
            "filter": "drop-shadow(0px 0px 0px " + noShadowColor + ")",
            "padding-top": navPaddingTop,
            "padding-bottom": navPaddingBottom
        });
        $(".logo").css({
            "width": logoWidth
        });
    }
});
