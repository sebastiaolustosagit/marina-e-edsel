document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initNav();
  initRsvpForm();
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
   RSVP — Confirmação de presença (Netlify Forms)
   ========================================== */

function initRsvpForm() {
  const form = document.querySelector('[data-rsvp-form]');
  if (!form) return;

  const feedback = form.querySelector('[data-rsvp-feedback]');
  const submitBtn = form.querySelector('.rsvp__submit');

  function showFeedback(type, msg) {
    if (!feedback) return;
    feedback.textContent = msg;
    feedback.classList.remove('success', 'error');
    feedback.classList.add('show', type);
  }

  function clearErrors() {
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    const nome = form.querySelector('#rsvp-nome');
    const radios = form.querySelector('.rsvp__radios');
    const comparecimento = form.querySelector('input[name="comparecimento"]:checked');

    let valid = true;
    if (!nome.value.trim()) {
      nome.classList.add('error');
      valid = false;
    }
    if (!comparecimento) {
      radios.classList.add('error');
      valid = false;
    }
    if (!valid) {
      showFeedback('error', 'Por favor, preencha seu nome e diga se vai comparecer.');
      return;
    }

    // Grava no banco (Supabase) via Netlify Function — sem sair da página
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    const data = new FormData(form);
    const body = new URLSearchParams(data).toString();

    try {
      const res = await fetch('/.netlify/functions/rsvp-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) throw new Error('HTTP ' + res.status);
      renderSuccess(form, comparecimento.value);
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Confirmar Presença';
      showFeedback('error', 'Algo deu errado ao enviar. Por favor, tente novamente em instantes.');
    }
  });
}

function renderSuccess(form, comparecimento) {
  const veio = /^Sim/i.test(comparecimento);
  const wrap = document.createElement('div');
  wrap.className = 'rsvp__success';
  wrap.setAttribute('role', 'status');
  wrap.innerHTML = `
    <div class="rsvp__success-icon" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 16.5 L13.5 22 L24 10" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <h3 class="rsvp__success-title">${veio ? 'Presença confirmada!' : 'Recebemos sua resposta'}</h3>
    <p class="rsvp__success-text">${veio
      ? 'Que alegria! Mal podemos esperar para celebrar esse dia com você. 💛'
      : 'Obrigado por avisar. Sentiremos sua falta, mas agradecemos o carinho. 💛'}</p>
  `;
  form.replaceWith(wrap);
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
