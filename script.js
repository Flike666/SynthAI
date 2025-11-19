const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('a[href^="#"]');

navToggle?.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navbar.classList.remove('active');
  });
});

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const summary = `感谢提交，${data.name || '尊敬的用户'}！\n我们的团队会尽快与您联系。`;
  alert(summary);
  form.reset();
});

const tryBtn = document.querySelector('.try-btn');
const appOverlay = document.querySelector('.app-overlay');
const appClose = document.querySelector('.app-close');

const toggleOverlay = (visible) => {
  if (!appOverlay) return;
  appOverlay.classList.toggle('active', visible);
  document.body.classList.toggle('no-scroll', visible);
  appOverlay.setAttribute('aria-hidden', (!visible).toString());
};

tryBtn?.addEventListener('click', () => toggleOverlay(true));
appClose?.addEventListener('click', () => toggleOverlay(false));
appOverlay?.addEventListener('click', (event) => {
  if (event.target === appOverlay) toggleOverlay(false);
});

const moduleItems = document.querySelectorAll('.module-item');
const moduleTitle = document.querySelector('.module-detail-title');
const moduleDesc = document.querySelector('.module-detail-desc');
const moduleMetrics = document.querySelector('.module-detail-metrics');

if (moduleItems.length && moduleTitle && moduleDesc && moduleMetrics) {
  moduleItems.forEach((item) => {
    item.addEventListener('click', () => {
      moduleItems.forEach((button) => button.classList.remove('active'));
      item.classList.add('active');
      moduleTitle.textContent = item.dataset.title || moduleTitle.textContent;
      moduleDesc.textContent = item.dataset.desc || moduleDesc.textContent;
      moduleMetrics.textContent = item.dataset.metrics || moduleMetrics.textContent;
    });
  });
}
