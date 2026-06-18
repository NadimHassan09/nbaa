/**
 * Nabaa Educational Services — Production JavaScript
 * Mobile menu, scroll effects, animations, tracking
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     Constants & Config
     -------------------------------------------------------------------------- */
  const WHATSAPP_NUMBERS = {
    educational_consultant: '966593340572',
    company: '966593340572',
  };

  const WHATSAPP_BASE = {
    educational_consultant: `https://wa.me/${WHATSAPP_NUMBERS.educational_consultant}`,
    company: `https://wa.me/${WHATSAPP_NUMBERS.company}`,
  };

  const WHATSAPP_DEFAULT_TEXT = 'مرحباً نبأ، أرغب في الاستفسار عن الدراسة في ماليزيا';
  const TIKTOK_NAVIGATION_DELAY_MS = 200;
  const IS_DEV =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.search.includes('debug=1');

  const SELECTORS = {
    header: '#site-header',
    mobileMenuBtn: '#mobile-menu-btn',
    mobileMenu: '#mobile-menu',
    floatingWhatsApp: '#floating-whatsapp',
    statItems: '.stat-item',
    revealElements: '.reveal, .reveal-left, .section-title, .feature-card, .story-card, .pricing-card, .story-journey-card, .saudi-profile-card, .saudi-feature-card',
    timelineSteps: '.timeline-step, .timeline-mobile-step',
    hero: '#hero',
    finalCta: '#final-cta',
    navLinks: '.nav-link, .mobile-nav-link',
  };

  const OBSERVER_OPTIONS = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  };

  /* --------------------------------------------------------------------------
     Pixel Tracking Helpers
     -------------------------------------------------------------------------- */
  function logTracking(message) {
    if (IS_DEV) {
      console.log(message);
    }
  }

  function extractWhatsAppNumber(href) {
    if (!href) return '';
    const match = href.match(/wa\.me\/(\d+)/);
    return match ? match[1] : '';
  }

  function resolveWhatsAppType(link) {
    const explicitType = link.dataset.whatsappType;
    if (explicitType === 'educational_consultant' || explicitType === 'company') {
      return explicitType;
    }

    const phone = extractWhatsAppNumber(link.href);
    if (phone && phone === WHATSAPP_NUMBERS.educational_consultant && phone !== WHATSAPP_NUMBERS.company) {
      return 'educational_consultant';
    }
    if (phone && phone === WHATSAPP_NUMBERS.company) {
      return 'company';
    }

    return 'company';
  }

  function resolveTrackingLocation(link) {
    return (
      link.dataset.trackingLocation ||
      link.closest('section')?.id ||
      link.id ||
      'page'
    );
  }

  function trackFacebookLead(location, type) {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: location,
        content_category: type,
      });
    }
  }

  function trackEducationalConsultantLead(location) {
    if (typeof ttq !== 'undefined') {
      ttq.track('Lead', {
        source: 'educational_consultant',
        destination: 'whatsapp',
        content_name: location || 'unknown',
      });
    }
    logTracking('TikTok Lead Fired: educational_consultant');
    trackFacebookLead(location, 'educational_consultant');
  }

  function trackCompanyLead(location) {
    if (typeof ttq !== 'undefined') {
      ttq.track('Lead', {
        source: 'company_whatsapp',
        destination: 'whatsapp',
        content_name: location || 'unknown',
      });
    }
    logTracking('TikTok Lead Fired: company_whatsapp');
    trackFacebookLead(location, 'company_whatsapp');
  }

  function trackWhatsAppLead(type, location) {
    if (type === 'educational_consultant') {
      trackEducationalConsultantLead(location);
      return;
    }
    trackCompanyLead(location);
  }

  function navigateToWhatsApp(href) {
    window.setTimeout(() => {
      window.location.href = href;
    }, TIKTOK_NAVIGATION_DELAY_MS);
  }

  function handleWhatsAppLinkClick(event) {
    const link = event.currentTarget;
    const href = link.href;
    if (!href || !href.includes('wa.me')) return;

    event.preventDefault();

    const type = resolveWhatsAppType(link);
    const location = resolveTrackingLocation(link);

    trackWhatsAppLead(type, location);
    navigateToWhatsApp(href);
  }

  function initWhatsAppTracking() {
    document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
      link.addEventListener('click', handleWhatsAppLinkClick);
    });
  }

  window.trackEducationalConsultantLead = trackEducationalConsultantLead;
  window.trackCompanyLead = trackCompanyLead;
  window.trackWhatsAppLead = trackWhatsAppLead;

  /* --------------------------------------------------------------------------
     Utility Functions
     -------------------------------------------------------------------------- */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function getHeaderOffset() {
    const header = document.querySelector(SELECTORS.header);
    return header ? header.offsetHeight : 72;
  }

  /* --------------------------------------------------------------------------
     Mobile Menu
     -------------------------------------------------------------------------- */
  function initMobileMenu() {
    const btn = document.querySelector(SELECTORS.mobileMenuBtn);
    const menu = document.querySelector(SELECTORS.mobileMenu);
    if (!btn || !menu) return;

    function toggleMenu(forceClose) {
      const isOpen = forceClose === true ? false : !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', isOpen);
      menu.classList.toggle('hidden', !isOpen);
      btn.classList.toggle('is-active', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      btn.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    btn.addEventListener('click', () => toggleMenu());

    menu.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(true));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggleMenu(true);
        btn.focus();
      }
    });

    window.addEventListener('resize', debounce(() => {
      if (window.innerWidth >= 1024 && menu.classList.contains('is-open')) {
        toggleMenu(true);
      }
    }, 150));
  }

  /* --------------------------------------------------------------------------
     Smooth Scrolling Navigation
     -------------------------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const offset = getHeaderOffset();
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        });

        history.pushState(null, '', href);
        updateActiveNav(href);
      });
    });
  }

  function updateActiveNav(activeId) {
    document.querySelectorAll(SELECTORS.navLinks).forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === activeId);
    });
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateActiveNav('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* --------------------------------------------------------------------------
     Sticky Header Effects
     -------------------------------------------------------------------------- */
  function initStickyHeader() {
    const header = document.querySelector(SELECTORS.header);
    if (!header) return;

    const onScroll = debounce(() => {
      header.classList.toggle('header-scrolled', window.scrollY > 20);
    }, 10);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --------------------------------------------------------------------------
     Animated Counters
     -------------------------------------------------------------------------- */
  function animateCounter(element, target, duration) {
    if (prefersReducedMotion()) {
      element.textContent = target.toLocaleString('ar-SA');
      return;
    }

    const start = performance.now();
    const startValue = 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (target - startValue) * eased);
      element.textContent = current.toLocaleString('ar-SA');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toLocaleString('ar-SA');
      }
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const statItems = document.querySelectorAll(SELECTORS.statItems);
    if (!statItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const item = entry.target;
          if (item.classList.contains('counted')) return;

          item.classList.add('counted', 'is-visible');
          const numberEl = item.querySelector('.stat-number');
          const target = parseInt(item.dataset.target, 10) || 0;

          if (numberEl) {
            animateCounter(numberEl, target, 2000);
          }

          observer.unobserve(item);
        });
      },
      { threshold: 0.3 }
    );

    statItems.forEach((item) => observer.observe(item));
  }

  /* --------------------------------------------------------------------------
     Scroll Reveal Animations
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const elements = document.querySelectorAll(SELECTORS.revealElements);
    const staggerContainers = document.querySelectorAll('.stagger-children');

    if (prefersReducedMotion()) {
      elements.forEach((el) => el.classList.add('is-visible'));
      staggerContainers.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      OBSERVER_OPTIONS
    );

    elements.forEach((el) => {
      if (!el.classList.contains('reveal') && !el.classList.contains('reveal-left')) {
        el.classList.add('reveal');
      }
      observer.observe(el);
    });

    staggerContainers.forEach((container) => {
      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              staggerObserver.unobserve(entry.target);
            }
          });
        },
        OBSERVER_OPTIONS
      );
      staggerObserver.observe(container);
    });
  }

  /* --------------------------------------------------------------------------
     Hero Entrance Animations
     -------------------------------------------------------------------------- */
  function initHeroAnimations() {
    const hero = document.querySelector(SELECTORS.hero);
    if (!hero) return;

    if (prefersReducedMotion()) {
      hero.classList.add('hero-loaded');
      hero.querySelectorAll('.hero-image').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    requestAnimationFrame(() => {
      hero.classList.add('hero-loaded');
    });
  }

  /* --------------------------------------------------------------------------
     Timeline Animations
     -------------------------------------------------------------------------- */
  function initTimelineAnimations() {
    const steps = document.querySelectorAll(SELECTORS.timelineSteps);
    const journeySection = document.querySelector('#journey');

    if (!steps.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          steps.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('is-visible');
              step.style.opacity = '1';
            }, prefersReducedMotion() ? 0 : index * 100);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    if (journeySection) {
      observer.observe(journeySection);
    }
  }

  /* --------------------------------------------------------------------------
     Story Journey Cards
     -------------------------------------------------------------------------- */
  function initStoryJourney() {
    const cards = document.querySelectorAll('.story-journey-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible', 'reveal');
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      OBSERVER_OPTIONS
    );

    cards.forEach((card, index) => {
      card.classList.add('reveal');
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });
  }

  /* --------------------------------------------------------------------------
     Floating WhatsApp Interactions
     -------------------------------------------------------------------------- */
  function initFloatingWhatsApp() {
    const btn = document.querySelector(SELECTORS.floatingWhatsApp);
    if (!btn) return;

    let lastScroll = 0;
    let hideTimeout;

    window.addEventListener(
      'scroll',
      debounce(() => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 300) {
          btn.style.transform = 'scale(0.85)';
          btn.style.opacity = '0.7';
        } else {
          btn.style.transform = '';
          btn.style.opacity = '1';
        }

        lastScroll = currentScroll;

        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          btn.style.transform = '';
          btn.style.opacity = '1';
        }, 150);
      }, 50),
      { passive: true }
    );

    btn.addEventListener('mouseenter', () => {
      btn.style.animationPlayState = 'paused';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.animationPlayState = 'running';
    });
  }

  /* --------------------------------------------------------------------------
     Final CTA Animations
     -------------------------------------------------------------------------- */
  function initFinalCta() {
    const section = document.querySelector(SELECTORS.finalCta);
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('cta-loaded');
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }

  /* --------------------------------------------------------------------------
     Lazy Load Enhancement
     -------------------------------------------------------------------------- */
  function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) return;

    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => observer.observe(img));
  }

  /* --------------------------------------------------------------------------
     Summer Offers Pricing
     -------------------------------------------------------------------------- */
  const INSTITUTE_PRICING = {
    ems: {
      name: 'EMS Language Centre',
      prices: { 1: 3100, 2: 5450, 3: 7950, 6: 16000 },
    },
    sheffield: {
      name: 'Sheffield Academy',
      prices: { 1: 3350, 2: 5100, 3: 6300, 6: 16300 },
    },
    erican: {
      name: 'Erican Language Centre',
      prices: { 1: 2800, 2: 4100, 3: 5750, 6: 12900 },
    },
  };

  const DURATION_LABELS = {
    1: 'شهر',
    2: 'شهرين',
    3: '3 أشهر',
    6: '6 أشهر',
  };

  function formatPrice(amount) {
    return amount.toLocaleString('en-US');
  }

  function setActiveDuration(months) {
    const section = document.querySelector('#institutes');
    if (!section) return;

    section.querySelectorAll('.summer-offers__tab').forEach((tab) => {
      const active = tab.dataset.months === String(months);
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    section.querySelectorAll('.pricing-card').forEach((card) => {
      const institute = card.dataset.institute;
      const data = INSTITUTE_PRICING[institute];
      if (!data) return;

      const price = data.prices[months];
      const label = DURATION_LABELS[months];

      card.querySelector('.pricing-card__duration-label').textContent = label;
      card.querySelector('.pricing-card__amount').textContent = formatPrice(price);

      card.querySelectorAll('.pricing-duration').forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.months === String(months));
      });

      const link = card.querySelector('[data-book-link]');
      if (link) {
        const msg = encodeURIComponent(
          `مرحباً نبأ، أرغب في حجز ${data.name} لمدة ${label} (${formatPrice(price)} ر.س)`
        );
        link.href = `${WHATSAPP_BASE.company}?text=${msg}`;
        link.dataset.whatsappType = 'company';
        link.dataset.trackingLocation = `institute-${institute}`;
      }
    });
  }

  function initSummerPricing() {
    const section = document.querySelector('#institutes');
    if (!section) return;

    section.querySelectorAll('.summer-offers__tab').forEach((tab) => {
      tab.addEventListener('click', () => setActiveDuration(Number(tab.dataset.months)));
    });

    section.querySelectorAll('.pricing-duration').forEach((btn) => {
      btn.addEventListener('click', () => setActiveDuration(Number(btn.dataset.months)));
    });
  }

  /* --------------------------------------------------------------------------
     Initialize
     -------------------------------------------------------------------------- */
  function init() {
    initMobileMenu();
    initSmoothScroll();
    initScrollSpy();
    initStickyHeader();
    initCounters();
    initScrollReveal();
    initHeroAnimations();
    initTimelineAnimations();
    initStoryJourney();
    initSummerPricing();
    initFloatingWhatsApp();
    initFinalCta();
    initWhatsAppTracking();
    initLazyLoad();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
