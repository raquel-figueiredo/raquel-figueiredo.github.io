// Minimal, dependency-free mobile nav toggle.
// Respects keyboard use and updates aria-expanded for screen readers.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('open');
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close the menu after a nav link is activated.
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape for keyboard users.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeNav();
      toggle.focus();
    }
  });

  // Keep state sane if the viewport is resized back to desktop.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) closeNav();
  });
})();
