const tabs = document.querySelectorAll('.tab__two')
let catalogTabsActiveNum = 0


tabs.forEach(elem => {
    elem.addEventListener('click', e=>{
        if (elem.classList.contains('active')) {
            tabs[0].classList.remove('active')
            elem.classList.remove('active')
        }
        else{
            elem.classList.add('active')

        }
        if (elem.classList.contains('active')) {
            catalogTabsActiveNum++
            if (catalogTabsActiveNum === tabs.length-1){
                tabs[0].classList.add('active')
                if(tabs[0].classList.contains('active')){
                    catalogTabsActiveNum = tabs.length-1
                }
            }
        }
        else{
            catalogTabsActiveNum--
        }
        
        
    })
})
tabs[0].addEventListener('click', e =>{
    if (tabs[0].classList.contains('active')){
        for(let i = 0; i < tabs.length; i++){
            tabs[0].classList.add('active')
            tabs[i].classList.add('active')
        }
        catalogTabsActiveNum = tabs.length-1
    }
    else{
        for(let i = 0; i < tabs.length; i++){
            tabs[0].classList.remove('active')
            tabs[i].classList.remove('active')
            catalogTabsActiveNum = 0
        }
    }
})


