document.addEventListener("DOMContentLoaded", function () {

  const coverflowElement = document.querySelector(".coverflowSwiper");

  if (!coverflowElement) return;

  new Swiper(".coverflowSwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    grabCursor: true,
    loop: true,

    coverflowEffect: {
      rotate: 0,
      stretch: -40,
      depth: 250,
      modifier: 1.2,
      slideShadows: false,
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    speed: 800,
  });

});