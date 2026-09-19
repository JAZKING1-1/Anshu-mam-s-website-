import { useEffect, useRef, useState } from 'react';
import './site-motion.css';

const INTRO_KEY = 'anshu-opening-seen-v2';
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const REVEAL_SELECTOR = '[data-motion], [data-reveal], .section-heading, .values-heading, .support-card, .meet-image, .meet-copy, .values-grid > article, .journey-grid > article, .video-card, .story-chapter, .story-photo, .pathway-card, .page-intro, .faq-section > div, .invitation-inner, .welcome-strip .container';
const clamp = (value: number) => Math.min(1, Math.max(0, value));
let openingSeenInMemory = false;
let reducedOverride: boolean | undefined;

function prefersReducedMotion() {
  if (window.matchMedia(REDUCED_MOTION).matches) return true;
  if (reducedOverride !== undefined) return reducedOverride;
  try { return localStorage.getItem('anshu-reduced-motion') === 'true'; } catch { return false; }
}

function shouldOpen(route: string) {
  if (route !== '/' || openingSeenInMemory || prefersReducedMotion()) return false;
  try { return sessionStorage.getItem(INTRO_KEY) !== 'seen'; } catch { return true; }
}

/** Listen for `anshu:replay-intro` to replay; dispatches `anshu:intro-complete` after closing. */
export function SiteMotion({ route }: { route: string }) {
  const [reduced, setReduced] = useState(prefersReducedMotion);
  const [open, setOpen] = useState(() => shouldOpen(route));
  const [introVersion, setIntroVersion] = useState(0);
  const motionRoot = useRef<HTMLDivElement>(null);
  const introPanel = useRef<HTMLDivElement>(null);
  const skipButton = useRef<HTMLButtonElement>(null);
  const progressLine = useRef<HTMLDivElement>(null);
  const previousRoute = useRef(route);
  const visible = open && !reduced;

  useEffect(() => {
    const preference = window.matchMedia(REDUCED_MOTION);
    const update = (event?: Event) => {
      if (event instanceof CustomEvent && typeof event.detail?.reduced === 'boolean') reducedOverride = event.detail.reduced;
      const next = prefersReducedMotion();
      setReduced(next);
      if (next) setOpen(false);
    };
    preference.addEventListener('change', update);
    window.addEventListener('anshu:motion-preference', update);
    update();
    const replay = () => {
      if (prefersReducedMotion()) return;
      setIntroVersion((version) => version + 1);
      setOpen(true);
    };
    window.addEventListener('anshu:replay-intro', replay);
    return () => {
      preference.removeEventListener('change', update);
      window.removeEventListener('anshu:motion-preference', update);
      window.removeEventListener('anshu:replay-intro', replay);
    };
  }, []);

  useEffect(() => {
    if (previousRoute.current !== route) setOpen(shouldOpen(route));
    previousRoute.current = route;
  }, [route]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('intro-playing', visible);
    html.classList.toggle('intro-complete', !visible);
    html.dataset.motionPreference = reduced ? 'reduced' : 'full';
    if (!visible) {
      window.dispatchEvent(new CustomEvent('anshu:intro-complete', { detail: { reducedMotion: reduced } }));
      return;
    }
    openingSeenInMemory = true;
    try { sessionStorage.setItem(INTRO_KEY, 'seen'); } catch { /* The in-memory flag still prevents repeated openings. */ }
    const panel = introPanel.current;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const siblings = Array.from(motionRoot.current?.parentElement?.children ?? [])
      .filter((element): element is HTMLElement => element instanceof HTMLElement && element !== motionRoot.current);
    const previousInert = siblings.map((element) => ({ element, inert: element.inert }));
    siblings.forEach((element) => { element.inert = true; });
    skipButton.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
    };
    document.addEventListener('keydown', onKeyDown);
    const timer = window.setTimeout(() => setOpen(false), 2100);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
      previousInert.forEach(({ element, inert }) => { element.inert = inert; });
      if (panel?.contains(document.activeElement) || document.activeElement === document.body) {
        const target = previousFocus?.isConnected && previousFocus !== document.body
          ? previousFocus : document.getElementById('main-content');
        target?.focus({ preventScroll: true });
      }
    };
  }, [visible, introVersion, reduced]);

  useEffect(() => {
    const html = document.documentElement;
    const art = Array.from(document.querySelectorAll<HTMLElement | SVGElement>('[data-scroll-art]'));
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = Math.max(0, html.scrollHeight - window.innerHeight);
      const progress = height > 0 ? clamp(window.scrollY / height) : 0;
      html.style.setProperty('--page-progress', progress.toFixed(4));
      if (progressLine.current) progressLine.current.style.transform = `scaleX(${progress})`;
      art.forEach((element) => {
        const box = element.getBoundingClientRect();
        const value = reduced ? 1 : clamp((window.innerHeight - box.top) / (window.innerHeight + box.height));
        element.style.setProperty('--art-progress', value.toFixed(4));
      });
    };
    const requestUpdate = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    const sizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(requestUpdate) : null;
    sizeObserver?.observe(document.body);
    update();
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      sizeObserver?.disconnect();
      art.forEach((element) => element.style.removeProperty('--art-progress'));
    };
  }, [route, reduced, visible]);

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main || reduced || visible || typeof IntersectionObserver === 'undefined') return;
    const running = new Set<Animation>();
    let alive = true;
    const play = (element: Element, keyframes: Keyframe[], options: KeyframeAnimationOptions) => {
      if (typeof element.animate !== 'function') return;
      const animation = element.animate(keyframes, options);
      running.add(animation);
      animation.finished.then(() => { running.delete(animation); if (alive) animation.cancel(); }).catch(() => running.delete(animation));
    };
    const candidates = Array.from(main.querySelectorAll<HTMLElement | SVGElement>(REVEAL_SELECTOR))
      .filter((element) => !element.closest('.hero, [data-motion="none"]') && !element.matches('[data-motion="draw"], .inner-orbit, .inner-star'));
    // An explicit parent owns its reveal; never animate both it and its descendants.
    const targets = candidates.filter((element) => !candidates.some((parent) => parent !== element && parent.contains(element)));
    const revealed = new WeakSet<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting || revealed.has(entry.target)) return;
        const element = entry.target as HTMLElement | SVGElement;
        revealed.add(element);
        observer.unobserve(element);
        if (element.contains(document.activeElement)) return;
        const direction = element.dataset.motion || element.dataset.reveal || 'rise';
        const from = direction === 'left' ? '-42px 0' : direction === 'right' ? '42px 0' : '0 42px';
        play(element, [{ opacity: 0.22, translate: from }, { opacity: 1, translate: '0 0' }], {
          duration: 820, delay: Math.min(index * 80, 160), easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards',
        });
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    targets.forEach((element) => observer.observe(element));
    // Decorative strokes have their own observer so an ancestor's reveal does not suppress them.
    // Only the strokes are drawn: the SVG never gets a second translate/opacity entrance.
    const drawingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement | SVGElement;
        drawingObserver.unobserve(element);
        const strokes = typeof SVGGeometryElement !== 'undefined' && element instanceof SVGGeometryElement
          ? [element] : Array.from(element.querySelectorAll<SVGGeometryElement>('path, circle, ellipse, line, polyline, polygon, rect'));
        const ancestorDelay = element.parentElement?.closest(REVEAL_SELECTOR) ? 180 : 0;
        const outlined = strokes.filter((stroke) => getComputedStyle(stroke).stroke !== 'none');
        outlined.forEach((stroke, strokeIndex) => {
          if (stroke.closest('[data-scroll-art]')) return;
          const length = stroke.hasAttribute('pathLength') ? Number(stroke.getAttribute('pathLength')) : stroke.getTotalLength();
          if (!Number.isFinite(length) || length <= 0) return;
          play(stroke, [{ strokeDasharray: `${length}`, strokeDashoffset: `${length}` }, { strokeDasharray: `${length}`, strokeDashoffset: '0' }], {
            duration: 1400, delay: ancestorDelay + Math.min(strokeIndex * 100, 300), easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards',
          });
        });
        // A text star has no SVG stroke; give it one restrained bloom, preserving its parent's motion.
        if (!outlined.length && element.matches('.inner-star')) {
          play(element, [{ scale: 0.76 }, { scale: 1.06, offset: 0.72 }, { scale: 1 }], {
            duration: 720, delay: ancestorDelay, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards',
          });
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -12px 0px' });
    main.querySelectorAll<HTMLElement | SVGElement>('[data-motion="draw"], .inner-orbit, .inner-star').forEach((element) => {
      if (!element.closest('.hero, [data-motion="none"], [data-scroll-art]')) drawingObserver.observe(element);
    });
    // Focused content must be stable and immediately readable.
    const onFocus = () => { running.forEach((animation) => animation.cancel()); running.clear(); };
    main.addEventListener('focusin', onFocus);
    // A short accent sweep marks a new page without hiding or delaying its content.
    const routeSweep = motionRoot.current?.querySelector('.motion-route-sweep');
    if (routeSweep) play(routeSweep, [{ transform: 'scaleX(0)', opacity: 1 }, { transform: 'scaleX(1)', opacity: 1, offset: 0.7 }, { transform: 'scaleX(1)', opacity: 0 }], { duration: 720, easing: 'cubic-bezier(.22,1,.36,1)' });
    return () => {
      alive = false;
      observer.disconnect();
      drawingObserver.disconnect();
      main.removeEventListener('focusin', onFocus);
      running.forEach((animation) => animation.cancel());
      running.clear();
    };
  }, [route, reduced, visible]);

  useEffect(() => () => {
    document.documentElement.classList.remove('intro-playing', 'intro-complete');
    delete document.documentElement.dataset.motionPreference;
    document.documentElement.style.removeProperty('--page-progress');
  }, []);

  return (
    <div className="site-motion" ref={motionRoot}>
      <div className="motion-scroll-track" aria-hidden="true"><div ref={progressLine} className="motion-scroll-line" /><div className="motion-route-sweep" /></div>
      {visible && <div className="motion-intro" key={introVersion} ref={introPanel} role="dialog" aria-modal="true" aria-labelledby="motion-intro-name" aria-describedby="motion-intro-message">
        <div className="motion-intro-halo" aria-hidden="true" />
        <div className="motion-intro-inner">
          <svg className="motion-lotus" viewBox="0 0 240 240" fill="none" aria-hidden="true">
            <circle className="motion-lotus-orbit" cx="120" cy="120" r="103" pathLength="1" />
            <circle className="motion-lotus-orbit-inner" cx="120" cy="120" r="92" pathLength="1" />
            <path className="motion-lotus-petal petal-one" d="M120 169C91 144 90 106 120 66c30 40 29 78 0 103Z" pathLength="1" />
            <path className="motion-lotus-petal petal-two" d="M120 169c-43-7-68-30-64-68 40 7 63 28 64 68Z" pathLength="1" />
            <path className="motion-lotus-petal petal-three" d="M120 169c43-7 68-30 64-68-40 7-63 28-64 68Z" pathLength="1" />
            <path className="motion-lotus-petal petal-four" d="M120 169c-47 12-76-7-86-33 39-8 65 1 86 33Z" pathLength="1" />
            <path className="motion-lotus-petal petal-five" d="M120 169c47 12 76-7 86-33-39-8-65 1-86 33Z" pathLength="1" />
            <path className="motion-lotus-stem" d="M120 169v21m-26 0h52M120 26v13m-6-6h12M33 113v12m-6-6h12m168-6v12m-6-6h12" pathLength="1" />
            <circle className="motion-lotus-dot" cx="120" cy="51" r="2.5" />
          </svg>
          <p className="motion-intro-eyebrow">A moment. A breath. A beginning.</p>
          <h2 id="motion-intro-name">Anshu Sahani</h2>
          <p id="motion-intro-message">Come home to your power.</p>
        </div>
        <button ref={skipButton} type="button" className="motion-intro-skip" onClick={() => setOpen(false)}>Skip intro <span aria-hidden="true">↗</span></button>
        <span className="motion-intro-caption" aria-hidden="true">COURAGE · CLARITY · CONFIDENCE</span>
      </div>}
    </div>
  );
}
