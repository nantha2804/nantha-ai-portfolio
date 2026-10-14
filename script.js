const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.querySelector('.back-to-top');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  projectCards.forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
}));

window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 500));
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
