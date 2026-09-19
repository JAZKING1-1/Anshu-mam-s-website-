# Anshu Sahani — life and relationship coaching

A welcoming React/TypeScript website built around original portraits, a source-grounded personal story, and a confident feminine visual identity. Rich plum and berry, warm blush cream, rust and gold, fuller Fraunces typography, and responsive layouts carry the message: **Soft heart. Strong voice. Your life.**

## Run and build

- `npm ci`
- `npm run dev`
- `npm run build:tsc` — TypeScript validation and production build.
- `npm run preview` — preview the production output.

## Existing deployment

Use the existing GitHub repository and its `main` branch with the existing **Render Node web service**:

| Setting | Value |
| --- | --- |
| Service ID | `srv-d9jp6k9l565s739s70cg` |
| Website | https://anshu-mam-s-website.onrender.com |
| Build command | `npm install && npm run build` |
| Start command | `npx vite preview --host 0.0.0.0 --port $PORT` |

The checked-in `render.yaml` is a legacy static-site Blueprint; it does not describe the current live Node service. Retain the existing service configuration. No recreation or hosting migration is required.

TypeScript, the production build, keyboard interactions, and desktop/mobile layouts are checked before release. After pushing, verify the commit is live in this existing Render service and check the public homepage. Do not create a replacement service.

## Appearance and interaction

The header palette control and footer appearance link open four presets: **Rose & ritual**, **Sage & ceremony**, **Lavender & dusk**, and **Terracotta & gold**. Visitors can choose Editorial (Fraunces), Classic (Libre Baskerville), or Timeless (Georgia), plus a custom accent. Preferences stay in this browser under `anshu-appearance`; existing palette/font IDs remain compatible.

Theme definitions live in `src/config/theme.ts`. The first entries are published defaults, with matching initial tokens in `src/experience.css`. Custom accents preserve readable body text, button labels and accents on dark sections. Fonts are local; sources and licences are in [public/fonts/README.md](public/fonts/README.md).

A skippable 2.1-second welcome runs once per session on the homepage, with footer replay. Scroll progress, drawing artwork, section reveals and responsive hover details respect device reduced-motion preferences and the appearance menu’s **Use less motion** setting. The three Intention Guide tabs provide local reflection; choices are not stored or sent. See [motion notes](docs/motion-design.md).

## Activate enquiries

Publish only verified public contact destinations. Set one or more build-time values on the existing Render service, then rebuild:

- `VITE_BOOKING_URL` — an HTTPS scheduling URL.
- `VITE_CONTACT_EMAIL` — Anshu’s public contact email.
- `VITE_WHATSAPP_NUMBER` — country code and number, digits only.

See `.env.example`. These values are public, so never use secrets. Without a configured channel, the site explains that booking details are being prepared. Email and WhatsApp flows let visitors review a draft and choose to send it in the selected app; they do not pretend to submit a form.

## Content and routes

Original photographs are optimised WebP in `public/images`. Five original client videos are in `public/testimonials`, with native controls and no autoplay. Some videos contain baked captions; a complete reviewed caption/transcript set is not available.

See [content sources](docs/content-sources.md), [brand research](docs/brand-research.md), and [design system](DESIGN_SYSTEM.md). Private source documents are not distributed with the website.

Routes: `/`, `/about`, `/coaching`, `/testimonials`, `/story-wall` (client stories alias), `/book`, `/contact`, `/privacy`, and `/terms`. Unknown routes offer a recovery page.
