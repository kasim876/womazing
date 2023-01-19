const scrollToSection = (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('href').substring(1);
  const headerHeight = document.querySelector('.js-header').getBoundingClientRect().height;
  const targetSection = document.querySelector(id);
  const posY = targetSection.getBoundingClientRect().top - headerHeight;

  window.scrollBy({
    top: posY,
    behavior: 'smooth',
  });
};

export default scrollToSection;