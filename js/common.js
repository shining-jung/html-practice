const mbtn = document.querySelector('#mMenu');
const body = document.querySelector('body');

mbtn.addEventListener('click', function () {
    body.classList.toggle('active');
});

let contactUsSlide = new Swiper('.contactUsSlide', {
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

let whyBuildSlide = new Swiper('.whyBuildSlide', {
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
let partnerSlide = new Swiper('.partnerSlide', {
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
let letStepSlide = new Swiper('.varStepSlide', {
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

/*form*/
//input에 값이 변경되었을때
// 만약 깂이 있다면 부모에게 fix 클래스를 추가 그외는 fix제거
const formElm = document.querySelectorAll('.join_form input, .join_form textarea');
formElm.forEach((e) => {
    e.addEventListener('input', () => {
        if (e.value !== '') {
            //왜 e.target이 undefined가 뜰까...
            e.parentNode.classList.add('fix');
        } else if (e.value === '') {
            e.parentNode.classList.remove('fix');
        }
    });
});

/*modal*/
const modalSelect = document.querySelectorAll('[data-modal]');
modalSelect.forEach((target) => {
    target.addEventListener('click', (e) => {
        const modalData = e.target.getAttribute('data-modal');
        const modalElm = document.createElement('div');
        const mdalcon = document.querySelector(`.modalBody.${modalData}`).outerHTML;
        console.log('${modalData}');
        modalElm.classList.add('modalCon');
        modalElm.innerHTML = mdalcon;
        document.body.append(modalElm);

        const modalClose = modalElm.querySelector('.modalClose');
        modalClose.addEventListener('click', () => {
            modalElm.remove();
        });
    });
});

/*svg*/
let mainPath01 = `
    <svg
    width="736"
    height="846"
    viewBox="0 0 736 846"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M733 170C643.774 184.843 473.913 269.224 508.271 487.998C542.63 706.772 396.407 813.155 319 839"
    />
    </svg>
`;
let mainPath02 = `
    <svg
        width="736"
        height="846"
        viewBox="0 0 736 846"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M738.5 420.5C491.667 408.333 -0.900015 474.9 3.49999
    838.5"
        />
    </svg>
`;
let mainPath03 = `
    <svg
        width="736"
        height="846"
        viewBox="0 0 736 846"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M225.193 0C221.912 140.127 259.209 433.314 434.642 485.053C610.075 536.792 613.776 746.576 593.697 845"
        />
    </svg>
`;

const $path01 = document.querySelector('.path01');
const $path02 = document.querySelector('.path02');
const $path03 = document.querySelector('.path03');
$path01.innerHTML = mainPath01;
$path02.innerHTML = mainPath02;
$path03.innerHTML = mainPath03;
