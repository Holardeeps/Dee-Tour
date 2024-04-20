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

// =============Video================//
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        // Play Video
        videoFile.play()

        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else{
        // pause Video
        videoFile.pause()

        // We change the icon back to play
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo(){
    // When video ends the icon changes
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

videoFile.addEventListener('ended', finalVideo)

// Show Scroll Up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When scroll is higher than 200 viewport  height add the show scroll
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

// Scroll Active Link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)