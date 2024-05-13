var swiper = new Swiper(".mySwiperIndexTwo", {
    spaceBetween: 30,
    centeredSlides: true,
    enabled: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.two",
      prevEl: ".swiper-button-prev.two",
    },
  });