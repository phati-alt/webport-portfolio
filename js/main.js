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
  // (Once tried adding a forced-repaint nudge here too, for a ghosting bug
  // on the since-removed Work filters — toggling body transform/display to
  // force Chrome to recomposite. It didn't fix the ghosting, and toggling
  // display:none on <body> introduced a worse bug: it resets window.scrollY
  // to 0 as a side effect of removing the scrolling element from layout.
  // Backed both out — don't reach for that trick here again.)
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
    //
    // Created only after the entrance timeline finishes (not immediately)
    // so it never fights the entrance tween for control of the same
    // xPercent property on the same elements. They used to be set up back
    // to back: harmless on first load (nothing scrolls during that first
    // 1.4s), but clicking the header logo to jump back to #home mid-visit
    // sends Lenis into a fast scroll-to right as the scroll-scrub trigger
    // is *also* live — the two competing for xPercent left the halves of
    // the wordmark stuck mid-slide instead of settling back together.
    tl.eventCallback('onComplete', () => {
      const st = { trigger: banner, start: 'top top', end: 'bottom top', scrub: 0.4, invalidateOnRefresh: true };
      gsap.fromTo(top, { xPercent: 0 }, { scrollTrigger: st, xPercent: 100, ease: 'none' });
      gsap.fromTo(btm, { xPercent: 0 }, { scrollTrigger: st, xPercent: -100, ease: 'none' });
    });
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
        // Not once:true — see the long comment on the same tradeoff in
        // initRail below. toggleActions defaults to 'play none none none',
        // so this still only *animates* once per downward pass; it just
        // doesn't permanently self-kill if that pass happens to land on a
        // stale trigger position.
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });
  }

  /* ---------- shared: light up nodes as a scrubbed line-fill reaches them ----------
     Used by both the Process rail and the Experience timeline below. The
     naive version of this (light node i once scroll progress crosses
     i/(count-1)) assumes the nodes sit evenly spaced right at the line's
     two ends, but the line actually runs the full length of its track
     while the nodes sit inset from both ends — some top padding before
     the first node, and trailing title/desc content after the last —
     so that assumption lit each node well before the visible line
     actually reached it. Measuring each node's real position against the
     line's own box instead keeps the two in sync regardless of spacing,
     and re-measures on every ScrollTrigger refresh (resize, font swap,
     breakpoint change) so it stays correct there too. */
  function lightNodesAlongLine(lineEl, nodeEls, itemEls, horizontal) {
    let fractions = nodeEls.map(() => 0);
    function measure() {
      const lineRect = lineEl.getBoundingClientRect();
      const start = horizontal ? lineRect.left : lineRect.top;
      const length = horizontal ? lineRect.width : lineRect.height;
      fractions = nodeEls.map(node => {
        const r = node.getBoundingClientRect();
        const center = horizontal ? r.left + r.width / 2 : r.top + r.height / 2;
        return length ? (center - start) / length : 0;
      });
    }
    measure();
    ScrollTrigger.addEventListener('refresh', measure);
    return progress => {
      itemEls.forEach((el, i) => el.classList.toggle('is-lit', progress >= fractions[i] - .002));
    };
  }

  /* ---------- 3b. Process rail: staggered entrance + scroll-drawn line ----------
     Replaces the old horizontal-scroll cards. Steps fade in as one
     connected sequence, the line between them draws in with scroll
     (clip-path — same technique as the Experience timeline, see
     initTimelineFill below), and each node lights up as the line reaches
     it. Finishes with a small looping arrow back to step one, drawn the
     same way, making the "this isn't actually linear" point visually. */
  function initRail() {
    const track = document.querySelector('[data-rail-track]');
    const fill = document.querySelector('[data-rail-fill]');
    const steps = gsap.utils.toArray('[data-rail-step]');
    if (!MOTION || !track || !fill || !steps.length) return;

    // Not once:true — a web-font swap partway through page load can
    // resize the SplitText-driven intro paragraph above this section
    // (SplitText's autoSplit watches its own elements via ResizeObserver
    // and silently re-splits/reflows whenever they resize), which shifts
    // every ScrollTrigger position below it on the page. If that reflow
    // lands in the narrow window between this trigger firing and the
    // later fonts.ready-triggered refresh correcting things, a once:true
    // trigger fires — and immediately self-kills — against a stale
    // position, and no later refresh can revive it: these steps stayed
    // permanently invisible. Dropping once:true removes that failure mode
    // entirely (toggleActions still defaults to 'play none none none', so
    // this only *animates* once per downward pass regardless).
    gsap.fromTo(steps, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: .7, ease: 'power3.out', stagger: .12,
      scrollTrigger: { trigger: track, start: 'top 85%' }
    });

    // The line itself switches orientation at the same sub-56.25em
    // breakpoint that stacks steps into a column (see .rail__line in
    // style.css) — row layout draws left-to-right, column layout draws
    // top-to-bottom, same as .timeline__line-fill below it. The clip-path
    // direction has to match whichever orientation is active, or the fill
    // just sits fully open/closed and never visibly scrubs.
    const isRailRow = window.matchMedia('(min-width: 56.26em)').matches;
    const line = document.querySelector('.rail__line');
    const nodes = gsap.utils.toArray('.rail__node', track);
    const updateLighting = lightNodesAlongLine(line, nodes, steps, isRailRow);
    gsap.fromTo(fill,
      { clipPath: isRailRow ? 'inset(0 100% 0 0)' : 'inset(0 0 100% 0)' },
      {
        clipPath: isRailRow ? 'inset(0 0% 0 0)' : 'inset(0 0 0% 0)', ease: 'none',
        scrollTrigger: {
          trigger: track, start: 'top 70%', end: 'bottom 60%', scrub: true,
          onUpdate: self => updateLighting(self.progress)
        }
      }
    );

    // Connectors between the flow notes — same scroll-drawn-stroke
    // construction as the loop arrow below, just smaller and inline.
    const flowArrowPaths = gsap.utils.toArray('[data-rail-flow-arrow]');
    const flowArrowHeads = gsap.utils.toArray('[data-rail-flow-arrow-head]');
    if (flowArrowPaths.length) {
      gsap.fromTo(flowArrowPaths,
        { strokeDashoffset: 105 },   // matches the CSS "hidden" value — see the comment there
        {
          strokeDashoffset: 0, ease: 'none', stagger: .25,
          scrollTrigger: { trigger: '.rail__flow', start: 'top 85%', end: 'bottom 65%', scrub: true }
        }
      );
      gsap.fromTo(flowArrowHeads,
        { opacity: 0 },
        {
          opacity: 1, ease: 'none', stagger: .25,
          scrollTrigger: { trigger: '.rail__flow', start: 'top 80%', end: 'bottom 60%', scrub: true }
        }
      );
    }

    const loop = document.querySelector('[data-rail-loop]');
    const loopPath = document.querySelector('[data-rail-loop-path]');
    if (loop && loopPath) {
      gsap.fromTo(loopPath,
        { strokeDashoffset: 105 },   // matches the CSS "hidden" value — see the comment there
        {
          strokeDashoffset: 0, ease: 'none',
          scrollTrigger: {
            trigger: loop, start: 'top 85%', end: 'bottom 65%', scrub: true,
            onUpdate: self => loop.classList.toggle('is-drawn', self.progress > .9)
          }
        }
      );
    }
  }

  /* ---------- 3b2. Experience timeline: line draws in with scroll ----------
     Not pinned — the fill just scrubs from 0 to full height as the
     timeline passes through the viewport. Uses clip-path (not
     transform: scaleY) — the same reveal technique as the band's
     iris-open circle, which is proven to render correctly everywhere.
     Each entry's node lights up as the fill reaches it — same mechanic as
     the Process rail above (initRail), reused here for a consistent feel
     between the two "connected line" sections. */
  function initTimelineFill() {
    const timeline = document.querySelector('[data-timeline]');
    const fill = document.querySelector('[data-timeline-fill]');
    const jobs = gsap.utils.toArray('[data-timeline] .job');
    if (!MOTION || !timeline || !fill) return;

    const line = document.querySelector('.timeline__line');
    const dots = gsap.utils.toArray('.job__dot', timeline);
    const updateLighting = lightNodesAlongLine(line, dots, jobs, false);
    gsap.fromTo(fill,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)', ease: 'none',
        scrollTrigger: {
          trigger: timeline, start: 'top 75%', end: 'bottom 75%', scrub: true,
          onUpdate: self => updateLighting(self.progress)
        }
      }
    );
  }

  /* ---------- 3c. Cases: horizontal scroll ----------
     Default/fallback (always on mobile, under reduced motion, or if GSAP
     never loads): [data-cases-pin] is a plain native overflow-x scroll
     container. Trackpad/touch swipe and the scrollbar already work with
     zero JS; the wheel listener below just adds one convenience for a
     plain vertical mouse wheel — scroll the cards sideways first, and
     only once they've run out (in whichever direction the gesture is
     going) let that same gesture fall through to scroll the page, instead
     of capturing every vertical wheel tick sideways forever with no way
     back to a normal page scroll.

     Enhanced (desktop + motion only): swaps that native scroll for a
     "tall wrapper + position:sticky inner + GSAP-scrubbed x" section —
     continued vertical scroll drives the track sideways with no separate
     gesture needed, same idea as a GSAP pin:true section but built from
     different, safer parts. pin:true (this section's original version,
     and a later retry with invalidateOnRefresh + function-based end/x
     specifically to dodge a stale-measurement bug) broke layout twice
     here — cards rendering above the header/heading instead of in
     document order, both times traced to GSAP's own pin-spacer mechanics.
     position:sticky is plain CSS the browser has always laid out
     correctly on its own, and driving x via a plain scrub (no pin) is the
     exact pattern already proven safe elsewhere on this page (the Process
     rail's and Career timeline's line-fills, both clip-path scrubs on the
     same kind of trigger). */
  function initCasesScroll() {
    const grid = document.getElementById('casesGrid');
    const pinEl = document.querySelector('[data-cases-pin]');
    const scrollEl = document.querySelector('[data-cases-scroll]');
    const track = pinEl || grid;
    if (!track) return;

    track.addEventListener('wheel', e => {
      // A horizontal gesture (trackpad swipe) already scrolls the track
      // natively — only take over a *vertical* wheel. In the enhanced
      // state .cases__pin is sticky (not scrollable), so this never fires
      // there — nothing to gate on scrollEnabled.
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return; // nothing to scroll horizontally at all

      const atEnd = track.scrollLeft >= maxScroll - 1;
      const atStart = track.scrollLeft <= 1;
      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
      // else: already at the end in this direction — let the event
      // through untouched so the page scrolls normally.
    }, { passive: false });

    // Enhanced state is desktop + motion only — same reasoning as the
    // rest of the site's width-gated behavior (the header nav capsule,
    // the custom cursor): a pinned/scrubbed section is a scroll-gesture
    // enhancement, not an upgrade, on a touchscreen where swiping the
    // track directly already feels native.
    if (!MOTION || !scrollEl || !pinEl || !grid || window.innerWidth < 900) return;

    document.querySelector('.cases').classList.add('cases--scroll-enhanced');

    // The wrapper's height has to exactly match pinEl's own rendered
    // height + however far the track needs to travel — too little and the
    // track gets cut off before it finishes scrubbing; too much and
    // there's dead scroll space after it's done, or the sticky element
    // stays stuck a beat after the track has already stopped moving.
    // Reading pinEl.offsetHeight directly (not assuming a fixed 100vh)
    // is what keeps this correct now that .cases__pin is max-height:100vh
    // and content-fit (header + cards) rather than a plain 100vh — the
    // wrapper has to match whatever height that content-fit actually
    // resolves to. Recomputed on every
    // ScrollTrigger refresh (resize, font swap, image load) rather than
    // once at setup, for the same reason invalidateOnRefresh matters
    // everywhere else in this file.
    function setHeight() {
      const extra = Math.max(0, grid.scrollWidth - pinEl.clientWidth);
      scrollEl.style.height = `${pinEl.offsetHeight + extra}px`;
    }
    setHeight();

    // end used to be the string 'bottom bottom' — fine while .cases__pin
    // was a plain 100vh, since "scrollEl's height minus the viewport's
    // height" and "scrollEl's height minus pinEl's own height" are the
    // same number when pinEl IS the viewport height. Now that pinEl is
    // capped shorter than 100vh on tall screens, those two stop being the
    // same number: CSS position:sticky itself unsticks based on pinEl's
    // own height (a plain browser fact, not something this file
    // controls), not the viewport's — so 'bottom bottom' finished the x
    // scrub before the sticky element had actually let go, leaving it
    // pinned in place, already fully scrolled, for an extra beat. Deriving
    // end the same way setHeight derives the wrapper's height (from
    // pinEl.offsetHeight, not viewport height) keeps the scrub and the
    // sticky's own natural unstick point landing on the same scroll pixel.
    //
    // headerH() folds in .cases__pin's top:var(--header-h) offset (see the
    // CSS comment on that rule): sticky's own unstick math shifts earlier
    // by exactly that offset once top isn't 0, so the same amount has to
    // come off this scrub distance to keep landing on the same pixel as
    // the sticky element's natural release point.
    const headerH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;
    gsap.fromTo(grid,
      { x: 0 },
      {
        x: () => -Math.max(0, grid.scrollWidth - pinEl.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollEl, start: 'top top',
          end: () => '+=' + (Math.max(0, grid.scrollWidth - pinEl.clientWidth) - headerH()),
          scrub: true, invalidateOnRefresh: true,
          onRefresh: setHeight
        }
      }
    );

    // setHeight() just grew the page by ~the track's own width in extra
    // scroll height — on a browser with a classic (space-taking, not
    // overlay) scrollbar, a page that was one instant away from not
    // needing a vertical scrollbar can cross that line right here, which
    // narrows the viewport by the scrollbar's width *after* pinEl.clientWidth
    // was already read above. That leaves the wrapper's height measured
    // against a viewport wider than the one the track will actually
    // scrub against, so the last stretch of cards never quite finishes
    // scrolling into place — a real gap at the end that a plain reload
    // doesn't reproduce (the scrollbar's already there by then), only a
    // fresh page that grows into needing one for the first time right on
    // this section. One more refresh, deferred a frame so the scrollbar's
    // actual on/off state has settled, re-measures against reality instead
    // of the pre-scrollbar guess.
    requestAnimationFrame(() => ScrollTrigger.refresh());

    // Confirmed by direct testing: resizing the viewport while scrolled
    // into this section (e.g. opening DevTools, which docks a panel and
    // narrows the page) does NOT get picked up on its own — pinEl.clientWidth
    // updates immediately (that's just the browser), but the track's x
    // transform and the wrapper's height both stay frozen at whatever they
    // were before the resize, so the track no longer lines up with the
    // now-different-width viewport it's supposed to fill exactly — a gap
    // or overshoot depending on which way the width changed. A manual
    // refresh() (confirmed to correctly recompute both when called) fixes
    // it instantly; it's just never being called for this case on its own,
    // so this does it explicitly. Debounced so a drag-resize doesn't
    // refresh on every intermediate pixel.
    let resizeT;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => ScrollTrigger.refresh(), 150);
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

      // Used to pause the loop via ScrollTrigger's onToggle while the
      // marquee was off-screen (a GPU/battery micro-optimization) and only
      // play() it once back in view. Reported not animating at all for at
      // least one real user with no console error and otherwise-normal
      // layout — nothing here reproduces the failure, but the play/pause
      // gate is the only thing that could keep it sitting at a paused
      // frame indefinitely, so it's removed: the loop now just always
      // plays, like it does everywhere else in the boot() sequence that
      // doesn't bother gating on visibility. Keep reversing direction to
      // match scroll direction (harmless, and only reacts on an actual
      // flip, not every scroll frame, so it isn't the jank the original
      // comment here was about).
      let lastDirection = 1;
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
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
    // Not once:true — see the long comment on this same tradeoff in
    // initRail: a once:true trigger that fires against a stale position
    // (font-swap reflow race) self-kills with no way to recover.
    gsap.utils.toArray('.stack__item').forEach(item => {
      gsap.from(item.querySelector('.stack__card'), {
        y: 90, opacity: 0, ease: 'power3.out', duration: .9,
        scrollTrigger: { trigger: item, start: 'top 95%' }
      });
    });
  }

  /* ---------- 6b. The green band opens out of a circle ---------- */
  function initBand() {
    const circle = document.querySelector('[data-band-circle-item]');
    if (!circle || !MOTION) return;

    // Same as the reference: the circle starts collapsed to a point and irises
    // open as its wrapper crosses the viewport. Keep the trigger's own
    // start/end untouched — .band__content's -130vw margin was tuned
    // against this exact range to close most of the dead-scroll gap after
    // the circle finishes opening (see its comment in style.css); shifting
    // these would throw that back off. Instead get "opens faster and
    // smoother" by shaping *how* clip-path moves across that same range:
    // power2.out front-loads the open (most of it happens early, rather
    // than linearly across the whole scroll — no more "straight line" feel)
    // and a lighter scrub value tracks the scroll position more snugly
    // (ease:'none' + scrub:1 was applying zero shaping on top of a full
    // second of lag, which read as slow and mechanical).
    gsap.to(circle, {
      clipPath: 'inset(0% round 50%)', ease: 'power2.out',
      scrollTrigger: {
        trigger: circle.parentElement,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: .35,
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

  /* ---------- 10. Resume button (placeholder until a real PDF exists) ---------- */
  function initResumeBtn() {
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
    initResumeBtn();
    initCursor();
    initBand();
    initBandContents();
    initCasesScroll();
    initMarquee();
    initParallax();
    initReveal();
    initRail();
    initTimelineFill();
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
