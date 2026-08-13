/* ============================================================
   Motion layer — GSAP + ScrollTrigger + SplitText + Lenis
   Every scroll effect lives here. Each init() is independent:
   delete one and the rest keep working. Nothing below is
   required for the content to be readable — motion is additive,
   and the whole layer is skipped under prefers-reduced-motion.
   ============================================================ */

(() => {
  'use strict';

  const root = document.documentElement;
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HAS_GSAP = typeof window.gsap !== 'undefined';
  const MOTION = HAS_GSAP && !REDUCED;

  if (!MOTION) root.classList.add('no-motion');
  if (HAS_GSAP) gsap.registerPlugin(ScrollTrigger, SplitText);

  let lenis = null;

  // Any DOM change that resizes/reflows a SplitText-tracked element (the
  // intro paragraph, via initTextReveal) can trigger SplitText's own
  // ResizeObserver *after* we've already refreshed ScrollTrigger — most
  // commonly because hiding/showing content changes the document height
  // enough to toggle the scrollbar, which shifts every element's available
  // width by its ~15px and re-triggers autoSplit. That silent re-split
  // invalidates whatever we just refreshed, with no follow-up to correct
  // it, which is what previously corrupted every ScrollTrigger position on
  // the page (start/end collapsing toward a degenerate near-zero range).
  // Call this after ANY layout-affecting change — not just on initial
  // load — so a settled second refresh always lands after that dust clears.
  //
  // (Tried adding a forced-repaint nudge here too, for a separate ghosting
  // issue on the Cases filters — toggling body transform/display to force
  // Chrome to recomposite. It didn't fix the ghosting, and toggling
  // display:none on <body> introduced a worse bug: it resets window.scrollY
  // to 0 as a side effect of removing the scrolling element from layout.
  // Backed both out; see initFilters for how that issue actually got
  // fixed — by not refreshing an already-active pin at all.)
  function refreshSettled() {
    if (!MOTION) return;
    setTimeout(() => { lenis?.resize(); ScrollTrigger.refresh(); }, 120);
  }

  /* ---------- Smooth scroll ---------- */
  function initSmoothScroll() {
    if (!MOTION || typeof Lenis === 'undefined') return;

    lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1,
      smoothWheel: true,
      touchMultiplier: 1.6
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  function scrollToTarget(target) {
    if (lenis) lenis.scrollTo(target, { offset: -70, duration: 1.2 });
    else target.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' });
  }

  /* ---------- 1. Banner: intro timeline + scroll split ---------- */
  function initBanner() {
    const banner = document.querySelector('[data-banner]');
    if (!banner || !MOTION) return;

    const top = banner.querySelector('[data-banner-top]');
    const btm = banner.querySelector('[data-banner-btm]');
    const media1 = banner.querySelector('[data-banner-media-1]');
    const media2 = banner.querySelector('[data-banner-media-2]');
    const text = banner.querySelector('[data-banner-text]');
    const radius = getComputedStyle(root).getPropertyValue('--radius').trim() || '20px';
    const closed = `inset(50% 50% 50% 50% round ${radius})`;
    const open = `inset(0% 0% 0% 0% round ${radius})`;

    // Entrance: the two halves of the name slide in from opposite sides
    // while the media blocks iris open from their centre.
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(top, { xPercent: -104 }, { xPercent: 0, duration: 1.4 }, 0)
      .fromTo(btm, { xPercent: 104 }, { xPercent: 0, duration: 1.4 }, 0)
      .fromTo(text, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.1 }, 0.3);

    // Media blocks are optional — the hero works as pure type without them.
    if (media1) tl.fromTo(media1, { clipPath: closed }, { clipPath: open, duration: 1.15 }, 0.2);
    if (media2) tl.fromTo(media2, { clipPath: closed }, { clipPath: open, duration: 1.15 }, 0.35);

    // On scroll the two lines pull apart — a full line-width of travel over the
    // hero, and a short scrub so the type tracks the wheel almost 1:1.
    const st = { trigger: banner, start: 'top top', end: 'bottom top', scrub: 0.4, invalidateOnRefresh: true };
    gsap.fromTo(top, { xPercent: 0 }, { scrollTrigger: st, xPercent: 100, ease: 'none' });
    gsap.fromTo(btm, { xPercent: 0 }, { scrollTrigger: st, xPercent: -100, ease: 'none' });
  }

  /* ---------- 2. Line-by-line text reveal (scrubbed) ---------- */
  const splits = [];

  function initTextReveal() {
    const blocks = document.querySelectorAll('[data-text-reveal]');
    if (!blocks.length) return;

    if (!MOTION) {
      blocks.forEach(b => b.classList.add('is-plain'));
      return;
    }

    blocks.forEach(block => {
      const target = block.querySelector('p') || block;
      const authored = target.innerHTML.split(/<br\s*\/?>/i).map(s => s.trim()).filter(Boolean);

      // Copy that authors its own line breaks wins over measuring: SplitText
      // finds lines by word boundaries, and Thai has almost no spaces, so it
      // lumps whole phrases into one "line" that then wraps inside itself.
      if (authored.length > 1) {
        const original = target.innerHTML;
        target.innerHTML = authored
          .map(line => `<span class="line">${line}<span class="line-fill" aria-hidden="true">${line}</span></span>`)
          .join('');

        const tween = gsap.to(target.querySelectorAll('.line-fill'), {
          clipPath: 'inset(0 0% 0 0)',
          ease: 'none',
          duration: 1.5,
          stagger: 1.5,
          scrollTrigger: { trigger: block, start: 'top 78%', end: 'bottom 45%', scrub: 0.8 }
        });

        splits.push({
          block,
          split: {
            revert() {
              tween.scrollTrigger?.kill();
              tween.kill();
              target.innerHTML = original;
            }
          }
        });
        return;
      }

      const split = SplitText.create(target, {
        type: 'lines',
        linesClass: 'line',
        autoSplit: true,
        onSplit(self) {
          // Each line gets a full-colour clone stacked on top of the dim
          // original; scrolling wipes the clone open from left to right.
          self.lines.forEach(line => {
            line.insertAdjacentHTML('beforeend', `<span class="line-fill">${line.innerHTML}</span>`);
          });

          return gsap.to(block.querySelectorAll('.line-fill'), {
            clipPath: 'inset(0 0% 0 0)',
            ease: 'none',
            duration: 1.5,
            stagger: 1.5,
            scrollTrigger: { trigger: block, start: 'top 78%', end: 'bottom 45%', scrub: 0.8 }
          });
        }
      });

      splits.push({ split, block });
    });
  }

  let refreshing = false;

  function refreshTextReveal() {
    if (!MOTION || refreshing || !splits.length) return;
    refreshing = true;

    // A language switch writes the new copy into a DOM that SplitText has
    // already rewritten, and revert() would then restore the OLD text. So:
    // revert first, re-apply the translation to the clean markup, re-split.
    splits.forEach(({ split }) => split.revert());
    splits.length = 0;
    I18N.apply(I18N.getLang());   // re-fires langchange; the guard swallows it
    refreshing = false;

    // Wait for fonts before re-splitting: Noto Sans Thai only starts loading
    // when the first Thai glyph appears, and splitting against the fallback
    // metrics groups two phrases onto a line that then wraps.
    // setTimeout rather than rAF — rAF is parked while the tab is hidden.
    const resplit = () => setTimeout(() => {
      initTextReveal();
      ScrollTrigger.refresh();
    }, 60);

    if (document.fonts?.ready) document.fonts.ready.then(resplit);
    else resplit();
  }

  /* ---------- 3. Generic reveal on enter ---------- */
  function initReveal() {
    const items = gsap.utils.toArray('[data-reveal]');
    if (!MOTION) return;

    items.forEach(el => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }

  /* ---------- 3b. Process cards: staggered entrance ----------
     Replaces the generic data-reveal on these 4 cards so they read as one
     connected sequence instead of fading in independently. */
  function initProcessTimeline() {
    const cards = gsap.utils.toArray('[data-process-cards] .card');
    if (!MOTION || !cards.length) return;

    gsap.fromTo(cards, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: .8, ease: 'power3.out', stagger: .15,
      scrollTrigger: { trigger: '[data-process-cards]', start: 'top 85%', once: true }
    });
  }

  /* ---------- 3b2. Experience timeline: line draws in with scroll ----------
     Not pinned — the fill just scrubs from 0 to full height as the
     timeline passes through the viewport. Uses clip-path (not
     transform: scaleY) — the same reveal technique as the band's
     iris-open circle, which is proven to render correctly everywhere. */
  function initTimelineFill() {
    const timeline = document.querySelector('[data-timeline]');
    const fill = document.querySelector('[data-timeline-fill]');
    if (!MOTION || !timeline || !fill) return;

    gsap.fromTo(fill,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)', ease: 'none',
        scrollTrigger: { trigger: timeline, start: 'top 75%', end: 'bottom 75%', scrub: true }
      }
    );
  }

  /* ---------- 3c. Cases: horizontal scroll pinned to vertical scroll ----------
     Desktop/hover only — pins .cases__pin (heading + filters + track, so
     they all stay locked together, not just the card row) for one row's
     worth of scroll distance and translates .cases__grid sideways to
     match. Touch devices keep the plain overflow-x swipe scroll from CSS. */
  function initCasesScroll() {
    const pinEl = document.querySelector('[data-cases-pin]');
    const scroller = document.querySelector('[data-cases-scroller]');
    const track = document.getElementById('casesGrid');
    if (!MOTION || !pinEl || !scroller || !track) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    const getDistance = () => Math.max(0, track.scrollWidth - scroller.clientWidth);
    // Measured once, while every card is still visible (the "All" filter is
    // the default state on load) — filtering down to a category with fewer
    // cards must NOT shorten how far the user has to scroll through this
    // section; that changing per filter felt inconsistent, and it was also
    // what caused "dead" empty scroll space when Lenis's cached scroll
    // limit didn't shrink/grow to match. Keeping the pin's own scroll
    // distance fixed sidesteps that whole class of bug rather than just
    // patching around it.
    const fullDistance = getDistance();
    // Pin just below the fixed site header, not under it.
    const getStart = () => `top ${getComputedStyle(root).getPropertyValue('--header-h').trim()}`;

    ScrollTrigger.create({
      trigger: pinEl, start: getStart,
      end: () => `+=${fullDistance}`,
      pin: true, scrub: .6, invalidateOnRefresh: true,
      // Track still only ever slides as far as its current (possibly
      // filtered-down) content actually needs — clamped to getDistance() —
      // it just may finish sliding before the fixed-length pin scroll ends,
      // rather than the pin's own length changing with it.
      onUpdate: self => gsap.set(track, { x: -Math.min(getDistance(), fullDistance * self.progress) })
    });
  }

  /* ---------- 4. Parallax media ---------- */
  function initParallax() {
    if (!MOTION) return;

    gsap.utils.toArray('[data-parallax]').forEach(el => {
      const trigger = el.closest('.case__media, .about__media') || el;
      gsap.fromTo(el, { yPercent: -12 }, {
        yPercent: 12, ease: 'none',
        scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }

  /* ---------- 5. Marquee that flips with scroll direction ---------- */
  function initMarquee() {
    document.querySelectorAll('[data-marquee]').forEach(el => {
      const track = el.querySelector('[data-marquee-track]');
      const group = track.querySelector('[data-marquee-group]');
      if (!track || !group) return;

      // Widen the group until it covers the viewport, then duplicate it once
      // so a -50% shift lands exactly back on the starting frame.
      const originals = [...group.children];
      let guard = 0;
      while (group.offsetWidth < window.innerWidth && guard++ < 12) {
        originals.forEach(node => group.append(node.cloneNode(true)));
      }
      track.append(group.cloneNode(true));

      if (!MOTION) return;

      const base = el.dataset.reverse === 'true' ? -1 : 1;
      const speed = 70; // px per second
      const loop = gsap.to(track, {
        xPercent: -50,
        ease: 'none',
        duration: group.offsetWidth / speed,
        repeat: -1
      });
      loop.totalProgress(0.5);
      loop.timeScale(base);

      // onUpdate fires on ~every scroll frame while this trigger is active —
      // spawning a tween in there was allocating a new GSAP tween 60x/sec
      // during scroll (that's the jank). Only react when direction flips.
      let lastDirection = 1;
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: self => (self.isActive ? loop.play() : loop.pause()),
        onUpdate: self => {
          if (self.direction === lastDirection) return;
          lastDirection = self.direction;
          gsap.to(loop, { timeScale: base * self.direction, duration: 0.45, overwrite: true });
        }
      });
    });
  }

  /* ---------- 6. Cursor follower ----------
     Two modes: a big labelled ring over case cards (the reference site's
     c-hover-element), and a small dot over every other interactive thing. */
  function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor || !MOTION || !window.matchMedia('(hover: hover)').matches) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.5, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.5, ease: 'power3' });
    let visible = false;

    window.addEventListener('pointermove', e => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (!visible) { visible = true; gsap.set(cursor, { opacity: 1 }); }
    }, { passive: true });

    const show = isCase => {
      cursor.classList.toggle('is-dot', !isCase);
      gsap.to(cursor, { scale: isCase ? 1 : 0.55, duration: 0.45, ease: 'power3.out' });
    };
    const hide = () => gsap.to(cursor, { scale: 0, duration: 0.35, ease: 'power3.out' });

    document.querySelectorAll('[data-hover-case]').forEach(el => {
      el.addEventListener('pointerenter', () => show(true));
      el.addEventListener('pointerleave', hide);
    });
    document.querySelectorAll('[data-hover]').forEach(el => {
      el.addEventListener('pointerenter', () => show(false));
      el.addEventListener('pointerleave', hide);
    });
  }

  /* ---------- 6c. Band contents: cards ride up ---------- */
  function initBandContents() {
    if (!MOTION) return;

    // Service cards ride up into their sticky slot as they enter.
    gsap.utils.toArray('.stack__item').forEach(item => {
      gsap.from(item.querySelector('.stack__card'), {
        y: 90, opacity: 0, ease: 'power3.out', duration: .9,
        scrollTrigger: { trigger: item, start: 'top 95%', once: true }
      });
    });
  }

  /* ---------- 6b. The green band opens out of a circle ---------- */
  function initBand() {
    const circle = document.querySelector('[data-band-circle-item]');
    if (!circle || !MOTION) return;

    // Same as the reference: the circle starts collapsed to a point and irises
    // open as its wrapper crosses the viewport.
    gsap.to(circle, {
      clipPath: 'inset(0% round 50%)', ease: 'none',
      scrollTrigger: {
        trigger: circle.parentElement,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });
  }

  /* ---------- 7. Header: hide on scroll down, active link ---------- */
  function initHeader() {
    const header = document.getElementById('header');
    const nav = document.getElementById('nav');
    const burger = document.getElementById('burger');
    if (!header) return;

    // The capsule's height is derived from its type, and the lang/theme pills
    // have to match it, so publish the measured value. (--header-h stays a
    // plain token — writing it here would pin the mobile header to the desktop
    // height, since the height is what we would be measuring.)
    const syncNavHeight = () => {
      if (nav && window.innerWidth > 900) {
        root.style.setProperty('--nav-h', `${Math.round(nav.offsetHeight)}px`);
      }
    };
    syncNavHeight();
    window.addEventListener('resize', syncNavHeight);
    if ('ResizeObserver' in window) new ResizeObserver(syncNavHeight).observe(nav);

    burger?.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });

    // In-page links go through Lenis so the easing matches the rest of the page.
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        nav.classList.remove('is-open');
        burger?.setAttribute('aria-expanded', 'false');
        scrollToTarget(target);
      });
    });

    if (!MOTION) return;

    // Past the fold the brand and CTA step aside; the nav capsule stays put.
    ScrollTrigger.create({
      start: 'top -60',
      end: 99999,
      onUpdate: self => header.classList.toggle('is-stuck', self.scroll() > 60)
    });

    document.querySelectorAll('.header__link').forEach(link => {
      const href = link.getAttribute('href');
      // Case-study pages point nav links at "../studio/index.html#work" — not
      // a valid selector, and section-highlighting is meaningless off-page anyway.
      if (!href.startsWith('#')) return;
      const section = document.querySelector(href);
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: self => link.classList.toggle('is-active', self.isActive)
      });
    });
  }

  /* ---------- 8. Theme toggle ---------- */
  function initTheme() {
    const btn = document.getElementById('themeToggle');
    btn?.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('studio-theme', next);
    });
  }

  /* ---------- 9. Work filters ---------- */
  function initFilters() {
    const buttons = document.querySelectorAll('.filter');
    const cases = document.querySelectorAll('.case');
    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.toggle('is-active', b === btn));
        const filter = btn.dataset.filter;

        // The Cases pin's own scroll distance is fixed (see
        // initCasesScroll) — filtering only changes which cards are
        // display:none inside the horizontally-scrolled track, which
        // never affects the page's vertical layout at all. Nothing here
        // needs ScrollTrigger.refresh(): every ScrollTrigger position on
        // the page (including the pin itself) is already unaffected by a
        // filter click, and calling refresh() on an *already-pinned*
        // trigger forces GSAP to briefly un-pin/re-pin it to remeasure —
        // that unpin/repin cycle mid-interaction, outside of an actual
        // scroll, is what was leaving stale/ghosted content on screen.
        cases.forEach(card => {
          const show = filter === 'all' || card.dataset.category === filter;
          card.classList.toggle('is-hidden', !show);
          if (show && MOTION) {
            gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .5, ease: 'power3.out' });
          }
        });
      });
    });
  }

  /* ---------- 10. Contact form (front-end only) ---------- */
  function initForm() {
    const form = document.getElementById('contactForm');
    const note = document.getElementById('formNote');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      form.querySelectorAll('.field').forEach(f => f.classList.remove('has-error'));

      if (!name || !validEmail || !message) {
        if (!name) form.name.closest('.field').classList.add('has-error');
        if (!validEmail) form.email.closest('.field').classList.add('has-error');
        if (!message) form.message.closest('.field').classList.add('has-error');
        note.textContent = I18N.t('form.errorNote');
        note.classList.remove('is-ok');
        return;
      }

      // No backend wired up yet — swap this for a fetch() to your endpoint.
      note.textContent = I18N.t('form.successNote');
      note.classList.add('is-ok');
      form.reset();
    });

    document.getElementById('resumeBtn')?.addEventListener('click', e => {
      e.preventDefault();
      alert(I18N.t('misc.resumeAlert'));
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    document.getElementById('year').textContent = new Date().getFullYear();

    initSmoothScroll();
    initHeader();
    initTheme();
    initFilters();
    initForm();
    initCursor();
    initBand();
    initBandContents();
    initMarquee();
    initParallax();
    initReveal();
    initProcessTimeline();
    initTimelineFill();
    initCasesScroll();
    initBanner();
    initTextReveal();

    window.addEventListener('langchange', refreshTextReveal);
    if (MOTION) {
      // window 'load' doesn't guarantee web fonts have finished swapping in —
      // Fontshare's stylesheet can still be applying Chillax/Switzer after
      // that fires, which reflows text and silently invalidates every
      // ScrollTrigger position on the page (most visibly: the band circle's
      // open/close trigger occasionally computed a degenerate near-zero
      // range and rendered permanently "open"). Worse, initTextReveal's
      // SplitText.create({ autoSplit: true }) watches its own elements via
      // ResizeObserver and silently re-splits (reflowing again) whenever the
      // font swap resizes them — which can land *after* a naive refresh here
      // and undo it. Match the same fonts.ready + settle-timeout pattern
      // refreshTextReveal already uses below, so this refresh runs after
      // that dust has settled instead of racing it.
      window.addEventListener('load', refreshSettled);
      if (document.fonts?.ready) document.fonts.ready.then(refreshSettled);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
