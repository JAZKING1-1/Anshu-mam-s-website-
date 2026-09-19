# Anshu Sahani — life and relationship coaching

A calm, editorial React/TypeScript website in the existing Anshu repository. Original supplied portraits, a source-grounded My Story, five original client videos, responsive navigation, and a browser-local appearance studio.

## Run and build

- `npm ci`
- `npm run dev`
- `npm run build:tsc` — TypeScript validation and production build.
- `npm run preview` — preview the production output.

The existing Render static service uses `dist`. No new hosting service or repository is required. `render.yaml` includes a `/* → /index.html` rewrite for direct page visits. If the existing service is not Blueprint-managed, ensure the same rewrite exists in that service's Redirects/Rewrites settings before deploying. See [Render documentation](https://render.com/docs/redirects-rewrites).

## Appearance

Visitors can use the palette icon in the header or the footer appearance link. Four presets (Rose & ivory, Sage sanctuary, Lavender dusk, Sand & gold), three typefaces, and a custom accent are available. Choices are saved only in that visitor's browser under `anshu-appearance`.

Site-wide palette definitions and default ordering are in `src/config/theme.ts`. The first palette and first typeface are the published defaults; matching initial CSS tokens are in `src/index.css`. Custom accents automatically choose contrasting button text and use a safe heading colour when needed. Fonts are hosted locally with their licences.

## Activate enquiries

The previous telephone and social values were placeholders. No unverified contact destinations are published.

Set one or more verified **public** build-time values on the existing Render service, then rebuild:

- `VITE_BOOKING_URL` — an HTTPS scheduling URL
- `VITE_CONTACT_EMAIL` — Anshu's public contact email
- `VITE_WHATSAPP_NUMBER` — country code and number, digits only

See `.env.example`. These variables are included in the public website, so never put secrets in them. With no configured channel, the site honestly shows that booking details are being prepared. With email or WhatsApp configured, visitors review a draft and choose to send it in the selected app. There is no pretend form submission, database, payment flow, or mailing list.

## Content and media

- `src/pages/AboutPage.tsx`: edited first-person story grounded in the supplied My Story document.
- `public/images`: four original Drive portraits, converted to metadata-free WebP.
- `public/testimonials`: complete original videos, compressed to about 22.4 MB total with unchanged audio, native controls, and no autoplay.
- `docs/content-sources.md`: provenance overview.
- `docs/brand-research.md`: research and references.

Full source documents and unrelated local testimonial uploads have not been added to the repository. Some supplied videos contain baked captions; a complete reviewed caption/transcript set is not available.

## Routes

`/`, `/about`, `/coaching`, `/testimonials`, `/story-wall` (client stories alias), `/book`, `/contact`, `/privacy`, `/terms`. Unknown routes show a recovery page.

## Verification

TypeScript and Vite production build pass. Desktop and mobile layouts, all main routes, mobile navigation, FAQ controls, palette/font persistence, and custom-colour contrast were checked. All five encoded videos decode successfully; their AAC audio matches the supplied sources. Live Render verification still requires selecting the existing workspace and deployment.
