const inputFound = document.querySelector('.custom__input.custom__input_found')
const btnRemoveText = document.querySelector('.btn-remove-text')
const inputOptions = document.querySelector('.menu__found-options')

btnRemoveText.onclick = () =>{
    inputFound.value = ''
    inputOptions.firstElementChild.innerText = inputFound.value
    inputOptions.classList.remove('active')
    btnRemoveText.classList.remove('active')
}
inputFound.addEventListener('input', e =>{
    inputOptions.firstElementChild.innerText = inputFound.value
    inputOptions.classList.add('active')
    btnRemoveText.classList.add('active')
    if(inputFound.length < 1 ){
        console.log(1);
        btnRemoveText.classList.remove('active')
    }
})
document.body.onclick = () =>{
    inputOptions.classList.remove('active')
}