burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navContent = document.querySelector('.navContent')
rightNav = document.querySelector('.rightNav')
 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navContent.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})