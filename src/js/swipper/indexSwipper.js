var swiperIndex = new Swiper(".mySwiperIndex", {
  slidesPerView: 'auto',
        spaceBetween: 76,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
  });