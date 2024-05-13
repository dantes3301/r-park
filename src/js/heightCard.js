const swipperPosition = document.querySelector('.comleted__swipper')
window.addEventListener('scroll', e => {
  if((swipperPosition.offsetTop - swipperPosition.offsetHeight) < window.scrollY ){
    console.log(1);
    function setMaxHeight() {
 
      let els = document.querySelectorAll(".swiper-slide"),
        arr = [];
        /* Итерация каждого элемента и добавление их высоты в массив arr*/
      for (let i = 0; i < els.length; i++) {
        arr.push({ height: els[i].clientHeight });
      }
    /* Вывод самой длинной высоты элементов */
      let elsMaxHeight = Math.max(...arr.map(o => o.height));
    /* Присваивание полученной высоты для всех других элементов */
      for (let i = 0; i < els.length; i++) {
        els[i].style.height = elsMaxHeight + 'px'
      }
    }
    setMaxHeight();
  }
})

