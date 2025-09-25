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

const mainButton = document.getElementById('main-button');

mainButton.addEventListener('click', function () {
  this.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    768: { slidesPerView: 1 },
    1200: { slidesPerView: 3 }
  }
});
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  function reveal() {
    const trigger = window.innerHeight * 0.85;
    items.forEach(item => {
      if (item.getBoundingClientRect().top < trigger) {
        item.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", reveal);
  reveal();
});
document.getElementById('year').textContent = new Date().getFullYear();