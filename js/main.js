/* ==========================================================================
   PORTFOLIO WEB - JavaScript
   Animations au défilement, menu mobile et interactions
   ========================================================================== */

(function () {
  'use strict';

  // ---------- Menu mobile ----------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu mobile lors du clic sur un lien
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Mise en surbrillance du lien actif ----------
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  setActiveNavLink();

  // ---------- Apparition progressive au défilement ----------
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  // Déclencher une première fois pour les éléments déjà visibles
  revealOnScroll();

  // ---------- Indicateur de progression du défilement ----------
  function updateScrollProgress() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    let progressBar = document.getElementById('scroll-progress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'scroll-progress';
      progressBar.style.position = 'fixed';
      progressBar.style.top = '0';
      progressBar.style.left = '0';
      progressBar.style.height = '3px';
      progressBar.style.background = 'var(--color-accent)';
      progressBar.style.zIndex = '9999';
      progressBar.style.transition = 'width 0.1s ease';
      document.body.appendChild(progressBar);
    }
    progressBar.style.width = scrolled + '%';
  }

  window.addEventListener('scroll', updateScrollProgress);

  // ---------- Respect de prefers-reduced-motion ----------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    });
  }
})();