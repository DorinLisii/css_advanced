$(document).ready(function() {
  $('.js-advanced-select').select2();
});

tippy('.js-tooltip', {
  content: 'This is advanced CSS!',
});

tippy('.js-tooltip', {
  content: document.querySelector('.js-tooltip-menu'),
  allowHTML: true,
  interactive: true,
  trigger: 'click',
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    768:{
      slidesPerView: 2
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});