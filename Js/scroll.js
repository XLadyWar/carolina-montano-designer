document.addEventListener('DOMContentLoaded', () => {
    const imagenYo = document.querySelector('.imagen-yo img');
    const sobreMi = document.querySelector('#sobre-mi');

    window.addEventListener('scroll', () => {
        const sobreMiBottom = sobreMi.offsetTop + sobreMi.offsetHeight; // Posición final de #sobre-mi
        const scrollY = window.scrollY + window.innerHeight; // Posición actual del scroll sumando el viewport

        if (scrollY >= sobreMiBottom) {
            // Cuando el scroll llega al final de #sobre-mi, la imagen se queda fija
            imagenYo.classList.add('stop-scroll');
        } else {
            // Mientras no ha llegado, sigue su movimiento normal
            imagenYo.classList.remove('stop-scroll');
        }
    });
});
