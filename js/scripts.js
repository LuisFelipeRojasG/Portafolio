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


//Para el slider de las certificaciones

new Swiper('.card-wrapper', {

    loop: true,
    spaceBetween: 30,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 0.7,
        slideShadows: true,
    },
  
    // Pagination points
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints: {
        
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 3,
        },
    }
  
});






