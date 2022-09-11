const menu = document.querySelector(".body--header-bars_menu");

menu.addEventListener("click", animateBars);

var barsMenuLine1 = document.querySelector(".bars_menu-line1");
var barsMenuLine2 = document.querySelector(".bars_menu-line2");
var barsMenuLine3 = document.querySelector(".bars_menu-line3");
var menuNav = document.getElementsByClassName("body--header-bars_links")[0];

function animateBars() {
    barsMenuLine1.classList.toggle("active_bars_menu-line1");
    barsMenuLine2.classList.toggle("active_bars_menu-line2");
    barsMenuLine3.classList.toggle("active_bars_menu-line3");

    menuNav.classList.toggle("active_nav");

}


