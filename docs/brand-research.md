# Anshu Sahani: personal brand and website research

Prepared 19 September 2026. This is a design and copy research memo, not independent verification of Anshu's credentials, business contacts, or client outcomes. Recommendations below are original synthesis; observed references are linked next to the relevant findings.

## Direction

Build a warm, mature, editorial personal brand around **Anshu Sahani — Life & Relationship Coach for Women**. The central idea is **a life that feels like your own**. Her existing 3 C's — courage, clarity, confidence — and the **Golden Cage** story give the website a distinctive point of view. Use her real photographs and the supplied autobiographical source rather than generic spirituality imagery or a new invented life story.

Feminine energy should come through her voice, soft light, generous space, rounded portrait shapes, warm colour, and compassionate language. Avoid assuming that femininity requires pink everywhere, script fonts, sparkles, cartoon avatars, or mystical claims. Premium should feel considered and readable.

## Evidence from the existing project

Reviewed `DESIGN_SYSTEM.md`, `src/components/Hero.tsx`, `AboutSection.tsx`, `GoldenCageSection.tsx`, `CoachingOffer.tsx`, `src/pages/AboutPage.tsx`, `src/data/faq.ts`, `src/data/testimonials.ts`, and `src/config/contact.ts` in `C:/mams website/anshu-coaching-website`.

- The written design system already specifies an appropriate brand: elegant, editorial, emotionally safe, grounded, ivory/rose/sage/plum, Cormorant Garamond and Manrope.
- The current hero diverges from this with notebook styling, purple/yellow accents, a handwritten subheading, and many small trust badges. Consolidating that visual language will have more impact than adding decoration.
- Existing positioning supports women's self-worth, boundaries, relationships, and personal growth. Keep this specific focus rather than expanding into unrelated business or wellness services.
- The personal narrative currently in the source is the Golden Cage: external competence and responsibility alongside disconnection from one's own needs. The original story document should be the authority for new biography copy.
- Current contact configuration explicitly contains placeholder WhatsApp digits and placeholder social links. The email uses `anshushahani` while the displayed name uses `Anshu Sahani`. None should be treated as verified solely because it is in the existing app.
- Current offer language includes “complete reset”, “healing”, “most popular choice”, and weekly support. Retain only source-supported service terms and soften outcome guarantees.
- Existing testimonials contain polished anonymous quotation copy and MP4 paths. Preserve real supplied media; quote exact sourced words only. Do not create new names, star ratings, client counts, press logos, or certifications.

## Reference review and what to adapt

