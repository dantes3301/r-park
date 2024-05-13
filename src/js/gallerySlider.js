const galleryImg = document.querySelectorAll('.perfect__gallery-column-img')
const galleryImgMain = document.querySelector('.gallery-image-main')
galleryImg.forEach(elem =>{
    elem.addEventListener('click', e =>{
        galleryImgMain.src = elem.firstElementChild.src
        console.log(elem.firstElementChild.src);
    })
})