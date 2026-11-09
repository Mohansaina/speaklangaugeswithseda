# Project Guidelines: UI/UX & Frontend Craft Standards

This workspace is committed to creating award-winning, pixel-perfect, highly responsive, and delightful web applications. All code and designs in this repository must adhere to the following principles.

---

## 1. Visual Design & UI/UX Standards
- **Cognitive Ergonomics**: Adhere to Fitts's Law (minimum 44x44px touch targets) and Hick's Law (progressive disclosure, clear visual hierarchy).
- **8-Point Spacing Discipline**: Use strict multiples of 4px and 8px for margins, paddings, and gaps.
- **Typography**:
  - Maintain a strict hierarchy (Display -> H1 -> H2 -> H3 -> Body -> Caption).
  - Constrain body text width to `60ch - 75ch` (`max-w-prose` / `max-w-2xl`) for reading comfort.
  - Apply tight tracking (`tracking-tight`) on large headings and open tracking (`tracking-wider`) on uppercase micro-copy.
- **Color & Contrast**:
  - Strictly observe WCAG AA / AAA contrast ratios.
  - Never use pure black text on pure white, or harsh flat black in dark mode. Use refined zinc/slate neutrals.
  - Follow the 60-30-10 color rule (60% background canvas, 30% structural surfaces/borders, 10% intentional accent).
- **Elevation & Surfaces**:
  - Prefer subtle 1px border highlights (`border-zinc-200 dark:border-white/10`) and layered ambient drop shadows over harsh flat lines.

---

## 2. Frontend Engineering & Layout Architecture
- **Mobile-First Responsiveness**:
  - Always write base styles for mobile viewports (360px+) and progressively enhance (`sm:`, `md:`, `lg:`, `xl:`).
  - Eliminate horizontal overflow completely (`overflow-x: clip` / `overflow-x: hidden`).
- **Component Architecture**:
  - Build composable, reusable components with clean prop interfaces.
  - Use `cn` (clsx + tailwind-merge) for dynamic class composition.
- **Motion & Micro-Interactions**:
  - Animate only GPU-accelerated properties (`transform`, `opacity`).
  - Keep micro-interaction durations snappy (150ms - 250ms) using smooth cubic-bezier easing.
  - Always support `prefers-reduced-motion`.
- **State Completeness**:
  - Every interactive element must gracefully handle Default, Hover, Active, Focus-Visible, Loading, and Disabled states.
  - Always provide skeleton screens or inline feedback for asynchronous operations to prevent layout shift (CLS).