| Primary source | Observed approach | Application for Anshu |
| --- | --- | --- |
| [Tara Mohr](https://www.taramohr.com/) | A named point of view, a clearly identified audience of women, recognition statements, and distinct paths into books, courses, and resources. | Make the 3 C's a simple recurring framework. Use a few specific recognition statements and then explain how coaching works. Do not imitate the site's claims or borrow its “Playing Big” identity. |
| [Marie Forleo's About page](https://www.marieforleo.com/about) | Personal background connects to the work she offers, then returns attention to how the reader can engage. First-person voice is a major part of the brand. | Tell Anshu's story as a human narrative with a clear bridge to why she coaches. End the story with an invitation to the visitor, rather than a long resume or decorative quote wall. |
| [Martha Beck](https://marthabeck.com/) | A consistent “Wayfinder” idea connects biography, learning resources, and services. | Use Golden Cage as a story theme, with courage/clarity/confidence as the practical language. A recognisable concept is stronger than unrelated inspirational slogans in every section. |
| [Esther Perel](https://www.estherperel.com/) | Visitors can explore recognisable relationship topics; courses explain their content and practical takeaways. | Label coaching focus areas in everyday language: boundaries, self-trust, communication, life transitions. Learn from the information structure only; her clinical credentials and therapeutic claims do not transfer to Anshu. |

These are examples of brand architecture and content structure, not evidence that a particular visual style or headline guarantees conversions.

Nielsen Norman Group's own usability research describes professional organisation, meaningful navigation, disclosure, correct content, and links to a wider verified presence as credibility factors. For this site that means clear labels, working contact paths, factual offer details, and a consistent design system. [NN/g: Trustworthiness in Web Design](https://www.nngroup.com/articles/trustworthy-design/)

## Suggested message architecture

**Eyebrow:** Life & relationship coaching for women

**Hero headline:** Come home to yourself.

**Hero copy:** A thoughtful space to find your voice, understand what matters to you, and move forward with courage, clarity, and confidence. Personalised coaching with Anshu Sahani, shaped around your story and your pace.

**Primary action:** Book a clarity call

**Secondary action:** Meet Anshu

Use “free” and the 15–20 minute duration only if supported by the approved source/service. Make the subsequent action honest: a request form is a request, an email draft is an email draft, and a booking is only confirmed once a real booking system confirms it.

**Recognition section heading:** There is room for you, too.

**Recognition copy:** Perhaps you have become very good at showing up for everyone else. You may be ready to understand your own needs, speak more openly, or make a decision you have been putting off. Coaching offers space to explore what comes next.

**Three focus areas:**

- **Trust your own voice.** Explore your values, notice self-doubt, and make choices with greater intention.
- **Build healthier boundaries.** Understand your needs and practise expressing them with care and clarity.
- **Navigate your next chapter.** Work through change with reflection, perspective, and practical next steps.

**Story bridge:** The woman behind the work.

**Story teaser:** For years, what looked like a full life from the outside did not feel like her own on the inside. Anshu calls it her golden cage. Her story is at the heart of the space she now offers other women.

Publish this teaser only if it remains faithful to the actual supplied autobiography; use her documented first-person words for the full narrative.

**Method section:** Courage to be honest. Clarity about what matters. Confidence to take the next step.

**Final invitation:** You do not need to have it all figured out to begin.

**Practical reassurance:** A first conversation is a chance to share what brings you here, ask questions, and explore whether working together feels right.

Avoid formulations that shame a visitor, assume trauma, imply a diagnosis, promise permanent change, or present the coach as the person who will rescue her. The ICF's ethics framework calls for accurate representations of qualifications and coaching's potential value; use that as professional guidance without implying ICF membership or accreditation. [ICF Code of Ethics, particularly sections 5.1–5.2](https://coachingfederation.org/credentialing/coaching-ethics/icf-code-of-ethics/)

## Page and navigation structure

Use **Home / My Story / Coaching / Client Stories / Contact**, with one visible **Book a Clarity Call** action. Resources or a journal should only appear if useful real content exists.

The home page should move through: clear offer and real portrait → reader recognition → brief personal story → three coaching focus areas → simple process → sourced client media → FAQ → closing invitation. Keep one dominant action per section. Link the complete story from the hero and story preview.

My Story should use real paragraphs with a strong introductory portrait, narrative chapter headings, and at most one pull quote. Avoid using a video gallery as a substitute for the biography the user specifically requested.

Coaching should explain who it is for, the topics it covers, how a first conversation works, the actual format, and the next step. FAQ should clarify coaching's scope, privacy, practical arrangements, and whether results vary. Keep factual service details consistent between pages.

## Visual system and colour flexibility

Retain the existing Cormorant Garamond + Manrope pairing. Use the serif generously for short headlines, not tiny captions. Body copy should be at least 16px with approximately 1.6 line height and a comfortable text measure. Use large real portraits, restrained botanical/arc linework, thin dividers, and varied editorial layouts. Avoid a page made entirely of equally sized cards.

Provide three named, cohesive colour presets using CSS variables, with a visible selected state, text names, keyboard support, reset control, and remembered local preference. A labelled “Colour palette” control makes the user's requested flexibility concrete. If custom colours are allowed, preserve a readable foreground automatically. Preview settings should not imply an unpublished change has changed the site's global default for everyone.

| Preset | Background | Main text | Primary action | Soft surface |
| --- | --- | --- | --- | --- |
| Rose & Ivory | `#FFF9F4` | `#4A2E3B` | `#9C536D` | `#EFCBD5` |
| Sage & Linen | `#FFF9F4` | `#2D2729` | `#3F5648` | `#D9E2C8` |
| Lavender & Pearl | `#FFF9F4` | `#4A2E3B` | `#615379` | `#E8E0EE` |

Computed WCAG luminance contrast for white text on the three action colours is approximately 5.42:1, 7.97:1, and 6.95:1 respectively. Plum on ivory is approximately 11.52:1. Existing champagne gold `#C3A36B` on ivory is only 2.29:1: reserve it for nonessential decoration, never small body text or necessary control outlines. These calculations concern the listed solid colour pairs only; actual opacity, focus states, images, and overlays require implementation checks.

W3C specifies 4.5:1 minimum contrast for ordinary text and 3:1 for qualifying large text. Its guidance also notes the practical weakness of very thin type. [W3C: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

Aim for 44–48px touch controls; WCAG 2.2 AA's minimum target criterion is 24×24 CSS pixels with listed exceptions. Give palette swatches clear labels and generous hit areas. [W3C: Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

Use gentle transitions and respect `prefers-reduced-motion`. Avoid entrance animations that hide content until scrolling, looping floating elements, or a blocking intro. W3C documents reduced-motion alternatives for nonessential interaction animation. [W3C: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)

## Implementation review priorities

1. Resolve authentic biography, portrait choices, real contact details, booking endpoint, and exact credentials from local source material.
2. Consolidate the existing design tokens and remove conflicting notebook/cartoon/neon styles.
3. Make navigation, mobile menu, theme controls, FAQ, media, and booking action work with keyboard and touch.
4. Preserve the existing repository and Render deployment. Do not introduce a new host, fabricated backend submission success, or new production service.
5. Check desktop and mobile layout, image crops and performance, colour contrast in every palette, and every outbound link.
