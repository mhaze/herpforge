function hydrateSection(section) {
  var tpl = section.querySelector('noscript[type="text/html"]');
  if (!tpl) return;

  // Insert deferred HTML
  section.innerHTML = tpl.textContent || '';

  // Swap data-src -> src for images & iframes
  section.querySelectorAll('img[data-src]').forEach(function (img) {
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  });
  section.querySelectorAll('iframe[data-src]').forEach(function (fr) {
    fr.loading = 'lazy';
    fr.src = fr.dataset.src;
    fr.removeAttribute('data-src');
  });
}

export function initLazy() {
  var sections = Array.from(document.querySelectorAll('[data-lazy]'));
  if (!sections.length) return;

  // No IO? Hydrate all at once
  if (!('IntersectionObserver' in window)) {
    sections.forEach(hydrateSection);
    return;
  }

  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      hydrateSection(e.target);
      obs.unobserve(e.target);
    });
  }, { rootMargin: '300px 0px' });

  sections.forEach(function (s) { io.observe(s); });
}
