let openModal = document.querySelector('.modal__background')
let imageContainer = document.querySelector('.modal__image_container')
let modalImage = document.querySelectorAll('.profit-park__image')
let ImageSourse = document.querySelector('.image-sourse')
let svgClose = document.querySelectorAll('.modal__close_svg')
let certificate = document.querySelectorAll('.company__certificate')

modalImage.forEach(task => {
    task.addEventListener('click', e =>{
        openModal.classList.add('active')
        document.body.style.overflow = 'hidden'
        ImageSourse.src = task.firstElementChild.src
    })
})
svgClose.forEach(elem =>{
    elem.addEventListener('click', e=>{
        openModal.classList.remove('active')
    document.body.style.overflow = 'visible'
    })
})
// svgClose.onclick = () => {
//     openModal.classList.remove('active')
//     document.body.style.overflow = 'visible'
// }
certificate.forEach(cert => {
    cert.addEventListener('click', e =>{
        openModal.classList.add('active')
        document.body.style.overflow = 'hidden'
        console.log(cert.firstElementChild.src);
        ImageSourse.src = cert.firstElementChild.src
    })
})
