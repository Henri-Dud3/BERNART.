console.log("Olá, mundo!");
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function changeSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(() => {
    changeSlide(1);
}, 5000);

const textos = document.querySelectorAll('.texto-animado');
    let currentIndex = 0;

    function alternarTexto() {
        textos[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % textos.length;
        textos[currentIndex].classList.add('active');
    }

    setInterval(alternarTexto, 6000); // Alterna a cada 6 segundos 

    