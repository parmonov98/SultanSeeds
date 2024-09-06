// let swiper;

// function initializeSwiper() {
//   const direction = window.innerWidth <= 768 ? "horizontal" : "vertical";

//   swiper = new Swiper(".swiper-container", {
//     direction: direction,
//     spaceBetween: 20,
//     autoplay: {
//       delay: 5000, // Avtomatik aylanishning kechikish vaqti 5000 millisekund (5 soniya)
//       disableOnInteraction: false, // Foydalanuvchi o'zaro ta'sir ko'rsatganda avtomatik aylanishni to'xtatmaydi
//     },
//     // speed: 5000,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     on: {
//       init: function () {
//         let progressBars = document.querySelectorAll(".swiper-progress-bar");
//         progressBars.forEach(function (bar) {
//           bar.classList.remove("animate");
//           bar.classList.remove("active");
//         });
//         if (progressBars.length > 0) {
//           progressBars[0].classList.add("animate");
//           progressBars[0].classList.add("active");
//         }
//       },
//       slideChangeTransitionStart: function () {
//         let progressBars = document.querySelectorAll(".swiper-progress-bar");
//         progressBars.forEach(function (bar) {
//           bar.classList.remove("animate");
//           bar.classList.remove("active");
//         });
//         if (progressBars.length > 0) {
//           progressBars[0].classList.add("active");
//         }
//       },
//       slideChangeTransitionEnd: function () {
//         let progressBars = document.querySelectorAll(".swiper-progress-bar");
//         if (progressBars.length > 0) {
//           progressBars[0].classList.add("animate");
//         }
//       },
//     },
//   });
// }

// // Swiper'ni birinchi marta ishga tushirish
// initializeSwiper();

// let swiperContainer = document.querySelector(".swiper-container");
// swiperContainer.addEventListener("mouseenter", function () {
//   swiper.autoplay.stop(); // Slayderning avtomatik aylanishini to'xtatadi
//   let progressBars = document.querySelectorAll(".swiper-progress-bar");
//   progressBars.forEach(function (bar) {
//     bar.classList.remove("animate"); // Progress barni animatsiya holatidan olib tashlaydi
//   });
// });

// swiperContainer.addEventListener("mouseleave", function () {
//   swiper.autoplay.start(); // Slayderning avtomatik aylanishini qayta boshlaydi
//   let progressBars = document.querySelectorAll(".swiper-progress-bar");
//   progressBars.forEach(function (bar) {
//     bar.classList.add("animate"); // Progress barni animatsiya holatiga o'tkazadi
//   });
// });

// const timerEnd = document.querySelector("#fraction .total");
// const timerStart = document.querySelector("#fraction .current");
// const progressThumb = document.querySelector(".swiper-progress");

// const autoplayDelay = swiper.params.autoplay.delay;

// let counter = 0;
// timerEnd.innerHTML = `05`;

// setInterval(() => {
//   counter++;
//   timerStart.innerHTML = `0${counter}`;

//   if (counter === 5) {
//     counter = 0;
//   }
// }, autoplayDelay / 5);

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

    console.log(swiper.activeIndex);

    // Hozirgi slaydni ko‘rsatish
    document.querySelector("#fraction .current").textContent =
      (currentSlide % totalSlides) + 1;
    // Jami slaydlar sonini ko‘rsatish
    document.querySelector("#fraction .total").textContent = totalSlides;

    console.log(swiper);

    if (currentSlide + 1 === totalSlides) {
      setInterval(() => {
        console.log("teng bo'ldi");
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

// function startTimer() {
//   const timerEnd = document.querySelector("#fraction .total");
//   const timerStart = document.querySelector("#fraction .current");
//   let counter = 0;
//   timerEnd.innerHTML = `05`;

//   timerInterval = setInterval(() => {
//     counter++;
//     timerStart.innerHTML = counter < 10 ? `0${counter}` : counter;

//     if (counter === 5) {
//       counter = 0;
//     }
//   }, autoplayDelay / 5);
// }

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
  startTimer();
  updateProgressBar();
}

let swiperContainer = document.querySelector(".swiper-container");
swiperContainer.addEventListener("mouseenter", handleMouseEnter);
swiperContainer.addEventListener("mouseleave", handleMouseLeave);

// Swiper'ni birinchi marta ishga tushirish
initializeSwiper();
