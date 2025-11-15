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
