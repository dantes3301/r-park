const selectCityHead = document.querySelector('.city_custom_select_head');
const selectCityItems = document.querySelector('.city_custom_select_body');
const selectParkHead = document.querySelector('.city_custom_select_head.two');
const selectParkItems = document.querySelector('.city_custom_select_body.two');
const selectCityItem = document.querySelectorAll('.custom__select_city_item');
const selectParkItem = document.querySelectorAll('.custom__select_park_item');
selectCityHead.onclick = () => {
    selectParkItems.classList.remove('active');
    selectCityItems.classList.toggle('active');
    selectCityItem.forEach(elem =>{
        elem.addEventListener('click', e =>{
            console.log(document.getElementById('city'));
            selectCityHead.firstElementChild.textContent = elem.textContent
            selectCityItems.classList.remove('active');
        })
    })
}
selectParkHead.onclick = () => {
    selectCityItems.classList.remove('active');
    selectParkItems.classList.toggle('active');
    selectParkItem.forEach(elem =>{
        elem.addEventListener('click', e =>{
            
            selectParkHead.firstElementChild.textContent = elem.textContent
            selectParkItems.classList.remove('active');
        })
    })
}