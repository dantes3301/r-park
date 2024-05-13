const btnFastPopup = document.querySelectorAll('[data-modal]')
const popupContact = document.querySelectorAll('.modal__background_form.contact')
const popupCall = document.querySelector('.modal__background_form.call')
const btnClosePopup = document.querySelectorAll('.modal__close_svg')

btnFastPopup.forEach(elem =>{
    elem.addEventListener('click', e =>{
        console.log(elem.dataset.id);
        let modalFormContact = document.getElementById(elem.dataset.modal)
        modalFormContact.classList.remove('hidden')
        modalFormContact.classList.add('active')

        document.body.style.overflow = 'hidden'
    })
})

btnClosePopup.forEach(elem =>{
    elem.addEventListener('click', e =>{
        for(let i = 0; i < popupContact.length; i++){
            popupContact[i].classList.add('hidden')
            popupContact[i].classList.remove('active')
        }
        document.body.style.overflow = 'visible'
    })
})
