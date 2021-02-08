import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import{moveBall, shortcuts} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma1.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Oct 05 2021 00:00:00", "Feliz Cumpleaños Alitox 🥰🥰🥰");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})