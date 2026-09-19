# Anshu Sahani — design system

## Identity

Life and relationship coaching for women. **Soft heart. Strong voice. Your life.** expresses warmth with agency. Her own journey connects overgiving and rediscovery with courage, clarity and confidence. Use concrete language, original photographs and source-supported qualifications. Spiritual warmth should not become promises of healing or guaranteed outcomes.

## Visual direction

Confident feminine editorial design: deep plum fields, berry accents, blush cream, grounded rust, luminous gold, generous spacing and curved portrait frames. Large, fuller serif headings create presence; clear body copy and restrained navigation keep the experience approachable. Botanical and lotus geometry supports the identity without competing with content.

`src/index.css` provides the base layout; `src/experience.css` defines the richer presentation. Use semantic colour tokens throughout.

## Default colour story: Rose & ritual

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | #faf1e7 | Warm main background |
| `--surface` | #fffaf4 | Light panels |
| `--ink` | #321e2b | Primary text |
| `--muted` | #69505a | Supporting text |
| `--accent` | #963c56 | Berry buttons and accents |
| `--accent-text` | Contrast-safe accent | Headings and small labels |
| `--accent-ink` | #ffffff | Accent-button text |
| `--soft` | #efd5d7 | Blush sections |
| `--sage` | #e4e4d3 | Grounded supporting panels |
| `--deep` | #301b2a | Deep plum sections |
| `--on-deep` | #fff4e7 | Text on deep sections |
| `--line` | #d8b7ba | Dividers |
| `--gold` | #916536 | Details on light backgrounds |
| `--gold-light` | #e8bf8d | Details on deep backgrounds |
| `--accent-on-deep` | #e8bf8d | Contrast-safe emphasis on deep |
| `--rust` | #a14832 | Earthy decorative accent |

Alternative presets are **Sage & ceremony**, **Lavender & dusk**, and **Terracotta & gold**. Definitions live in `src/config/theme.ts`; IDs `rose`, `sage`, `lavender`, and `sand` are retained for saved preferences. Custom colours never replace body text. Accent text falls back to a safe colour when needed; button labels choose contrasting black or white.

## Typography

Editorial uses **Fraunces**, a characterful variable serif with substantial curves, paired with **DM Sans** for body text and controls. Main headings use weight 500, italic emphasis 450, and automatic optical sizing. Fraunces supports weights 100–900 and optical sizes 9–144; DM Sans uses its actual variable range, 100–1000.

The other options remain Classic (Libre Baskerville) and Timeless (Georgia), with Cormorant Garamond retained as a fallback. Fonts are served locally with SIL Open Font Licences. Sources: [Fraunces design project](https://github.com/undercasetype/Fraunces), [Google Fonts distribution](https://github.com/google/fonts/tree/main/ofl/fraunces), and [local font inventory](public/fonts/README.md).

## Interaction and access

The homepage combines a short lotus welcome, scroll-driven art, section reveals and a private three-tab Intention Guide. Intro Skip, Escape and footer replay provide control. Reduced-motion preferences suppress the welcome and decorative animation. See [motion design](docs/motion-design.md).

Use real navigation links, visible keyboard focus, accessible tab/expanded states and native video controls. Mobile navigation closes on selection or Escape; the appearance studio uses a native modal dialog. Enquiries must show an honest configured or unconfigured state. No invented ratings, availability or success messages.
