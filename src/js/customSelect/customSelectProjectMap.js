
const selectCityHead = document.querySelector('.city_custom_select_head');
const selectCityItems = document.querySelector('.city_custom_select_body');
const selectCityItem = document.querySelectorAll('.custom__select_city_item');

selectCityHead.onclick = () => {
    selectCityItems.classList.toggle('active');
    selectCityItem.forEach(elem =>{
        elem.addEventListener('click', e =>{
            console.log(document.getElementById('city'));
            selectCityHead.firstElementChild.textContent = elem.textContent
            selectCityItems.classList.remove('active');
        })
    })
}