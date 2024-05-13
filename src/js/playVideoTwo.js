const plVideoBtnSvg = document.querySelectorAll('.implemented__column-two_svg')

plVideoBtnSvg.forEach(elem =>{
    elem.addEventListener('click', e=>{
        elem.parentElement.classList.add('active')
    })
})