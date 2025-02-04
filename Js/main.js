document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const textoMayor = document.querySelector('.texto-mayor');
    const heroText = document.querySelector('.hero-text');

    setTimeout(() => {
        textoMayor.classList.add('visible');
    }, 300); // Aparece primero el texto mayor

    setTimeout(() => {
        heroText.classList.add('visible');
    }, 600); // Luego aparece el hero text con un ligero retraso
});


