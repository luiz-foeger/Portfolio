
const carouselInnerMobile = document.querySelector('.carousel-inner-mobile');
const itemsMobile = document.querySelectorAll('.carousel-item-mobile');
const prevButtonMobile = document.getElementById('prev');
const nextButtonMobile = document.getElementById('next');
let currentIndexMobile = 0;

function updateCarouselMobile() {
    const offset = -currentIndexMobile * 100;
    carouselInnerMobile.style.transform = `translateX(${offset}%)`;
}

prevButtonMobile.addEventListener('click', () => {
    currentIndexMobile = (currentIndexMobile > 0) ? currentIndexMobile - 1 : itemsMobile.length - 1;
    updateCarouselMobile();
});

nextButtonMobile.addEventListener('click', () => {
    currentIndexMobile = (currentIndexMobile < itemsMobile.length - 1) ? currentIndexMobile + 1 : 0;
    updateCarouselMobile();
});