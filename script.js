document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

function animateCount(el) {
  const target = parseFloat(el.dataset.countTo);
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function animateBar(el) {
  const value = el.dataset.value;
  requestAnimationFrame(() => { el.style.width = value + '%'; });
}

function onReveal(el) {
  el.classList.add('is-visible');
  el.querySelectorAll('.stat-value[data-count-to]').forEach(animateCount);
  if (el.classList.contains('stat-tile')) {
    const stat = el.querySelector('.stat-value[data-count-to]');
    if (stat) animateCount(stat);
  }
  el.querySelectorAll('.bar-fill[data-value]').forEach(animateBar);
}

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onReveal(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => onReveal(el));
}
