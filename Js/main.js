document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    console.log("esto es un proyecto nuevo"); //este es un comentario
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
    });
});