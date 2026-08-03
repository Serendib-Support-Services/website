/*
  Serendib Support Services — motion layer
  ---------------------------------------------------------------------------
  A small, reusable GSAP setup driving calm entrance and scroll-reveal
  animation. Elements opt in via data-animate attributes in the HTML:

    data-animate="hero"          stagger-fades the direct children in on load
    data-animate="hero-media"    single fade + gentle scale-in on load
    data-animate="fade-up"       fade + move up as the section enters view
    data-animate="stagger"       fade + move up each direct child, staggered
    data-animate="image-reveal"  soft fade + scale reveal for photos/media

  Reliability:
    - If GSAP fails to load (CDN blocked, offline, etc.) every animated
      element is revealed instantly — content never depends on JS/GSAP.
    - If the user has requested reduced motion, the same instant reveal
      happens and no scroll/hover animation is registered.
    - html.js-anim (added synchronously in <head>, before first paint) is
      what lets CSS pre-hide animated elements without a flash of content
      for users who *do* get the animation — see styles.css section 27.
*/
(function () {
  "use strict";

  var root = document.documentElement;

  var HIDDEN_SELECTOR =
    '[data-animate="fade-up"], [data-animate="hero-media"], ' +
    '[data-animate="image-reveal"], [data-animate="stagger"] > *, ' +
    '[data-animate="hero"] > *';

  function revealInstantly() {
    var els = document.querySelectorAll(HIDDEN_SELECTOR);
    for (var i = 0; i < els.length; i++) {
      els[i].style.opacity = "1";
      els[i].style.transform = "none";
    }
    root.classList.remove("js-anim");
  }

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // No GSAP (CDN blocked/offline) — fall back to a fully visible, static page.
  if (typeof window.gsap === "undefined") {
    revealInstantly();
    return;
  }

  // Respect the user's OS-level motion preference.
  if (prefersReducedMotion) {
    revealInstantly();
    return;
  }

  var gsap = window.gsap;
  var hasScrollTrigger = !!window.ScrollTrigger;
  if (hasScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);
  }

  // Pull shared timing/distance values from the CSS design system so the
  // motion feels consistent with the rest of the site and stays in one place.
  var css = getComputedStyle(root);
  function cssNumber(name, fallback) {
    var n = parseFloat(css.getPropertyValue(name));
    return isNaN(n) ? fallback : n;
  }

  var DISTANCE = cssNumber("--motion-distance", 20); // px, fade-up travel
  var DUR_FAST = 0.4; // hover micro-interactions only — kept snappy on purpose
  var DUR_BASE = 0.85; // fade-up / stagger items
  var DUR_SLOW = 1.2; // hero media / image reveals
  var EASE_STANDARD = "power3.out";
  var EASE_SOFT = "power2.out";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    animateHero();
    animateSectionReveals();
    animateStaggerGroups();
    animateImageReveals();
    setupHoverMicroInteractions();
  });

  // NOTE: every tween below uses gsap.fromTo() with an EXPLICIT end state,
  // rather than gsap.from(). gsap.from() infers its "to" values from the
  // element's current computed style — but that style is already opacity:0
  // (set by the .js-anim CSS hook, so there's no load-in flash). Reading an
  // already-hidden element as the resting state would animate 0 -> 0, i.e.
  // nothing would ever appear. fromTo() sidesteps that entirely.

  // ---- Page-load entrance: hero text/CTA stagger + hero media fade-in ----
  function animateHero() {
    var hero = document.querySelector('[data-animate="hero"]');
    if (hero) {
      var items = hero.children;
      if (items.length) {
        gsap.fromTo(
          items,
          { opacity: 0, y: DISTANCE },
          {
            opacity: 1,
            y: 0,
            duration: DUR_BASE,
            ease: EASE_STANDARD,
            stagger: 0.16,
            delay: 0.2,
          }
        );
      }
    }

    var media = document.querySelector('[data-animate="hero-media"]');
    if (media) {
      gsap.fromTo(
        media,
        { opacity: 0, y: DISTANCE, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: DUR_SLOW,
          ease: EASE_STANDARD,
          delay: 0.4,
        }
      );
    }
  }

  // ---- Subtle section reveals as users scroll ----
  function animateSectionReveals() {
    var sections = document.querySelectorAll('[data-animate="fade-up"]');
    sections.forEach(function (section) {
      gsap.fromTo(
        section,
        { opacity: 0, y: DISTANCE },
        {
          opacity: 1,
          y: 0,
          duration: DUR_BASE,
          ease: EASE_STANDARD,
          scrollTrigger: hasScrollTrigger
            ? { trigger: section, start: "top 85%", once: true }
            : undefined,
        }
      );
    });
  }

  // ---- Gentle staggered reveals for card grids / step groups ----
  function animateStaggerGroups() {
    var groups = document.querySelectorAll('[data-animate="stagger"]');
    groups.forEach(function (group) {
      var items = group.children;
      if (!items.length) return;
      gsap.fromTo(
        items,
        { opacity: 0, y: DISTANCE },
        {
          opacity: 1,
          y: 0,
          duration: DUR_BASE,
          ease: EASE_STANDARD,
          stagger: 0.12,
          scrollTrigger: hasScrollTrigger
            ? { trigger: group, start: "top 85%", once: true }
            : undefined,
        }
      );
    });
  }

  // ---- Soft image / media reveal ----
  function animateImageReveals() {
    var media = document.querySelectorAll('[data-animate="image-reveal"]');
    media.forEach(function (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: DISTANCE, scale: 1.02 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: DUR_SLOW,
          ease: EASE_STANDARD,
          scrollTrigger: hasScrollTrigger
            ? { trigger: el, start: "top 85%", once: true }
            : undefined,
        }
      );
    });
  }

  // ---- Calm hover micro-interaction (a touch smoother than a CSS
  // transform transition alone, and kept on the same easing system as the
  // scroll reveals above) — a very small icon lift, nothing bouncy. ----
  function setupHoverMicroInteractions() {
    var icons = document.querySelectorAll(
      ".service-card .icon-squircle, .audience-card .icon-circle"
    );
    icons.forEach(function (icon) {
      icon.style.transformOrigin = "50% 50%";
      var grow = gsap.quickTo(icon, "scale", {
        duration: DUR_FAST * 0.6,
        ease: EASE_SOFT,
      });
      icon.addEventListener("mouseenter", function () {
        grow(1.06);
      });
      icon.addEventListener("mouseleave", function () {
        grow(1);
      });
    });
  }
})();
