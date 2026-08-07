/* Instrumented — sheet behaviour
   Three jobs only: reveal on scroll, track the active section in the rail,
   and toggle the spec overlay. */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. Reveal ------------------------------------------------------- */
  var revealTargets = document.querySelectorAll('[data-section], .plate, .step');

  function revealAll() {
    revealTargets.forEach(function (el) { el.classList.add('is-in'); });
  }

  if (reduced || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var observerReported = false;

    var revealer = new IntersectionObserver(function (entries) {
      observerReported = true;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        revealer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    revealTargets.forEach(function (el) { revealer.observe(el); });

    // If the observer never reports — background tab, non-compositing embed,
    // an extension that stubs it out — show everything rather than a blank sheet.
    window.setTimeout(function () {
      if (observerReported) return;
      revealer.disconnect();
      revealAll();
    }, 1500);
  }

  /* ---- 2. Rail position ------------------------------------------------ */
  var railLinks = document.querySelectorAll('.rail-link');
  var sections = document.querySelectorAll('[data-section]');

  function setActive(name) {
    railLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.dataset.rail === name);
    });
  }

  if ('IntersectionObserver' in window) {
    var tracker = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.dataset.section);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { tracker.observe(section); });
  }

  /* ---- 3. Spec view ---------------------------------------------------- */
  var toggle = document.getElementById('specToggle');

  function setSpec(on) {
    document.body.dataset.spec = on ? 'on' : 'off';
    toggle.setAttribute('aria-pressed', String(on));
  }

  toggle.addEventListener('click', function () {
    setSpec(document.body.dataset.spec !== 'on');
  });

  // "S" toggles the overlay, unless the user is typing in a field.
  document.addEventListener('keydown', function (event) {
    if (event.key !== 's' && event.key !== 'S') return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    var tag = (event.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || event.target.isContentEditable) return;
    setSpec(document.body.dataset.spec !== 'on');
  });
})();
