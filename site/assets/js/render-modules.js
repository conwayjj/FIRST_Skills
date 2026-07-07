// That ONE Team — Training Hub :: renders window.TOT_MODULES (data/modules.js)
// into any element with [data-tot-modules-grid].
(function () {
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function cardHref(mod) {
    if (mod.status === 'available' && mod.href) return mod.href;
    var params = new URLSearchParams({ title: mod.title, category: mod.category });
    return 'site/modules/template.html?' + params.toString();
  }

  function renderCard(mod) {
    var comingSoon = mod.status !== 'available';
    return (
      '<a class="tot-card tot-card--interactive tot-module-card" href="' + cardHref(mod) + '">' +
        '<div class="tot-module-card__badges">' +
          '<span class="tot-badge tot-badge--soft">' + escapeHtml(mod.category) + '</span>' +
          (comingSoon ? '<span class="tot-badge tot-badge--warning tot-badge--sm">Coming Soon</span>' : '') +
        '</div>' +
        '<h3 class="tot-module-card__title">' + escapeHtml(mod.title) + '</h3>' +
        '<p class="tot-module-card__body">' + escapeHtml(mod.summary) + '</p>' +
        '<span class="tot-module-card__cta">' + (comingSoon ? 'Preview Template →' : 'Open Module →') + '</span>' +
      '</a>'
    );
  }

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.querySelector('[data-tot-modules-grid]');
    if (!grid || !window.TOT_MODULES) return;
    grid.innerHTML = window.TOT_MODULES.map(renderCard).join('');
  });
})();
