# MediCare+ Design System

> Trustworthy, sterile-clean, calming blue. A clinical design system for hospital portals and patient-management systems.

MediCare+ prioritizes **clarity, trust, and error prevention** above all else. The calming blue palette is intentionally sterile — evoking the reliability of medical-grade environments. Standard density keeps forms, data tables, and patient records legible without ambiguity. Every component is built with accessibility as a non-negotiable requirement: WCAG AA minimum, large touch targets for bedside tablets, and a clear visual hierarchy that prevents critical misreadings.

## Sources
This system was authored from a written brand/design specification (no codebase or Figma was attached). If you have the source product code, Figma libraries, or licensed font binaries, share them so the recreations and webfonts can be made exact.

---

## CONTENT FUNDAMENTALS

How copy is written across MediCare+ surfaces:

- **Voice:** calm, precise, professional. The product speaks like a careful clinician — never alarmist, never playful. Confidence without flourish.
- **Person:** address the clinician directly with "you" in instructions and helper text ("Found on the wristband."). Refer to patients in the third person by name. Avoid "we."
- **Casing:** Sentence case for body copy, helper text, and buttons ("Save record", "Admit patient"). Title Case for page titles and nav labels ("Patient Records", "Lab Results"). UPPERCASE only for status chips, overlines, and table column headers — with letter-spacing.
- **Tone with risk:** state facts plainly. Errors are direct and instructive ("Enter a valid email address."), never cute. Critical information is acknowledged manually, never auto-dismissed.
- **Numbers & codes:** medical record numbers, ICD/NDC codes, dosages, and vitals are always set in IBM Plex Mono to prevent misreading (e.g. `MRN-4827-019`, `500 mg`, `128/82`).
- **Status language:** short, paired with color AND icon — "Stable", "Needs review", "Critical", "Scheduled". Never color alone.
- **Emoji:** never. This is a clinical environment. Iconography is line icons only (see ICONOGRAPHY).
- **Vibe:** sterile, reassuring, exact. Think a well-run hospital floor — quiet competence.

---

## VISUAL FOUNDATIONS

**Color.** A cool, calming blue system anchored on Med Blue `#0077B6` (primary actions, nav, links), supported by Light Blue `#48CAE4` and Pale Cyan `#90E0EF` for accents, charts, and progress. Neutrals are a slate ramp (`#0F172A` → `#F8FAFC`). The page background is a barely-there blue-white `#FAFCFF`; surfaces are pure white. Semantic colors are reserved and meaningful: success green `#059669`, warning amber `#D97706`, error red `#DC2626`, info blue `#0077B6`. **Red is for errors, critical alerts, and destructive actions only** — never decoration — to avoid alarm fatigue.

**Imagery.** Minimal by design. This is a data-and-forms environment, not a marketing site. No full-bleed hero photography, no decorative gradients, no textures or patterns. When photography appears (e.g. patient/staff avatars) it is neutral and cropped to circles. The overall feel is flat, clean, and clinical — surfaces and borders do the work, not imagery.

**Typography.** Figtree for headlines (friendly-but-professional geometric sans), Open Sans for body (highly legible at small sizes), IBM Plex Mono for all codes/IDs/dosages. Generous line-heights (1.5–1.6 on body) for sustained reading. See `tokens/typography.css` for the full scale.

**Spacing & layout.** 8px base unit; scale 4/8/16/24/32/40/48/64/80. Standard density — comfortable, not cramped, not airy. Section spacing steps up responsively (40 mobile → 56 tablet → 80 desktop). Layout is structured: fixed sidebar + topbar shells, card-based content regions, dense but legible tables.

**Corner radii.** Default 8px (`--radius-md`) on buttons, inputs, and cards — professional and approachable without being playful. 4px for chips/badges, 12px for modals, 16px for onboarding/hero containers, full pills for avatars and status dots, 0px for table cells and dividers.

**Cards.** White fill, 1px `#E2E8F0` border, 8px radius, and a *subtle* shadow (`0 1px 3px rgba(0,0,0,.06)`). They lift to the medium shadow on hover when interactive. Elevation is always gentle — no harsh edges or dramatic depth that would distract from critical content.

**Shadows / elevation.** Four soft steps: Subtle (cards) → Medium (hover/active) → Large (modals) → Overlay (dropdowns). All low-opacity black, layered for softness.

**Borders.** 1px `#E2E8F0` for dividers and card edges; 1.5px `#CBD5E1` for input borders (thicker for clarity); 1.5px Med Blue for secondary-button outlines.

**Focus & press states.** Focus is a high-visibility double ring — 2px `#FAFCFF` gap then 4px Med Blue (`--ring-focus`); error fields use the same shape in red (`--ring-error`). Every interactive element shows it for keyboard/assistive navigation. Hover darkens fills one step (primary `#0077B6` → `#006399`) or tints transparent controls pale blue (`#F0F7FF`). Press darkens another step (`#005280` / `#E0EFFF`). No scale/bounce transforms — motion stays minimal and trustworthy.

**Animation.** Restrained. 120–140ms ease transitions on background and shadow; tooltips fade in over 300ms with a 100ms leave delay. No bounces, no decorative loops, no parallax. Motion should never compete with critical content. Respect `prefers-reduced-motion`.

**Transparency & blur.** Used sparingly — tint surfaces (`#F0F7FF`, `#E0EFFF`) for hover/selected states rather than opacity tricks. No glassmorphism.

**Touch targets.** 44px minimum on all interactive elements (52px large buttons, 48px list rows) for bedside-tablet use. Checkboxes and radios are oversized at 20px with 44px hit areas for clinical accuracy.

---

## ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) — clean, consistent 2px-stroke line icons. Loaded via CDN (`https://unpkg.com/lucide@latest`). Rendered with `<i data-lucide="name"></i>` then `lucide.createIcons()`.
- **Substitution note:** the brand spec did not ship a proprietary icon set, so Lucide is used as the closest clinical-grade match (medical, neutral, line-based). **If you have an official MediCare+ icon set, share it and it will replace Lucide.**
- **Style:** outline/stroke only, never filled or duotone. Default 18–22px in UI, 13–16px inline. Stroke color follows text or semantic color.
- **Common icons:** `plus` (brand mark / add), `users`, `activity` (vitals), `pill` (meds), `flask-conical` (labs), `alert-octagon`/`alert-triangle` (critical/warning), `check-circle` (stable/success), `shield-alert` (allergies), `bell`, `search`, `chevron-right`.
- **Rule:** color-coded status is **always** paired with both an icon and a text label — never color alone.
- **Emoji:** never used.

---

## INDEX

**Foundations / tokens**
- `styles.css` — global entry point (import this one file). `@import`s everything below.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `fonts.css` · `base.css`

**Components** (`window.MediCareDesignSystem_bf9f8a.*`)
- Buttons: `Button`, `IconButton` (`components/buttons/`)
- Forms: `Input`, `Checkbox`, `Radio` (`components/forms/`)
- Display: `Card`, `StatusChip`, `FilterChip`, `Avatar` (`components/display/`)

**UI kits**
- `ui_kits/clinician-portal/` — patient roster, patient detail, medication administration.

**Specimen cards** — `guidelines/*.card.html` populate the Design System tab (Colors, Type, Spacing).

**Other**
- `SKILL.md` — Agent Skill manifest for downloadable use.
