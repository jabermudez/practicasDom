import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import{shortcuts} from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma1.mp3", "#activar-alarma", "#desactivar-alarma");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
})