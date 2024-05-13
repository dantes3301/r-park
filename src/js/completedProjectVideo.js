const btnVideoPlay = document.querySelector('.olimpic__play-image')

btnVideoPlay.onclick = () =>{
    document.querySelector('.modal__background').classList.add('active')
    document.body.style.overflow = 'hidden'
}
document.querySelector('.modal-video__close_svg').onclick = () =>{
    document.querySelector('.modal__background').classList.remove('active')
    document.body.style.overflow = 'visible'
}
