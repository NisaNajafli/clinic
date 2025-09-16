const mobileMenu = document.getElementById('mobileOffcanvasTop'); // yeni id
const hamburgerIcon = document.querySelector('.icon-hamburger');
const closeIcon = document.querySelector('.icon-close');

mobileMenu.addEventListener('shown.bs.offcanvas', () => {
  hamburgerIcon.classList.add('d-none');
  closeIcon.classList.remove('d-none');
});

mobileMenu.addEventListener('hidden.bs.offcanvas', () => {
  closeIcon.classList.add('d-none');
  hamburgerIcon.classList.remove('d-none');
});



window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
  loop: false, // 👈 bunu false et
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    768: { slidesPerView: 1 },
    1200: { slidesPerView: 2 }
  }
});
});