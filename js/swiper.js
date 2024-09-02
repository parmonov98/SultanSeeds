let swiper;

function initializeSwiper() {
  const direction = window.innerWidth <= 768 ? "horizontal" : "vertical";

  const progressCircle = document.querySelector(".swiper-progress");
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
  });
}

// Swiper'ni birinchi marta ishga tushirish
initializeSwiper();
const timerEnd = document.querySelector("#fraction .total");
const timerStart = document.querySelector("#fraction .current");
const progressThumb = document.querySelector(".swiper-progress");

let counter = 0;
timerEnd.innerHTML = `05`;

setInterval(() => {
  counter++;
  timerStart.innerHTML = `0${counter}`;
  progressThumb.style.height = `${20 * counter}%`;


  if (counter === 5) {
    counter = 0;
  }
}, 1000);
