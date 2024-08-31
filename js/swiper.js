const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  // If we need pagination
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 5000, // 5 soniyada bir o'tadi (5000 millisekund)
    disableOnInteraction: false, // Foydalanuvchi o'zi slaydni o'tkazganda autoplay to'xtamaydi
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChange: () => {
      current.textContent = (swiper.realIndex + 1).toString().padStart(2, "0");
      total.textContent = slideCount.toString().padStart(2, "0");
    },
  },
});

const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".swiper-slide");
const current = document.querySelector(".current");
const total = document.querySelector(".total");
const slideCount = slides.length;
current.textContent = (swiper.realIndex + 1).toString().padStart(2, "0");
total.textContent = slideCount.toString().padStart(2, "0");
