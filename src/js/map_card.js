const mark = document.querySelectorAll('[data-id]')
const map = document.querySelector('.companu__leader_map')

// const markCard = document.querySelectorAll('.map_card_container')
// markCard.forEach(elem => {
//     elem.classList.remove('active')
// })
mark.forEach(elem => {
    elem.addEventListener('mouseover', function (event) {
        const mapCoords = map.getBoundingClientRect()

        const markCards = document.querySelectorAll('.map_card_container')
        markCards.forEach(e => e.classList.contains('active') && e.classList.remove('active'))
        const markCoords = event.target.getBoundingClientRect()

        const modal = document.getElementById(elem.dataset.id);
        modal.classList.add('active')
        const modalCoords = modal.getBoundingClientRect()

        const paddingWidth = (document.documentElement.clientWidth - mapCoords.width) / 2

        const left = markCoords.x - (paddingWidth <= 0 ? 0 : paddingWidth) + (markCoords.width - modalCoords.width) / 2
        const top = -(mapCoords.y - markCoords.y) - modalCoords.height - 20

        modal.style.left = `${left}px`;
        modal.style.top = `${top}px`;
    })
})