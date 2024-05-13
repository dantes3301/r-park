const accardeonItem = document.querySelectorAll('.accardeon__question_visability')

accardeonItem.forEach(Elem =>{
    Elem.addEventListener('click', e =>{
        Elem.classList.toggle('active')
        // Elem.lastElementChild.classList.toggle('active')
    })
})