# Motion and interaction

The motion system reinforces the website’s warm, confident identity while keeping navigation and content available. Implementation is in `SiteMotion.tsx`, `site-motion.css`, `EnergyArt.tsx`, `IntentionGuide.tsx`, and `experience.css`.

## Welcome

A lotus line drawing, Anshu’s name and “Come home to your power” appear for **2.1 seconds** on the first homepage visit in a browser session. Session storage uses `anshu-opening-seen-v2`. Direct visits to inner pages do not trigger the welcome.

**Skip intro** closes it immediately; **Escape** also closes it. While open, underlying content is inert and focus moves to Skip. On closing, focus returns to the previous control or the main content. The footer’s **Replay the welcome** dispatches `anshu:replay-intro`. Closing emits `anshu:intro-complete`, which coordinates the hero entrance.

## Scroll and reveals

- A thin progress line follows document scroll, with a short route-change sweep.
- `data-scroll-art` provides bounded progress to decorative bloom rotation and journey-line drawing.
- Intersection Observer reveals eligible sections once per route render. Explicit parent reveals prevent duplicate child animation.
- Content remains visible without animation support. Keyboard focus cancels active reveal animations so focused content stays readable.
- Passive scroll listeners and requestAnimationFrame batch updates; observers and animations are cleaned up on route changes.

## Intention Guide

The three tabs explore breathing room, self-trust and a new chapter. Selection changes only local React state: it is not persisted, submitted or sent to a service. The interaction uses tab/tabpanel relationships, roving keyboard focus, arrow keys, Home and End. Each panel links to the existing booking route.

## Reduced motion

The appearance menu includes **Use less motion**, saved locally under `anshu-reduced-motion`. The system also observes `prefers-reduced-motion: reduce`, including changes during a visit. Either setting skips the opening and replay, disables reveal and route-sweep animations, removes CSS animations/transitions and smooth scrolling, and presents decorative drawing in its completed state. Normal document scrolling remains available. An in-memory fallback supports preferences when storage is unavailable.

The design follows [W3C technique C39: using prefers-reduced-motion to prevent motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html). This is a design reference, not a claim of a completed WCAG conformance audit.

## Release checks

Production build and TypeScript checks pass. Browser checks cover fresh-session welcome, Skip, Escape, footer replay, focus/inert restoration, the persistent less-motion preference, keyboard-operated intention tabs, themes, and all main routes at 320px and 1024px. Desktop and mobile compositions were visually inspected. Verify the deployed commit and public homepage after each release using the existing Render service.
