const hamburger = document.getElementById("hamburger-menu")
let menuOpen = false;

function openHamburger() {

    if (!menuOpen) {
        hamburger.classList.add("menu-opened");
        menuOpen = true;
    } else {
        hamburger.classList.remove("menu-opened");
        menuOpen = false;
    }

}