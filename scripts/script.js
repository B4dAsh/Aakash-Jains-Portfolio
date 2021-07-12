let hb;
let menuOpen = false;

function hamburger() {
    
    if (!menuOpen) {
        hb = document.getElementById("hamburger-menu-container");
        hb.classList.add("menu-opened");
        setTimeout(function() { document.getElementById("hamburger-btn").innerHTML = "<i class=\"fas fa-times\"></i>" }, 300);
        menuOpen = true;
    } else {
        hb = document.getElementById("hamburger-menu-container");
        hb.classList.remove("menu-opened");
        setTimeout(function() { document.getElementById("hamburger-btn").innerHTML = "<i class=\"fas fa-bars\"></i>"}, 300);
        menuOpen = false;
    }

}

$(document).ready(function() {
    setTimeout( () => $('.loader-container').fadeOut('slow'), 1000);
});