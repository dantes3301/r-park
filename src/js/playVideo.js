const playVideoBtnSvg = document.querySelectorAll('.reviews_video_svg')
const videoContainer = document.querySelector('.reviews_video')

playVideoBtnSvg.onclick = () =>{
    videoContainer.classList.add('active')
}
playVideoBtnSvg.forEach(elem =>{
    elem.addEventListener('click', e =>{
        elem.parentElement.classList.add('active')
    })
})