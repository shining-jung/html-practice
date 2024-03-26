const mbtn = document.querySelector('#mMenu');
const body = document.querySelector('body');

mbtn.addEventListener('click', function () {
    body.classList.toggle('active');
});

var contactUsSlide = new Swiper('.contactUsSlide', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: '.main_vis .next',
        prevEl: '.main_vis .prev',
    },
    breakpoints: {
        990: {
            slidesPerView: 3,
        },
    },
});

var whyBuildSlide = new Swiper('.whyBuildSlide', {
    slidesPerView: 1,
    spaceBetween: 45,
    navigation: {
        nextEl: '.whyBuildSlide .next',
        prevEl: '.whyBuildSlide .prev',
    },
    breakpoints: {
        990: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});
var partnerSlide = new Swiper('.partnerSlide', {
    slidesPerView: 1,
    spaceBetween: 45,
    navigation: {
        nextEl: '.partnerSlide .next',
        prevEl: '.partnerSlide .prev',
    },
    breakpoints: {
        990: {
            slidesPerView: 4,
        },
    },
});
var varStepSlide = new Swiper('.varStepSlide', {
    slidesPerView: 1,
    spaceBetween: 45,
    navigation: {
        nextEl: '.varStepSlide .next',
        prevEl: '.varStepSlide .prev',
    },
    breakpoints: {
        990: {
            slidesPerView: 4,
        },
    },
});
