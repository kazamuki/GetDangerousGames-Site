/*
 * Shared across Get Dangerous Games, Shadows RPG, and the Shadows Character
 * Sheet app. Keep in sync across the three repos.
 *
 * Sets html[data-theme] synchronously from localStorage, before any CSS
 * paints. Must stay a plain blocking <script> (no async/defer) placed
 * first in <head>, before the stylesheet <link> tags — that ordering is
 * what prevents a dark-then-light (or light-then-dark) flash on load.
 * localStorage is scoped per-origin, so this remembers a visitor's choice
 * on this site only — it can't sync a choice across separate domains.
 */
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {
    /* localStorage unavailable (privacy mode, etc.) — fall back to default dark theme */
  }
})();
