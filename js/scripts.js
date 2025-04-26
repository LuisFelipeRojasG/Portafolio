const menu = document.querySelector(".body--header-bars_menu");

var menuNav = document.querySelector(".body--header-bars_links");

menu.addEventListener("click", animateBars);

menuNav.addEventListener("click", closeLinks);

var barsMenuLine1 = document.querySelector(".bars_menu-line1");
var barsMenuLine2 = document.querySelector(".bars_menu-line2");
var barsMenuLine3 = document.querySelector(".bars_menu-line3");

//Para abrir el menu de navegacion
function animateBars() {
    barsMenuLine1.classList.toggle("active_bars_menu-line1");
    barsMenuLine2.classList.toggle("active_bars_menu-line2");
    barsMenuLine3.classList.toggle("active_bars_menu-line3");

    menuNav.classList.toggle("active_nav");

}

//Para cerrar el menu de navegacion
function closeLinks() {
    menuNav.classList.remove("active_nav");
    
    barsMenuLine1.classList.toggle("active_bars_menu-line1");
    barsMenuLine2.classList.toggle("active_bars_menu-line2");
    barsMenuLine3.classList.toggle("active_bars_menu-line3");
}

//Para el modal de las certificaciones
const dialogCertifications = document.getElementById("dialogCertifications");
const certiButton = document.getElementById("certifications");
const closedialog = document.getElementById("closeCertifications");

certiButton.addEventListener("click", () => {
    dialogCertifications.style.display = "grid";
});

closedialog.addEventListener("click", () => {
    dialogCertifications.style.display = "none";
});