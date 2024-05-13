const btnBurger = document.querySelector('.burger')
const btnCloseMobileMenu = document.querySelector('.mobile_menu-close')
const mobileMenu = document.querySelector('.header__mobile-menu')

btnBurger.onclick = function openMobileMenu (){
    mobileMenu.classList.add('active')
    document.body.style.overflow = 'hidden'
}
btnCloseMobileMenu.onclick = function closeMobileMenu (){
    mobileMenu.classList.remove('active')
    document.body.style.overflow = 'visible'
    
}