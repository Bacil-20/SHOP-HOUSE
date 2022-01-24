/* ************** INDEX.HTML  *************** */
new WOW().init();
// ************ OwlCarousel Function *************
$(".black-friday-carosal").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    margin: 10,
    slideSpeed: 300,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});
$(".top-seals").owlCarousel({
    loop: false,
    pullDrag: true,
    nav: true,
    rewind: true,
    navText: [
        `<i class="fal fa-chevron-left"></i>`,
        `<i class="fal fa-chevron-right"></i>`,
    ],
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});
$(".elec-carosal1").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        678: {
            items: 3,
        },
        1000: {
            items: 4,
        },
        1001: {
            items: 6,
        },
    },
});
$(".elec-carosal2").owlCarousel({
    loop: false,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        678: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
});
$(".calrosal-build").owlCarousel({
    loop: false,
    pullDrag: true,
    nav: true,
    rewind: true,
    navText: [
        `<i class="fal fa-chevron-left"></i>`,
        `<i class="fal fa-chevron-right"></i>`,
    ],
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        },
    },
});
