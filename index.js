// scroll to section by clicking in navbar
function scrollto(div) {
    $('html,body').animate(
        {
            scrollTop: $("#" + div).offset().top
        }, 'slow');
}
