
const stdPjTabs = document.querySelectorAll('.tab_background-none')
const stdPjContent = document.querySelectorAll('.standardProject__info_columns')

// stdPjTabs.forEach(elem =>{
//     elem.addEventListener('click', e =>{
//         stdPjTabs[0].classList.remove('active')
//         elem.classList.add('active')
//     })
// })
for(let i = 0; i < stdPjTabs.length; i++){
    stdPjTabs[i].addEventListener('click', e =>{
        stdPjTabs[0].classList.remove('active')
        stdPjTabs[1].classList.remove('active')
        stdPjContent[0].classList.remove('active')
        stdPjContent[1].classList.remove('active')
        stdPjTabs[i].classList.add('active')
        stdPjContent[i].classList.add('active')
        // if(stdPjTabs[i].classList.add('active')){

        // }
    })
}