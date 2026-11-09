---
name: ui-ux-design
description: >-
  Comprehensive guide for creating award-winning, visually stunning, and psychologically intuitive UI/UX designs.
  Use this skill when designing web pages, interfaces, design systems, visual hierarchy, typography, color palettes,
  micro-interactions, layouts (bento, editorial, SaaS landing pages), and delightful user journeys.
---

# UI/UX Design Mastery

This skill provides the architectural foundation, cognitive psychology principles, and visual design standards required to build modern, high-converting, and unforgettable web experiences.

---

## 1. Design Psychology & UX Principles

Every world-class interface aligns with cognitive psychology to reduce mental friction and feel effortlessly natural:

- **Jakob's Law**: Users spend most of their time on other sites. Match standard mental models for navigation, buttons, forms, and checkouts; innovate on presentation and delight, not core ergonomics.
- **Fitts's Law**: The time to acquire a target is a function of the distance to and size of the target.
  - Interactive elements must have a touch/click target of at least **44x44px** on mobile.
  - Primary conversion actions should be in natural thumb/cursor resting zones (bottom sticky bars on mobile, top-right/center-hero on desktop).
- **Hick's Law**: Decision time increases with the number and complexity of choices.
  - Limit primary actions on any single screen to one (or two clearly differentiated primary vs. secondary).
  - Use **progressive disclosure**: show essentials first, tuck advanced settings into expandable accordions, modals, or drill-down tabs.
- **Miller's Law & Chunking**: Group related content into distinct cards, bento blocks, or segmented sections. Humans remember chunks, not loose lists.
- **Gestalt Principles**:
  - *Proximity*: Items close to each other are perceived as related. Spacing *between* groups must be larger than spacing *within* groups.
  - *Common Region*: Explicit borders, tinted card backgrounds, or subtle drop shadows immediately signal grouped units.
  - *Continuity & Similarity*: Consistent pill tags, button shapes, and typography build an intuitive visual language.
- **Peak-End Rule**: Users judge an experience by its peak emotional moment and its conclusion.
  - Design memorable onboarding/hero moments ("the wow factor").
  - Create rewarding completion states (delightful success animations, confetti, clear confirmation badges).

---

## 2. Visual Hierarchy & Modern Layout Paradigms

Never present a flat, uniform wall of elements. Guide the user's gaze purposefully:

### Scanning Patterns
- **Z-Pattern (Landing Pages)**: Top-left logo -> Top-right CTA -> Diagonal sweep through hero graphics/social proof -> Bottom-left value prop -> Bottom-right primary button.
- **F-Pattern (Content/Dashboard)**: Strong horizontal headline -> Sub-headline scan -> Vertical scan down bullet points / card headers.

### Layout Styles
1. **The Modern Bento Grid**:
   - Asymmetric modular cards (`col-span-1`, `col-span-2`, `row-span-2`) with uniform gaps (e.g., 16px to 24px).
   - High-contrast visual anchors: give the primary card a distinct background (e.g., gradient, dark card on light theme, or interactive preview).
2. **Editorial & High-Impact Hero**:
   - Oversized, high-personality display typography.
   - Clean floating status badges (e.g., `✦ Introducing v2.0` with subtle border and shimmer).
   - Crisp action buttons paired with subtle micro-copy (e.g., "Free 14-day trial • No credit card required").
   - Perspective mockups or floating interactive components displaying live product fidelity.
3. **Breathing Room & White Space**:
   - Ample padding between sections (`py-20` to `py-32` on desktop, `py-12` to `py-16` on mobile).
   - If an interface feels cluttered, don't shrink the text—increase the container padding and whitespace.

---

## 3. Typographic System

Typography conveys hierarchy, tone, and readability before words are even processed:

### Font Pairing Strategy
- **Pairing Model 1 (Modern Tech / SaaS)**:
  - Heading: Geometric or grotesque sans (e.g., *Inter*, *Plus Jakarta Sans*, *Geist*, *Cabinet Grotesk*).
  - Body: Neutral, highly legible sans (e.g., *Inter*, *System UI*).
  - Accents/Badges/Data: Monospace (e.g., *JetBrains Mono*, *Geist Mono*, *Space Mono*).
