# Anshu Sahani Coaching — Design System (`DESIGN_SYSTEM.md`)

This document defines the visual design system, brand strategy, color tokens, typography rules, spacing scale, card architecture, and button design rules for the Anshu Sahani coaching platform.

---

## 1. BRAND IDENTITY

- **Name**: Anshu Sahani
- **Professional Identity**: Certified Life Coach · Relationship Coach · Certified NLP Practitioner
- **Tagline / Audience Focus**: Life Coach for Women — Women seeking confidence, clarity, healthier relationships, emotional resilience, boundaries, self-worth, and personal growth.
- **Main Transformation**: Courage, Clarity, and Confidence (The 3 C's).
- **Core Concept**: *Unlocking the Golden Cage* — *"A cage is still a cage, even when it is made of gold."*

### Brand Voice & Feeling
- Modern feminine energy
- Elegant & editorial
- Premium & mature
- Emotionally safe
- Confident & grounded
- Warm, calm & trustworthy

### Avoid
- Overly bright/childish pinks or generic hearts
- Cheap gradients or decorative script fonts
- Generic coaching templates or unstyled default browser HTML
- Overly mystical or fake medical/therapeutic claims

---

## 2. COLOUR SYSTEM

```css
:root {
  --background: #FFF9F4; /* Warm Ivory */
  --surface: #FFFFFF;    /* Clean White */
  --cream: #F7F0E8;      /* Soft Cream */
  --blush: #EFCBD5;      /* Blush Pink */
  --dusty-rose: #C98398; /* Dusty Rose */
  --deep-rose: #9C536D;  /* Primary Action Deep Rose */
  --sage: #A8B7A0;        /* Grounding Sage Green */
  --matcha: #D9E2C8;      /* Soft Matcha Green */
  --forest: #3F5648;     /* Deep Forest Green */
  --champagne: #C3A36B;  /* Champagne Gold Accent */
  --plum: #4A2E3B;       /* Deep Plum Headings */
  --charcoal: #2D2729;   /* Warm Charcoal Body Text */
  --muted-text: #6E6065; /* Muted Secondary Text */
}
```

- **Main Background**: Warm Ivory (`#FFF9F4`)
- **Primary Buttons**: Deep Rose (`#9C536D`) or Deep Forest Green (`#3F5648`) with crisp white text.
- **Supporting Elements**: Blush, Sage, and Matcha for soft cards and category pills.
- **Gold Accent**: Champagne Gold (`#C3A36B`) reserved exclusively for thin lines, subtle icons, and small badges.

---

## 3. TYPOGRAPHY

- **Headings**: `Cormorant Garamond` (Google Serif) — Large, elegant, editorial headings with tight tracking and high contrast.
- **Body & UI**: `Manrope` (Google Sans-Serif) — Clean, legible, accessible body copy and interface labels.

### Rules
- Max paragraph measure: ~65 characters.
- High contrast: Dark Charcoal (`#2D2729`) or Deep Plum (`#4A2E3B`) on light backgrounds.
- No default blue browser links (`<a>` elements are styled as buttons or explicit hover links).
- No all-caps paragraphs. Small uppercase eyebrow labels are permitted.

---

## 4. SPACING SCALE & LAYOUT BOUNDARIES

- **Scale**: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`.
- **Maximum Content Width**: `1200px` – `1280px` (`max-w-7xl`).
- **Section Padding**:
  - Desktop: `96px` vertically (`py-24`)
  - Tablet: `72px` vertically (`py-18`)
  - Mobile: `56px` vertically (`py-14`)

---

## 5. CARD ARCHITECTURE

- **Backgrounds**: White (`#FFFFFF`) or Soft Cream (`#F7F0E8`).
- **Border Radius**: `20px` to `28px` (`rounded-3xl`).
- **Borders**: Thin warm border (`border border-[#EFCBD5]/60`).
- **Shadows**: Restrained warm shadow (`shadow-soft` / `shadow-soft-lg`).
- **Internal Padding**: Generous spacing (`p-6` to `p-10`). No thin rectangular box cells around simple text items.

---

## 6. BUTTON DESIGN SYSTEM

### Primary Button
- Background: Deep Rose (`#9C536D`) or Forest Green (`#3F5648`)
- Text: Pure White (`#FFFFFF`), `font-medium`
- Height: `48px` – `54px` (`py-3.5` / `py-4`)
- Horizontal Padding: `24px` – `32px` (`px-7` / `px-8`)
- Radius: `16px` – `24px` (`rounded-2xl`)
- Hover: Soft elevate shadow + color darken (`hover:bg-[#824259]`)
- No default browser underline.

### Secondary Button
- Background: Transparent or Soft Ivory (`#FFF9F4`)
- Border: Thin Deep Rose or Warm Border (`border border-[#EFCBD5]`)
- Text: Deep Plum (`#4A2E3B`)
- Hover: Soft fill transition (`hover:bg-white`)
