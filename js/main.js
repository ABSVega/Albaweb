//menu para dispositivos moviles
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

//Cambio del color del menu
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //Si se cumple la condicion se aplicara el estilo de la clase navbar-scrolled al header
        document.querySelector("header").classList.add("navbar-scrolled");
        //Si no se cumple la condicion no aplicara los estilos
    } else {
        document.querySelector("header").classList.remove("navbar-scrolled");
    }
};


// Toma la imagen de la clase logo
const logoImage = document.querySelector('.logo');
// Define la ruta de la imagen principal y a la secundaria
const defaultLogo = '/img/ALBA_WEB_ELEMENTS-03.png';
const scrolledLogo = '/img/ALBA_WEB_ELEMENTS-02.png';

window.addEventListener('scroll', () => {
    // Verifica que el usuario scrolle más de 50 px
    if (window.scrollY > 50) {
        // Si la condición se cumple aplica el cambio del logo
        logoImage.src = scrolledLogo;
    } else {
        // De no ser así no hay cambio de logo
        logoImage.src = defaultLogo;
    }
});
 // cambiar a la siguiente imagen cada 3 segundos