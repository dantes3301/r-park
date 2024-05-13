const requestPriceBtn = document.querySelectorAll('.btn.btn__background_green.request-price')
const requestPriceModal = document.querySelector('.modal__background_form.modal__request-price')
const inpHidden = document.querySelector('.input-hidden-value')

requestPriceBtn.forEach(elem =>{
    elem.onclick = function qwe (event){
        requestPriceModal.classList.add('active')
        document.body.style.overflow = 'hidden'
        inpHidden.value = event.target.closest('div.card__info').firstElementChild.textContent
        console.log(inpHidden.value);
    }
})
document.querySelectorAll('.modal__close_svg').forEach(elem =>{
    elem.addEventListener('click', e =>{
        requestPriceModal.classList.remove('active')
        document.body.style.overflow = 'visible'
    })
})