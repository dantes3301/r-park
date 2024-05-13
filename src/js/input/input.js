
const formButton = document.querySelectorAll('.button__green')
const inputEmail = document.querySelectorAll('.custom__input.email')
const inputName = document.querySelectorAll('.custom__input.name')
const phone = document.querySelectorAll('.custom__input.phone')
const inputCheckbox = document.querySelectorAll('.checkbox__input')

inputName.forEach(elem => {
    elem.addEventListener('input', e =>{
        if (elem.value == '' || elem.value.length + 1 <= 2){
            elem.classList.remove('active')
            elem.classList.add('error') 
        }
        else if(elem.value != '' && elem.value.length + 1 >= 2){
            elem.classList.remove('error') 
            elem.classList.add('active')
        }
        console.log(elem.value.length);
    })
})
    
inputEmail.forEach(elem => {
    elem.addEventListener('input', e =>{
        if (elem.value == '' || elem.value.length + 1 <= 5 || elem.value.indexOf("@") == -1 || elem.value.indexOf(".") == -1 ){
            elem.classList.remove('active')
            elem.classList.add('error') 
        }
        else if(elem.value != '' && elem.value.length + 1 >= 5){
            elem.classList.remove('error') 
            elem.classList.add('active')
        }
        console.log(elem.value.length);
    })
})
    
// function phoneinp () {
//     console.log(phone.value.length);
//     if (phone.value.length < 18){
//     phone.classList.add('active')
//     return false
// }
//     else if (phone.value.length == 18){
//         phone.classList.remove('active')
//     }
// }
phone.forEach(elem =>{
    elem.addEventListener('input', e =>{
        if (elem.value.length < 18){
            elem.classList.remove("active")
            elem.classList.add("error")
        }
        else{
            elem.classList.remove("error")
            elem.classList.add("active")
        }
    })
})
// phone.addEventListener('input', e =>{
//     if (phone.value.length < 18){
//         phone.classList.remove("active")
//         phone.classList.add("error")
//     }
//     else{
//         phone.classList.remove("error")
//         phone.classList.add("active")
//     }
// })


window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.custom__input.phone'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

function inputNameFunc (){
    inputName.forEach(elem => {
                if (elem.value == '' || elem.value.length + 1 <= 2){
                    elem.classList.remove('active')
                   elem.classList.add('error') 
                }
                else if(elem.value != '' && elem.value.length + 1 >= 2){
                    elem.classList.remove('error') 
                    elem.classList.add('active')
                }
        })
}
function inputPhoneFunc(){
    phone.forEach(elem =>{
        if (elem.value.length < 18){
            elem.classList.remove('active')
            elem.classList.add('error')
        }
        else{
            elem.classList.remove('error')
            elem.classList.add('active')
        }
    })
}
function inputEmailFunc() {
    inputEmail.forEach(elem => {
                if (elem.value == '' || elem.value.length + 1 <= 5 || elem.value.indexOf("@") == -1 || elem.value.indexOf(".") == -1 ){
                    elem.classList.remove('active')
                   elem.classList.add('error') 
                }
                else if(elem.value != '' && elem.value.length + 1 >= 5){
                    elem.classList.remove('error') 
                    elem.classList.add('active')
                }
    })
}

function inputCheckboxFunc (){
    inputCheckbox.forEach(elem =>{
        elem.addEventListener('input', e=>{
            if (elem.checked === true){
                elem.classList.remove('error')
            }
        })
        if (elem.checked === false){
            elem.classList.add('error')
        }
    })
}

// document.querySelectorAll('input').forEach(elem => {
//     elem.addEventListener('input', e =>{
//         elem.classList.remove('active')
//         elem.classList.remove('error') 
//     })
//     elem.addEventListener('click', e =>{
//         elem.classList.remove('active')
//         elem.classList.remove('error') 
//     })
// })
formButton.forEach(elem =>{
    elem.onclick = () => {

        inputNameFunc()
        inputPhoneFunc()
        inputEmailFunc()
        inputCheckboxFunc()
    }
})

