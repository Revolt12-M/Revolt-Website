/* Revolt Financial — shared JS
   Intersection Observer reveal · nav scroll-state · mobile nav · stat counters.
   No analytics. No third-party. */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- 1. Scroll reveal ----------
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          var counter = e.target.matches('[data-counter]') ? e.target : e.target.querySelector('[data-counter]');
          if (counter && !counter.dataset.counted) runCounter(counter);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Stand-alone counters that aren't wrapped in [data-reveal]
  document.querySelectorAll('[data-counter]').forEach(function (el) {
    if (el.closest('[data-reveal]')) return;
    if ('IntersectionObserver' in window) {
      var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !el.dataset.counted) {
            runCounter(el);
            co.unobserve(el);
          }
        });
      }, { threshold: 0.4 });
      co.observe(el);
    } else {
      runCounter(el);
    }
  });

  function runCounter(el) {
    el.dataset.counted = '1';
    var raw = (el.getAttribute('data-counter') || el.textContent || '').trim();
    var match = raw.match(/^([^\d-]*)(-?[\d,\.]+)(.*)$/);
    if (!match) return;
    var prefix = match[1] || '';
    var numStr = match[2].replace(/,/g, '');
    var suffix = match[3] || '';
    var target = parseFloat(numStr);
    if (isNaN(target)) return;
    var hasDecimal = numStr.indexOf('.') !== -1;
    // A1: lock the box to the FINAL rendered width before animating so the
    // count-up can never grow/shrink the layout. Tabular figures keep each
    // digit the same width, so the value settles cleanly with no jitter.
    el.style.display = 'inline-block';
    el.style.fontVariantNumeric = 'tabular-nums';
    el.style.whiteSpace = 'nowrap';
    el.textContent = prefix + format(target, hasDecimal) + suffix;
    el.style.minWidth = Math.ceil(el.getBoundingClientRect().width) + 'px';
    if (prefersReduced) { return; }
    var dur = 1500, start = performance.now();
    function tick(now) {
      var t = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - t, 3);
      var v = target * eased;
      el.textContent = prefix + format(v, hasDecimal) + suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + format(target, hasDecimal) + suffix;
    }
    requestAnimationFrame(tick);
  }
  function format(n, dec) {
    if (dec) return n.toFixed(1);
    return Math.round(n).toLocaleString('en-US');
  }

  // ---------- 2. Nav scroll state ----------
  var nav = document.querySelector('.nav');
  if (nav) {
    var setState = function () {
      nav.setAttribute('data-scroll-state', window.scrollY > 80 ? 'scrolled' : 'top');
    };
    setState();
    window.addEventListener('scroll', setState, { passive: true });

    // ---------- 3. Mobile nav ----------
    var toggle = nav.querySelector('.nav__toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = nav.getAttribute('data-mobile-open') === 'true';
        nav.setAttribute('data-mobile-open', open ? 'false' : 'true');
        document.body.style.overflow = open ? '' : 'hidden';
      });
      nav.querySelectorAll('.nav__mobile a').forEach(function (a) {
        a.addEventListener('click', function () {
          nav.setAttribute('data-mobile-open', 'false');
          document.body.style.overflow = '';
        });
      });
    }
  }
})();
