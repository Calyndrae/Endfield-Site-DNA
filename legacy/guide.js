const mobileToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.nav-wrap');
mobileToggle?.addEventListener('click', () => {
  const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
  mobileToggle.setAttribute('aria-expanded', String(!expanded));
  mobileNav.classList.toggle('open', !expanded);
});
document.querySelectorAll('.sidebar a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav?.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
  });
});
const chapterLinks = [...document.querySelectorAll('.nav-group a[href^="#"]')];
const chapterObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting)
    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
  if (!visible.length) return;
  const current = `#${visible[0].target.id}`;
  chapterLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === current));
}, {rootMargin: '-8% 0px -72% 0px'});
document.querySelectorAll('.handbook-chapter').forEach(chapter => chapterObserver.observe(chapter));
document.querySelectorAll('[data-replay]').forEach(button => button.addEventListener('click', () => {
  const demo = button.parentElement.querySelector('.demo-stage,.demo-loader,.demo-divider');
  if (!demo) return;
  demo.classList.remove('replaying');
  void demo.offsetWidth;
  demo.classList.add('replaying');
}));
document.querySelectorAll('.demo-filter-trigger').forEach(button => button.addEventListener('click', () => {
  const root = button.closest('.demo-filter');
  const open = root.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
}));
