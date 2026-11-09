# Responsive Design & Cross-Browser Checklist

Ensure any webpage or application looks and feels flawless across screen sizes and devices.

---

## 1. Breakpoint Coverage
Test layouts across standard viewport sizes:
- **Small Mobile (320px - 375px)**: iPhone SE / compact Android. Check for cramped labels, wrapping issues, or overlapping buttons.
- **Large Mobile (390px - 430px)**: iPhone 14/15/16 Pro Max, Pixel. Ensure full-bleed sections fit without overflow.
- **Tablet / Small Laptop (768px - 1024px)**: iPad portrait/landscape. Verify that navigation gracefully transitions between hamburger drawer and horizontal menu.
- **Desktop (1280px - 1440px)**: Standard laptop display. Check container max-widths and comfortable padding.
- **Ultra-Wide (1920px+)**: 4K monitors. Ensure content does not stretch into an unreadable horizontal banner; constrain main content containers to `max-w-7xl` or `max-w-6xl` with auto margins (`mx-auto`).

---

## 2. Touch & Mobile Ergonomics
- [ ] Are tap targets at least **44x44px**?
- [ ] Are input font sizes at least **16px** on mobile to prevent iOS Safari from automatically zooming into the page on focus?
- [ ] Do sticky navbars or floating footers account for iOS bottom safe area notches (`pb-[env(safe-area-inset-bottom)]`)?
- [ ] Are hover effects disabled or converted gracefully for touch devices using `@media (hover: hover)`?

---

## 3. Typography & Overflow Defense
- [ ] Is there **zero** horizontal scrolling on mobile viewports?
- [ ] Are long URLs, emails, or user names wrapped properly with `break-words` or `truncate`?
- [ ] Does typography scale smoothly down on mobile without wrapping words awkwardly across three lines?
- [ ] Are modals and drawers scrollable when the keyboard opens on mobile devices (`overflow-y-auto max-h-[85vh]`)?

---

## 4. Performance & Media
- [ ] Are images rendered with responsive `srcset` or modern Next.js/framework image tags?
- [ ] Are aspect ratios locked to prevent layout shifts during image loading?
- [ ] Are SVGs explicit with `viewBox`, `width`, and `height` to prevent infinite scaling bugs?

