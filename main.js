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
