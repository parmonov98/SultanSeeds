let swiper;
const autoplayDelay = 5000; // Swiperning autoplay delay vaqti
let timerInterval;

function initializeSwiper() {
  const direction = window.innerWidth <= 768 ? "horizontal" : "vertical";

  swiper = new Swiper(".swiper-container", {
    direction: direction,
    spaceBetween: 20,
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      init: function () {
        updateProgressBar();
        // startTimer();
      },
      slideChangeTransitionStart: function () {
        updateProgressBar();
      },
      slideChangeTransitionEnd: function () {
        updateProgressBar();
      },
    },
  });

  // slide count
  swiper.on("slideChange", function () {
    // Joriy slayd indeksini olish
    const currentSlide = swiper.activeIndex;
    // Jami slaydlar sonini olish
    const totalSlides = swiper.slides.length;

    // Hozirgi slaydni ko‘rsatish
    document.querySelector("#fraction .current").textContent = `0${
      (currentSlide % totalSlides) + 1
    }`;
    // Jami slaydlar sonini ko‘rsatish
    document.querySelector("#fraction .total").textContent = `0${totalSlides}`;

    if (currentSlide + 1 === totalSlides) {
      setInterval(() => {
        swiper.slideTo(0);
      }, autoplayDelay);
    }
  });
}

function updateProgressBar() {
  let progressBars = document.querySelectorAll(".swiper-progress-bar");
  progressBars.forEach(function (bar) {
    bar.classList.remove("animate");
    bar.classList.remove("active");
  });
  if (progressBars.length > 0) {
    progressBars[0].classList.add("active");
    setTimeout(() => {
      progressBars[0].classList.add("animate");
    }, 100); // delay to ensure "active" class is applied before "animate"
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function handleMouseEnter() {
  swiper.autoplay.stop();
  stopTimer();
  updateProgressBar();
}

function handleMouseLeave() {
  swiper.autoplay.start();
  updateProgressBar();
}

let swiperContainer = document.querySelector(".swiper-container");
swiperContainer.addEventListener("mouseenter", handleMouseEnter);
swiperContainer.addEventListener("mouseleave", handleMouseLeave);

// Swiper'ni birinchi marta ishga tushirish
initializeSwiper();
