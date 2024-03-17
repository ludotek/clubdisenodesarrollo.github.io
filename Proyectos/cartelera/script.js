window.onscroll = function(){

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("icon_pop");
    var elemento2 = document.getElementById("icon_locura");

    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.02 + "px";

}


gsap.to("#laMonjaSilueta2", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 30, opacity:20})