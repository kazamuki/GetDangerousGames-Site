/*
 * Heartbeat for the "Play Shadows RPG" buttons.
 *
 * Every so often (about 90s, give or take 15s, never on a fixed beat) one
 * visible button gives a soft double pulse, a slight swell plus a brighter
 * glow, to draw the eye without nagging. It is not a loop.
 *
 * Mark a button with data-heartbeat="<priority>" and
 * data-heartbeat-glow="<rgba color>". When several are on screen only the
 * lowest number beats (the Home hero CTA is 1, the header CTA is 2), so two
 * buttons never pulse at the same moment.
 *
 * A beat is skipped when the tab is hidden, when no marked button is mostly
 * on screen, when the visitor is hovering or focused on it, or when they
 * prefer reduced motion. Uses the Web Animations API on `scale` and
 * `box-shadow`, so it never clashes with the CSS entrance animations
 * (those use opacity/translate).
 */
(function () {
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-heartbeat]'));
  if (!buttons.length || !('animate' in Element.prototype) || !('IntersectionObserver' in window)) return;

  var BASE_MS = 90000;
  var JITTER_MS = 15000;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var onScreen = new Set();
  var engaged = new Set();

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.intersectionRatio >= 0.75) onScreen.add(e.target);
      else onScreen.delete(e.target);
    });
  }, { threshold: [0, 0.75, 1] });

  buttons.forEach(function (btn) {
    io.observe(btn);
    btn.addEventListener('mouseenter', function () { engaged.add(btn); });
    btn.addEventListener('mouseleave', function () { engaged.delete(btn); });
    btn.addEventListener('focus', function () { engaged.add(btn); });
    btn.addEventListener('blur', function () { engaged.delete(btn); });
  });

  function pick() {
    var best = null;
    buttons.forEach(function (btn) {
      if (!onScreen.has(btn) || btn.offsetParent === null) return;
      var p = Number(btn.getAttribute('data-heartbeat')) || 99;
      if (!best || p < best.p) best = { btn: btn, p: p };
    });
    // If the preferred button is being hovered or focused, the visitor is
    // already looking at it, so skip this beat rather than pulse the other.
    return best && !engaged.has(best.btn) ? best.btn : null;
  }

  function beat(btn) {
    var rest = window.getComputedStyle(btn).boxShadow;
    var glow = btn.getAttribute('data-heartbeat-glow') || 'rgba(242, 201, 76, 0.6)';
    var peak = '0 0 30px 4px ' + glow;
    var settle = rest === 'none' ? '0 0 0 0 transparent' : rest;
    // Lub-dub: a swell, a small release, a second smaller swell, then rest.
    btn.animate([
      { scale: 1,     boxShadow: settle, offset: 0 },
      { scale: 1.06,  boxShadow: peak,   offset: 0.14 },
      { scale: 1.01,  boxShadow: settle, offset: 0.32 },
      { scale: 1.04,  boxShadow: peak,   offset: 0.46 },
      { scale: 1,     boxShadow: settle, offset: 1 }
    ], { duration: 1100, easing: 'ease-out' });
  }

  function schedule() {
    var delay = BASE_MS + (Math.random() * 2 - 1) * JITTER_MS;
    window.setTimeout(function () {
      if (!document.hidden && !reduced.matches) {
        var btn = pick();
        if (btn) beat(btn);
      }
      schedule();
    }, delay);
  }

  schedule();

  // Lets the beat be previewed from the console: window.__heartbeat()
  window.__heartbeat = function () { var btn = pick(); if (btn) beat(btn); return btn; };
})();
