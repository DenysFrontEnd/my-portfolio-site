const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "",
  loop: true,
  // slidesPerView: 'auto',
  keyboard: {
    enabled: true,
  },
  // mousewheel: true,
  // autoplay: {
  //   enabled: true,
  //   delay: 2000,
  // },

  slidesPerView: 1,
  spaceBetween: 40,

  breakpoints: {
    850: {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: true,
    },
    1200: {
      slidesPerView: 3,
      loop: false,
    },
  },

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
    draggable: true,
    // dragSize: 300,
  },
});

// const sliderContainer = document.querySelector(".swiper-container");
// const desktopPortfolio = document.querySelector(".desktop-portfolio");
// console.log(sliderContainer);

// const hiddenSlider = () => {
//   // console.log(window.innerWidth);
//   if (window.innerWidth >= 1200) {
//     sliderContainer.classList.add("visually-hidden");
//   } else {
//     desktopPortfolio.classList.add("visually-hidden");
//   }
// };

// window.addEventListener("load", hiddenSlider);

// const hiddenSlider = () => {
//   if (window.innerWidth > 1200) {
//     sliderContainer.classList.add("hiddenPortfolio");
//     desktopPortfolio.classList.remove("hiddenPortfolio");
//     // sliderContainer.style.display = "none";
//     // desktopPortfolio.style.display = "flex";
//   } else {
//     sliderContainer.classList.remove("hiddenPortfolio");
//     desktopPortfolio.classList.add("hiddenPortfolio");
//     // sliderContainer.style.display = "flex";
//     // desktopPortfolio.style.display = "none";
//   }
// };

// window.addEventListener("resize", hiddenSlider);
