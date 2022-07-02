paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
    elements: true
};
Pace.on('done', function () {
    $('.load').delay(500).animate({
        top: "300",
        opacity: "0"

    }, 3000, $.bez([0.19, 1, 0.22, 1]));
});
$('.preloader').delay(1500).animate({
    top: "-1000"
}, 2000, $.bez([0.19, 1, 0.22, 1]));

