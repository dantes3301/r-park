let modalTask = document.querySelectorAll('.company__task_img')
let openModal = document.querySelector('.modal__background')
let imageContainer = document.querySelector('.modal__image_container')
let imageContainerTwo = document.getElementById('img')
let svgClose = document.querySelectorAll('.modal__close_svg')
let certificate = document.querySelectorAll('.company__certificate')
let ImageSourse = document.querySelector('.image-sourse')


modalTask.forEach(task => {
    task.addEventListener('click', e =>{
        openModal.classList.add('active')
        document.body.style.overflow = 'hidden'
        console.log(task.firstElementChild.src);
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
        ImageSourse.src = cert.firstElementChild.src
    })
})