/*
 * Mobile nav disclosure. Below the header's mobile breakpoint (see
 * .nav-toggle in main.css) the primary nav collapses behind a menu button;
 * this wires up that button. Above the breakpoint the button is hidden and
 * the nav is always visible, so none of this has any effect there.
 */
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('[data-nav-toggle]');
  if (!header || !toggle) return;

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('nav-open'));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (header.classList.contains('nav-open') && !header.contains(e.target)) setOpen(false);
  });
})();
