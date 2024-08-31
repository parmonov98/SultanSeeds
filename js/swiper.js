let swiper;

function initializeSwiper() {
  const direction = window.innerWidth <= 768 ? "horizontal" : "vertical";

  swiper = new Swiper(".swiper-container", {
    direction: direction,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: () => {
        current.textContent = (swiper.realIndex + 1)
          .toString()
          .padStart(2, "0");
        total.textContent = slideCount.toString().padStart(2, "0");
      },
    },
  });
}

// Swiper'ni birinchi marta ishga tushirish
initializeSwiper();

// Ekran o'lchami o'zgarganda Swiper'ni qayta ishga tushirish
window.addEventListener("resize", () => {
  swiper.destroy(true, true); // Avvalgi Swiper instance'ini yo'q qiladi
  initializeSwiper(); // Yangi parametrlar bilan Swiper'ni qayta yaratadi
});

const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".swiper-slide");
const current = document.querySelector(".current");
const total = document.querySelector(".total");
const slideCount = slides.length;
current.textContent = (swiper.realIndex + 1).toString().padStart(2, "0");
total.textContent = slideCount.toString().padStart(2, "0");
