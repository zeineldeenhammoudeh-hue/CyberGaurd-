const boot = document.getElementById('boot');
window.addEventListener('load', () => {
  window.setTimeout(() => boot?.classList.add('hide'), 850);
});
// Keep all content readable even when intersection animations are unavailable.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => nav?.classList.toggle('solid', window.scrollY > 60), { passive: true });
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile-nav');
menu?.addEventListener('click', () => {
  const opened = mobile?.classList.toggle('open') ?? false;
  menu.setAttribute('aria-expanded', String(opened));
});
mobile?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobile.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('downloadBtn')?.addEventListener('click', () => {
  alert('CyberGuard for Windows is coming soon. The download will be enabled after the final build is tested.');
});
document.querySelectorAll('details').forEach(item => item.addEventListener('toggle', () => {
  if (item.open) document.querySelectorAll('details').forEach(other => { if (other !== item) other.open = false; });
}));
