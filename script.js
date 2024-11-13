// script.js
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Evento para abrir/cerrar el menú hamburguesa
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Funcionalidad para el carrusel de imágenes
let currentImageIndex = 0;
const images = document.querySelectorAll('#carousel-images img');
const totalImages = images.length;

document.getElementById('next-img').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateCarousel();
});

document.getElementById('prev-img').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentImageIndex * 100;
    document.getElementById('carousel-images').style.transform = `translateX(${offset}%)`;
}

//mapa

