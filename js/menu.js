// Efeito de rolagem do Header
const siteHeader = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

// Controle do Menu Mobile Integrado
const customMenuToggle = document.getElementById('menu-toggle');
const customMobilePanel = document.getElementById('mobile-panel');
customMenuToggle.addEventListener('click', () => {
  customMobilePanel.classList.toggle('open');
});