- **Pairing Model 2 (Editorial / Luxury / High-Trust)**:
  - Heading: Elegant modern serif (e.g., *Playfair Display*, *Fraunces*, *Instrument Serif*).
  - Body: Crisp grotesque sans (e.g., *Inter*, *General Sans*).

### Typescale & Tracking Rules
| Role | Recommended Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 48px - 72px (`3rem - 4.5rem`) | 700 - 800 | 1.05 - 1.15 | `-0.03em` (tight) |
| **Section H1/H2** | 30px - 40px (`1.875rem - 2.5rem`) | 600 - 700 | 1.15 - 1.25 | `-0.02em` |
| **Card H3/Subhead**| 20px - 24px (`1.25rem - 1.5rem`) | 600 | 1.3 - 1.4 | `-0.01em` |
| **Body (Default)** | 16px (`1rem`) | 400 - 500 | 1.5 - 1.65 | `0` (normal) |
| **Caption / Meta** | 12px - 14px (`0.75rem - 0.875rem`)| 400 - 500 | 1.4 - 1.5 | `+0.01em` |
| **Overline / Badge**| 11px - 12px (uppercase) | 600 - 700 | 1.0 | `+0.06em` (wide) |

- **Line Length**: Restrict prose body text to `60ch` to `75ch` (`max-w-2xl` to `max-w-prose`) to avoid eye fatigue.

---

## 4. Color Architecture, Lighting & Elevation

A professional palette relies on semantic roles and optical layering:

### The 60-30-10 Rule
- **60% Dominant Base**: Canvas / background (clean whites/slate in light mode, deep zinc/neutral `#09090b` in dark mode).
- **30% Structural Neutrals**: Card surfaces, sidebars, borders, secondary typography, subtle dividers.
- **10% Intentional Accent**: Primary CTA, active states, key focus elements, badges. Never overuse the accent color.

### Contrast & Legibility
- Comply with **WCAG 2.1 AA** (minimum 4.5:1 for normal text, 3:1 for large text) and aim for **AAA (7:1)** on core copy.
- Never use pure black (`#000000`) for body text on pure white (`#ffffff`). Use slate/zinc (`#0f172a` or `#18181b`) for softer reading comfort.
- In dark mode, avoid pure white text on deep black; use `#f4f4f5` or `#e4e4e7` with muted secondary text (`#a1a1aa`).

### Surfaces, Borders & Elevation
- **Card Surfaces**: Layer depth using subtle background contrast (e.g., base `#09090b`, card surface `#121215`, elevated card `#18181b`).
- **Subtle 1px Borders**: In modern design, razor-thin borders (`border border-zinc-200 dark:border-white/10`) replace heavy drop shadows.
- **Multi-stop Layered Shadows**:
  - Soft ambient light: `box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.08);`
  - Glow effects: Subtle radial gradient accents under high-priority cards or hero graphics (`blur-[100px] opacity-25`).

---

## 5. Interaction States & Micro-interactions

A static UI feels dead; an over-animated UI feels sluggish. Aim for snappy, tactile responsiveness:

### State Matrix Checklist
Every interactive component (buttons, inputs, links, cards) must define:
1. **Default**: Clear affordance, inviting shape, legible label.
2. **Hover**: Smooth lift (`-translate-y-0.5`), surface brightening, or subtle border glow within `150ms-200ms`.
3. **Active (Pressed)**: Slight scale reduction (`scale-[0.98]`) for tactile feedback.
4. **Focus-Visible**: High-contrast outline / ring (`ring-2 ring-primary ring-offset-2`) for keyboard navigators.
5. **Loading**: Inline spinner or pulsing skeleton, maintaining element dimensions to prevent layout jump.
6. **Disabled**: Reduced opacity (`opacity-50`), `cursor-not-allowed`, non-responsive to pointer events.
7. **Empty State**: Never show a blank card or table. Include a friendly illustration/icon, clear explanation, and a primary action to populate data.

---

## 6. References & Checklists

- [Design Tokens Cheatsheet](./references/design-tokens-cheatsheet.md)
- [UX Audit & Polish Checklist](./references/ux-audit-checklist.md)

