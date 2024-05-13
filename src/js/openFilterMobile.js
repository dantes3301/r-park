
const Filter = document.querySelector('.fiter-mobile')

document.querySelector('.openFilter').onclick = () => {
    Filter.classList.add('active')
    document.body.style.overflow = 'hidden'
}
document.querySelector('.closeFilter').onclick = () => {
    Filter.classList.remove('active')
    document.body.style.overflow = 'visible'
}