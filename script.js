// jQuery fade-in effect for article columns on page load
// Source idea: adapted from basic jQuery fade examples on W3Schools
$(document).ready(function () {
    $('.column').each(function (index) {
        $(this)
            .css('opacity', 0)
            .delay(180 * index)
            .fadeTo(700, 1);
    });
});
