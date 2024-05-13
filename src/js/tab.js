const tabContainer = document.querySelector('.tab__two_container')
const tabs = document.querySelectorAll('.tab__two')

tabContainer.addEventListener('click', (event) => {
    let target = event.target
    tabs[0].classList.remove('active')
    tabs[1].classList.remove('active')
    target.classList.add('active')
})


