const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
