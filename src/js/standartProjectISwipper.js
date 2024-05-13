let swipperPagginationItem = document.querySelectorAll('.standardProject__swipper-paggination-item')
let swipperItemActiveContainer = document.querySelector('.standardProject__swipper-item-active')
const swipperBtnNext = document.querySelector('.btn.next')
const swipperBtnProv = document.querySelector('.btn.prev')
const scrollBtn = document.querySelector('.btn__scroll-bottom')
const scrollItems = document.querySelector('.standardProject__swipper-paggination')
let i = 0
// swipperPagginationItem.forEach(item =>{
//     item.addEventListener('click', e =>{
//         // swipperItemActiveContainer.append(item.firstElementChild);
//         // swipperItemActiveContainer.insertBefore(item.firstElementChild)
//         // console.log(item.firstElementChild);
//         swipperItemActiveContainer.firstElementChild.src = item.firstElementChild.src
//     })
// })
for(let r = 0; r < swipperPagginationItem.length; r++){
    swipperPagginationItem[r].addEventListener('click', e =>{
        swipperItemActiveContainer.firstElementChild.src = swipperPagginationItem[r].firstElementChild.src
        i = r
    })
}

swipperBtnNext.onclick = function () {
    i++
    if(i == swipperPagginationItem.length){
        i = 0
    }

    swipperItemActiveContainer.firstElementChild.src = swipperPagginationItem[i].firstElementChild.src

}
swipperBtnProv.onclick = function () {
    i--
    if(i == -1){
        i = swipperPagginationItem.length - 1
        console.log(swipperPagginationItem.length - 1);
    }
    console.log(i);
    swipperItemActiveContainer.firstElementChild.src = swipperPagginationItem[i].firstElementChild.src
}
scrollBtn.onclick = function() {
    scrollItems.scrollTop += 100
}




