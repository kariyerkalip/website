$(function() {
    "use strict";




    /* ==========================================================================
   Preload
   ========================================================================== */

    $(window).load(function() {
        $("#status").fadeOut();
        $("#preloader").delay(1000).fadeOut("slow");
    });


    /* ==========================================================================
   On Scroll animation
   ========================================================================== */

    if ($(window).width() > 992) {
        new WOW().init();
    };


    /* ==========================================================================
   Fade On Scroll
   ========================================================================== */


    if ($(window).width() > 992) {

        $(window).on('scroll', function() {
            $('.main').css('opacity', function() {
                return 1 - ($(window).scrollTop() / $(this).outerHeight());
            });
        });
    };

});

function selectText(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
    }
}
