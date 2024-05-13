const catalogTabs = document.querySelectorAll('.tab')
let catalogTabsActiveNum = 0

catalogTabs.forEach(elem => {
    elem.addEventListener('click', e=>{
        if (elem.classList.contains('active')) {
            catalogTabs[0].classList.remove('active')
            elem.classList.remove('active')
        }
        else{
            elem.classList.add('active')

        }
        if (elem.classList.contains('active')) {
            catalogTabsActiveNum++
            if (catalogTabsActiveNum === catalogTabs.length-1){
                catalogTabs[0].classList.add('active')
                // catalogTabsActiveNum = 0
                if(catalogTabs[0].classList.contains('active')){
                    catalogTabsActiveNum = catalogTabs.length-1
                }
            }
        }
        else{
            catalogTabsActiveNum--
        }
        console.log(catalogTabsActiveNum);
    })
})
catalogTabs[0].addEventListener('click', e =>{
    if (catalogTabs[0].classList.contains('active')){
        for(let i = 0; i < catalogTabs.length; i++){
            catalogTabs[0].classList.add('active')
            catalogTabs[i].classList.add('active')
        }
        catalogTabsActiveNum = catalogTabs.length-1
    }
    else{
        for(let i = 0; i < catalogTabs.length; i++){
            catalogTabs[0].classList.remove('active')
            catalogTabs[i].classList.remove('active')
            catalogTabsActiveNum = 0
        }
    }
})


