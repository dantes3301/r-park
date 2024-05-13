const btnAddValue = document.querySelector('.btn-add-value')
const formInpHidden = document.querySelector('.add-value-input')
const titleValue = document.querySelector('.standardProject__title')

btnAddValue.onclick = () =>{
    document.body.style.overflow = 'hidden'
    formInpHidden.classList.add('active')
    formInpHidden.querySelector('.input-hidden-value').value = titleValue.textContent
    console.log(formInpHidden.querySelector('.input-hidden-value'));
}
document.querySelectorAll('.modal__close_svg').forEach(elem =>{
    elem.addEventListener('click', e=>{
        document.body.style.overflow = 'visible'
        formInpHidden.classList.remove('active')
    })
})