const btnCallPopup = document.querySelector('.btn-popup-call')
let popupCallHeader = document.querySelector('.modal__background_form.call')
const btnClosePopupHead = document.querySelectorAll('.modal__close_svg')

btnCallPopup.onclick = function openPopupCall (){
    popupCallHeader.classList.remove('hidden')
    popupCallHeader.classList.add('active')
    document.body.style.overflow = 'hidden'
}
btnClosePopupHead.forEach(elem =>{
    elem.addEventListener('click', e =>{
        popupCallHeader.classList.add('hidden')
        popupCallHeader.classList.remove('active')
        document.body.style.overflow = 'visible'
    })
})