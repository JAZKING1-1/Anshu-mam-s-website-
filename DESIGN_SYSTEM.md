# Anshu Sahani — design system

## Identity

Life and relationship coaching for women. The central invitation is **Come home to yourself.** The narrative connects her own experience of overgiving and rediscovery with courage, clarity, and confidence. Use warm, concrete language, real photographs, and practical descriptions of the coaching relationship. Publish only source-supported qualifications and service details.

## Visual language

Quiet editorial layout: warm paper, muted rose, deep warm ink, fine botanical linework, gently arched portraits, generous spacing, and simple navigation. Cormorant Garamond headings pair with DM Sans body text. Avoid decorative effects that delay access to content. All fonts are served locally.

## Colour and type flexibility

Named palette and font settings live in `src/config/theme.ts`; CSS uses semantic tokens instead of page-specific hardcoded colours.

| Token | Rose default | Purpose |
| --- | --- | --- |
| --paper | #f9f6f0 | Main background |
| --surface | #fffcf8 | Light panels |
| --ink | #352e30 | Primary text |
| --muted | #6d6261 | Supporting text |
| --accent | #805054 | Button background |
| --accent-text | Contrast-safe accent | Headings and small icons |
| --soft | #eee0de | Rose sections |
| --sage | #e3e6dc | Supporting panels |
| --deep | #423336 | Dark section background |
| --on-deep | #fcf8f2 | Dark-section text |
| --line | #dcd0ca | Dividers |
| --gold | #917445 | Decorative details |

Additional presets: Sage sanctuary, Lavender dusk, Sand & gold. Typeface choices: Editorial (Cormorant Garamond), Classic (Libre Baskerville), Timeless (Georgia). Appearance controls change only the current browser. Published defaults are configured in source.

## Interaction

Header navigation uses real links; SPA transitions preserve normal modified-click behavior and browser history. Mobile navigation closes after choosing a page or pressing Escape. The appearance studio uses a native modal dialog with keyboard focus containment. FAQs use accessible expanded states. Respect reduced-motion preferences.

The primary invitation leads to an honest contact/booking state. No invented testimonials, ratings, availability, or success messages.
