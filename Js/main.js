document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    console.log("esto es un proyecto nuevo"); //este es un comentario
    console.log("esto es un comentario nuevo"); //este es un comentario
    console.log("esto es un comentario que viene de otra branch"); 
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
    });
});