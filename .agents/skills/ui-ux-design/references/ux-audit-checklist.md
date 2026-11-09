# UI/UX Polish & Pre-Flight Audit Checklist

Before considering any screen or feature complete, verify it against this audit checklist.

---

## 1. Visual Hierarchy & Typography
- [ ] **Single Primary Focus**: Is there one clear focal point that draws the eye first on initial load?
- [ ] **Contrast Ratios**: Do all text elements meet WCAG AA (at least 4.5:1 for body, 3:1 for large headlines)?
- [ ] **Heading Hierarchy**: Is there a logical H1 -> H2 -> H3 structure without skipped levels?
- [ ] **Tracking**: Do large headings have tighter tracking (`-0.02em` or `-0.03em`) and uppercase badges have expanded tracking (`+0.05em`)?
- [ ] **Line Length**: Is long-form text constrained between 50 and 75 characters per line (`max-w-prose` or `max-w-2xl`)?

---

## 2. Spacing & Layout Alignment
- [ ] **8pt Spacing Discipline**: Are margins, paddings, and gaps consistent multiples of 4px/8px?
- [ ] **Optical Alignment**: Are icons optically centered with adjacent text (accounting for font cap-height vs icon bounding box)?
- [ ] **Breathing Room**: Does the content breathe, or does it feel suffocated by cramped cards and narrow paddings?
- [ ] **Grid Harmony**: Are card heights aligned in rows, or gracefully handled with flex/grid stretch?

---

## 3. Ergonomics & Usability
- [ ] **Touch Targets**: Are all interactive elements (buttons, inputs, mobile hamburger triggers) at least 44x44px in tap area?
- [ ] **Thumb Reachability**: On mobile, are critical actions easily accessible without stretching to the top corners?
- [ ] **Clear Affordances**: Do buttons look clearly clickable, and are read-only elements visually distinct from interactive controls?
- [ ] **Predictable Actions**: Does clicking a destructive action (delete, reset) trigger a confirmation dialog?

---

## 4. State Completeness
- [ ] **Hover Feedback**: Do buttons and cards react instantly with subtle translation or color shifts on hover?
- [ ] **Active/Tap State**: Does tapping give immediate visual compression (`scale-98`)?
- [ ] **Focus Visible**: Can a user tab through the entire UI with a visible, high-contrast focus ring?
- [ ] **Loading States**: Are skeletons or inline loaders shown during async operations without shifting the layout?
- [ ] **Error Handling**: Are form validation errors displayed in-context next to the problematic field with clear guidance on how to fix it?
- [ ] **Empty States**: If a list or view has no data, is there an informative empty state with a call-to-action?

---

## 5. Polish & Delight
- [ ] **Consistent Iconography**: Are all icons from the same family (e.g., Lucide React or Heroicons) with uniform stroke width (e.g., 1.75px or 2px)?
- [ ] **Dark/Light Mode Cohesion**: If dark mode is supported, are borders subtle and surfaces layered naturally rather than flat harsh black?
- [ ] **Smooth Transitions**: Are animation durations between 150ms and 300ms with smooth cubic-bezier easing?
- [ ] **No Unwanted Scrollbars**: Has horizontal overflow been completely eliminated (`overflow-x: clip` or `overflow-x: hidden`)?

