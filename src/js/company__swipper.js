var swiperCompany = new Swiper(".mySwiperCompany", {
  slidesPerView: 2,
  spaceBetween: 30,
  enabled: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next-rev",
    prevEl: ".swiper-button-prev-rev",
  },
});
var swiperMobile = new Swiper(".mySwiperMobil", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});