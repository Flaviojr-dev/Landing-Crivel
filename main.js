const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

// Botão de voltar ao topo
document.addEventListener("DOMContentLoaded", function() {
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Rolagem suave para seções ao clicar nos links do mapa do site no footer
  document.querySelectorAll('.footer-column-servicos ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      let href = link.textContent.trim().toLowerCase();
      let targetId = '';
      if (href.includes('quem somos')) targetId = 'quemsomos';
      else if (href.includes('nossos serviços')) targetId = 'servicos';
      else if (href.includes('diferenciais')) targetId = 'diferenciais';
      else if (href.includes('contato')) targetId = 'contato';
      if (targetId) {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});