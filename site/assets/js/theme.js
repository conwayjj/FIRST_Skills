// That ONE Team — Training Hub :: night/day mode toggle
// The initial theme is applied synchronously by an inline snippet in each
// page's <head> (before first paint, so there's no flash of the wrong
// theme). This file only has to inject the toggle button and wire clicks.
(function () {
  var STORAGE_KEY = 'tot-theme';

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var mount = document.querySelector('.tot-header__utility-right');
    if (!mount) return;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tot-theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.title = 'Toggle dark mode';
    btn.innerHTML =
      '<svg class="tot-theme-toggle__sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>' +
      '<svg class="tot-theme-toggle__moon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

    btn.addEventListener('click', function () {
      setTheme(isDark() ? 'light' : 'dark');
    });

    mount.insertBefore(btn, mount.firstChild);
  });
})();
