import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import{moveBall, shortcuts} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma1.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Oct 05 2021 00:00:00", "Feliz Cumpleaños Alitox 🥰🥰🥰");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px", 
        `<a href="https://www.youtube.com/watch?v=SCAlBq8rd3Q" target="_blank" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/V93TkQtgk-U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px", 
        `<a href="https://goo.gl/maps/9o7fnH8rwwQwsyNZ9" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.252147895275!2d-75.65967070804834!3d4.548588301532981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f4fb8f430bbd%3A0x159c0ed6d96d65f!2sParque%20De%20La%20Vida!5e0!3m2!1ses!2sco!4v1613448959615!5m2!1ses!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
        );
    
    responsiveTester("responsive-tester");
    
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");