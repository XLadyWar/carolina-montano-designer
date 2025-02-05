document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);




    gsap.to(".imagen-yo", {
        y: "70vh",
        x: -500, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#sobre-mi", 
            start: "top 80%", 
            end: "top 50%", 
            scrub: true, 
        }
    });

    
});
