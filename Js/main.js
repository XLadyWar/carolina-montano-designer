document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    console.log("esto es un proyecto nuevo");
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
    });
});