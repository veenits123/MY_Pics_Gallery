$(document).ready(function() {
    $('a').click(function() {

        var selected = $(this);
        $('a').removeClass('active');
        $(selected).addClass('active');

    })

    var $a = $('.a'),
        $b = $('.b'),
        $c = $('.c'),
        $d = $('.d'),
        $home = $('.home'),
        $aboutus = $('.aboutus'),
        $gallery = $('.gallery'),
        $contactus = $('.contactus');

    $a.click(function() {
        $home.fadeIn();
        $aboutus.fadeOut();
        $gallery.fadeOut();
        $contactus.fadeOut();

    })

    $b.click(function() {
        $aboutus.fadeIn();
        $home.fadeOut();
        $gallery.fadeOut();
        $contactus.fadeOut();

    })

    $c.click(function() {
        $gallery.fadeIn();
        $contactus.fadeOut();
        $home.fadeOut();
        $aboutus.fadeOut();

    })

    $d.click(function() {
        $contactus.fadeIn();
        $gallery.fadeOut();
        $home.fadeOut();
        $aboutus.fadeOut();
    })

})