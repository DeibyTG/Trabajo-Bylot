
import { f_datosJson } from "./data/data.js";
    if(document.body.id==="body-index"){
    window.addEventListener("scroll",f_datosJson);
}

import { f_verMarmol } from "./components/carousel.js";
window.addEventListener('scroll',f_verMarmol);

import { f_verEcommerce } from "./components/carousel.js";
window.addEventListener('scroll',f_verEcommerce);

import{activateLinkOnScroll} from "./ui/navbar.js";
window.addEventListener("scroll", activateLinkOnScroll);

import{f_verNavBar} from "./ui/navbar.js";
window.addEventListener("scroll", f_verNavBar);

import{hoverClick} from "./ui/navbar.js";
window.addEventListener("click", activateLinkOnScroll);

import{f_carousel} from "./components/carousel.js";
window.addEventListener("DOMContentLoaded",f_carousel)

import{validar} from"./utils/validator.js";
document.addEventListener("DOMContentLoaded", () => {

    const idbody=document.body.id;

    if(idbody==='presupuesto'){
        const form = document.getElementById("formulario1");
        form.addEventListener("submit", (e) => {
            e.preventDefault(); 
            if (validar(form)) {
                form.submit(); 
            }
        });
    }
});

import{f_actualizarPresupuesto} from'./data/data.js';
document.addEventListener('change',f_actualizarPresupuesto);

import{f_verMapa} from "./vendors/someLib.js";
document.addEventListener("DOMContentLoaded",f_verMapa)

