document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initNav();
  initYear();
});

/* ==========================================
   AOS — Animações scroll-triggered
   ========================================== */

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 400,
      once: true,
      offset: 20,
      easing: 'ease-out',
      anchorPlacement: 'top-bottom'
    });
  }
}

/* ==========================================
   NAV — Sticky + Hamburger Mobile
   ========================================== */

function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  const links = document.querySelectorAll('.nav__link');

  if (!nav || !toggle || !menu) return;

  // Overlay para fechar menu
  const overlay = document.createElement('div');
  overlay.classList.add('nav__overlay');
  document.body.appendChild(overlay);

  // Scroll — nav fica sólida
  function handleScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Toggle hamburger
  function toggleMenu() {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('nav__menu--open');
    overlay.classList.toggle('nav__overlay--visible');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('nav__menu--open');
    overlay.classList.remove('nav__overlay--visible');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Fechar menu ao clicar em link
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Fechar com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}

/* ==========================================
   PIX — Copiar chave
   ========================================== */

function copyPix() {
  const pixKey = document.getElementById('pix-key');
  if (!pixKey) return;

  const text = pixKey.textContent;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Chave PIX copiada!');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    showToast('Chave PIX copiada!');
  } catch (err) {
    showToast('Erro ao copiar. Copie manualmente.');
  }

  document.body.removeChild(textarea);
}

/* ==========================================
   TOAST — Feedback visual
   ========================================== */

function showToast(message) {
  // Remove toast anterior se existir
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('toast--visible');
  });

  // Remove após 3 segundos
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

/* ==========================================
   YEAR — Preenche ano no footer
   ========================================== */

function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
