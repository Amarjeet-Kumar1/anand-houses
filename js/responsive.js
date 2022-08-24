burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
Rightnav = document.querySelector('.Right-nav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav')
    navlist.classList.toggle('opacity0')
    Rightnav.classList.toggle('opacity0')
    
})