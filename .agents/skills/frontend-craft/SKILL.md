---
name: frontend-craft
description: >-
  Guide for high-craft frontend engineering, component architecture, modern CSS/Tailwind,
  fluid responsive layouts, animations (Framer Motion / CSS), accessibility, and Core Web Vitals optimization.
  Use this skill when building modern web frontends, crafting responsive pages, styling with Tailwind CSS,
  implementing micro-interactions, optimizing performance, and ensuring cross-browser perfection.
---

# Frontend Craft & Engineering Mastery

This skill guides the implementation of production-ready, performant, and resilient frontend code. It translates UI/UX design into pixel-perfect, accessible, and ultra-smooth digital experiences.

---

## 1. Modern Component Architecture

Build components that are composable, resilient, and maintainable:

- **Atomic Structure**:
  - **Atoms**: Primitive elements (`Button`, `Input`, `Badge`, `Avatar`, `Heading`).
  - **Molecules**: Combined primitives (`SearchBar` = Input + Button + Icon; `UserCard` = Avatar + Label + Badge).
  - **Organisms**: Distinct functional sections (`Navbar`, `HeroSection`, `PricingTable`, `BentoGrid`).
  - **Templates / Pages**: Full compositions wireframed into responsive layouts.
- **Headless & Accessible Primitives**:
  - Leverage accessible headless primitives (e.g., Radix UI, Headless UI, React Aria) for complex interactions like dialogs, dropdowns, tooltips, and accordions.
- **Class Merging Utility (`cn`)**:
  - Always use `clsx` and `tailwind-merge` to combine default component styles with incoming custom classes:
    ```typescript
    import { clsx, type ClassValue } from "clsx";
    import { twMerge } from "tailwind-merge";

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    ```
- **Polymorphic Components (`asChild`)**:
  - Allow components to render as different underlying HTML elements (e.g., rendering a button styled as a link `<a>` or `<Link>`) without duplicating CSS.

---

## 2. Responsive & Fluid Layouts

Never design only for standard desktop monitors. Ensure seamless adaptation across mobile (360px+), tablet (768px+), desktop (1024px+), and ultrawide (1440px+):

### Mobile-First Layout Discipline
- Write base classes for mobile screens first, then progressively enhance with responsive breakpoints:
  ```html
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  ```
- **Fluid Sizing with `clamp()`**:
  - Prevent harsh breakpoint snapping for typography and hero paddings:
    ```css
    /* Scales smoothly between 2rem at 375px viewport and 4rem at 1280px viewport */
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
    ```
- **CSS Grid Mastery**:
  - Auto-fit responsive cards without media queries:
    ```css
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    ```
  - Subgrid (`grid-template-rows: subgrid`) to keep card headers, descriptions, and action footers perfectly aligned across adjacent cards regardless of content length.
- **Prevent Horizontal Overflow**:
  - Always set `overflow-x: clip` or `overflow-x: hidden` on the outer page wrapper.
  - Test all components on simulated 320px mobile screens to ensure zero unwanted horizontal panning.

---

## 3. Motion, Easing & Micro-Interactions

Animation must feel physical, intentional, and snappy:

### The Golden Rules of Animation
1. **GPU Acceleration Only**: Animate strictly with `transform` (`translate3d`, `scale`, `rotate`) and `opacity`. Avoid animating layout properties (`width`, `height`, `top`, `margin`, `padding`), which trigger expensive browser reflows.
2. **Snappy Durations**:
   - Micro-interactions (hover, tap, toggle): **150ms - 200ms**.
   - Modal/dialog entrances: **200ms - 300ms**.
   - Complex full-page reveals: **300ms - 500ms max**.
3. **Cubic-Bezier Easing**:
   - Entrance / Spring feel: `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo).
   - Exit: `cubic-bezier(0.7, 0, 0.84, 0)` (in-expo) or `cubic-bezier(0.4, 0, 0.2, 1)` (standard ease-in-out).
4. **Accessible Motion**:
   - Always respect `@media (prefers-reduced-motion: reduce)`. In Tailwind: `motion-safe:animate-fade-in motion-reduce:transition-none`.

---

## 4. Core Web Vitals & Performance

High visual fidelity must never compromise performance:

### Metrics & Tactics
- **LCP (Largest Contentful Paint < 2.5s)**:
  - Preload hero images and display fonts.
  - Never lazy-load the primary hero image or top-of-page graphic. Mark them with `fetchpriority="high"` / `priority` in Next.js/modern frameworks.
  - Use modern image formats (`.webp`, `.avif`) with explicit `width` and `height` attributes.
- **CLS (Cumulative Layout Shift < 0.1)**:
  - Reserve space for dynamic content using CSS aspect ratio (`aspect-video`, `aspect-square`).
  - Use skeleton placeholders that match the exact height and layout of data to be rendered.
  - Ensure custom web fonts use `font-display: swap` with matched fallback font metrics.
- **INP (Interaction to Next Paint < 200ms)**:
  - Break long JavaScript tasks.
  - Use optimistic UI updates for user actions (e.g., instant toggle of a heart/bookmark icon before the API responds).

---

## 5. Accessibility (a11y) Standards

- **Semantic Landmark Hierarchy**:
  - Structure pages with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Keyboard Navigation**:
  - All interactive elements must be reachable via `Tab` and activatable via `Enter` / `Space`.
  - Trap focus within open modals and release focus back to the triggering element upon close.
  - Escape key (`Esc`) must close dropdowns, drawers, and dialogs.
- **Screen Reader Readiness**:
  - Add `aria-label` or `sr-only` text to icon-only buttons (e.g., close buttons, social icons).
  - Use `aria-expanded="true/false"` for accordions and mobile menu toggles.
  - Use `aria-current="page"` for active navigation links.

---

## 6. References & Checklists

- [Tailwind CSS Design Patterns & Layout Snippets](./references/tailwind-patterns.md)
- [Responsive & Cross-Browser Checklist](./references/responsive-checklist.md)

