let swiperOptions = {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
},
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction" },
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button" },
};

let swiper = new Swiper(".swiper-container", swiperOptions);

