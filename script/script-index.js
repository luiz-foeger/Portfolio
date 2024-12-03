const titulos = ["— Desenvolvedor Front-End —", "— Designer Gráfico —", "— Desenvolvedor Back-End —", "— Web Designer —"];
let indiceAtual = 0;

setInterval(() => {
    indiceAtual = (indiceAtual + 1) % titulos.length;
    document.getElementById('titulo').textContent = titulos[indiceAtual];
}, 2000); // troca a cada 2000 milissegundos (2 segundos)

document.addEventListener('scroll', function () {
    const sectionSobre = document.querySelector('.section-sobre');
    const sectionProjetos = document.querySelector('.section-projetos');

    const posicaoSection = sectionSobre.getBoundingClientRect().top;
    const posicaoSectionSeguinte = sectionSobre.getBoundingClientRect().top;
    const posicaoTela = window.innerHeight / 1.3;
    const posicaoTela2 = window.innerHeight / 1.6;
    // const tela2terco = window.innerHeight / 1.6;

    if (posicaoSection < posicaoTela) {
        sectionSobre.classList.add('visible');
    }

    if (posicaoSectionSeguinte < posicaoTela2) {
        sectionProjetos.classList.add('visible');
    }
});


document.addEventListener('scroll', function() {
    const fadeInSection = document.querySelector('.fade-in');
    const fadeInBelowSection = document.querySelector('.fade-in-below');
    const sectionPosition = fadeInSection.getBoundingClientRect().top;
    const belowSectionPosition = fadeInBelowSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        fadeInSection.classList.add('visible');
    }

    if (belowSectionPosition < screenPosition) {
        fadeInBelowSection.classList.add('visible');
    }
});

// const carouselInner = document.querySelector('.carousel-inner');
// const items = document.querySelectorAll('.carousel-item');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
// let currentIndex = 0;

// function updateCarousel() {
//     const offset = -currentIndex * 100;
//     carouselInner.style.transform = `translateX(${offset}%)`;
// }

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 10;
//     updateCarousel();
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex < items.length - 1) ? currentIndex + 10 : 0;
//     updateCarousel();
// });

const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});