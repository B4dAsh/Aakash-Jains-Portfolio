let hamburger;
let menuOpen = false;

function openHamburger(hamburger) {

    if (!menuOpen) {
        hamburger = document.getElementById("hamburger-menu");
        hamburger.classList.add("menu-opened");
        menuOpen = true;
    } else {
        hamburger = document.getElementById("hamburger-menu");
        hamburger.classList.remove("menu-opened");
        menuOpen = false;
    }

}