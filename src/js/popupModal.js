const openPopupModail = document.querySelector('.open__modal')
const popupModal = document.querySelector('.popup__modal')
const closePopupModal = document.querySelector('.modal__close_svg')
openPopupModail.onclick = function () {
    popupModal.classList.add('active')
    document.body.style.overflow = 'hidden'
}
document.querySelectorAll('.modal__close_svg').forEach(elem =>{
    elem.addEventListener('click', e=>{
        popupModal.classList.remove('active')
        document.body.style.overflow = 'visible'
    })
})
// closePopupModal.onclick = function () {
//     console.log(1);
//     popupModal.classList.remove('active')
//     document.body.style.overflow = 'visible'
// }