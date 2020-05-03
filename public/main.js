//selected-items-carousel
$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);

    var idx = $e.index();
    console.log("IDX :  " + idx);

    var itemsPerSlide = 8

        ;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
//scroll to section by clicking in navbar
function scrollto(div) {
    $('html,body').animate(
        {
            scrollTop: $("#" + div).offset().top
        }, 'slow');
}

//link for selected items to corresponding article
$(document).ready(function () {
    $('img.img-fluid').click(function () {
        window.location.href = this.id + '.html';
    });
});
