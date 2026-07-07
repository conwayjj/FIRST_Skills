// That ONE Team — Training Hub :: header nav behavior
// Mobile menu toggle + click-to-open dropdowns (hover already works via CSS
// for pointer devices; this adds touch/keyboard support).
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.tot-header');
    var toggle = document.querySelector('.tot-nav__toggle');
    if (header && toggle) {
      toggle.addEventListener('click', function () {
        var open = header.classList.toggle('tot-header--nav-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    document.querySelectorAll('.tot-nav__item').forEach(function (item) {
      var link = item.querySelector('.tot-nav__link');
      var dropdown = item.querySelector('.tot-nav__dropdown');
      if (!link || !dropdown) return;
      link.addEventListener('click', function (e) {
        if (window.matchMedia('(max-width: 900px)').matches) {
          e.preventDefault();
          item.classList.toggle('tot-nav__item--open');
          dropdown.style.display = item.classList.contains('tot-nav__item--open') ? 'block' : 'none';
        }
      });
    });
  });
})();
