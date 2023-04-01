const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;
const stickyClass = 'sticky';

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navbarHeight) {
    navbar.classList.add(stickyClass);
  } else {
    navbar.classList.remove(stickyClass);
  }
});

