let hb;
let menuOpen = false;

function hamburger(hamburger) {
    
    if (!menuOpen) {
        hb = document.getElementById("hamburger-menu-container");
        hb.classList.add("menu-opened");
        document.getElementById("hamburger-btn").innerHTML = "<i class=\"fas fa-times\"></i>"
        menuOpen = true;
    } else {
        hb = document.getElementById("hamburger-menu-container");
        hb.classList.remove("menu-opened");
        document.getElementById("hamburger-btn").innerHTML = "<i class=\"fas fa-bars\"></i>"
        menuOpen = false;
    }

}