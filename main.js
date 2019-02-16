$(document).ready(function () {
    let letters = $('.header_intro-letter');

    for (let i = 0; i < letters.length; i++) {
        setTimeout(function () {
            $('.header_intro-letter:eq(' + i + ')').animate({
                opacity: 1
            }, 1000);
        }, (120 * i + 1000));
    }

    $('.header_intro-1').animate({
        opacity: 1
    }, 2300);

    $("a[href^='#']").click(function (e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });
});