// Show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Show Menu if constant exist
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Mobile Menu
const navLink = document.querySelectorAll('.nav__link')

function LinkAction(){
    const navMenu = document.getElementById('nav-menu')
    // To remove the menu when we click on each nav link
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))

// Changing the background header
function scrollHeader(){
    const header = document.getElementById('header')
    // When scroll is greater than 100 vh add the scroll header class to the header
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Swiper Discover
var swiper = new Swiper('.discover__container', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 10,
    },
});