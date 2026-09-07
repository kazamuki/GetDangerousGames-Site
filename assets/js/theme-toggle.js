/*
 * Shared across Get Dangerous Games, Shadows RPG, and the Shadows Character
 * Sheet app. Keep in sync across the three repos.
 *
 * Wires up every [data-theme-toggle] button: flips html[data-theme] between
 * "light" and "dark", persists the choice to localStorage, and keeps
 * aria-pressed in sync. Pairs with theme-init.js (which applies the stored
 * choice before first paint) and the tokens in theme.css.
 */
(function () {
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function applyPressedState(btn) {
    btn.setAttribute('aria-pressed', currentTheme() === 'light' ? 'true' : 'false');
  }

  var buttons = document.querySelectorAll('[data-theme-toggle]');
  buttons.forEach(applyPressedState);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* localStorage unavailable */ }
      buttons.forEach(applyPressedState);
    });
  });
})();
