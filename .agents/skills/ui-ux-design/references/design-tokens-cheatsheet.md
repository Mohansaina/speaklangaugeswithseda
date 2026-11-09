# Design Tokens & Palette Cheatsheet

Use these standard token scales for color, spacing, radius, and shadows to maintain visual harmony across the entire project.

---

## 1. Color Palette Tokens (Tailwind CSS / CSS Variables)

```css
:root {
  /* Canvas & Surfaces */
  --bg-canvas: #ffffff;
  --bg-surface: #f8fafc;
  --bg-elevated: #ffffff;
  --bg-muted: #f1f5f9;

  /* Text & Foreground */
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --text-inverse: #ffffff;

  /* Borders & Dividers */
  --border-subtle: #e2e8f0;
  --border-strong: #cbd5e1;
  --border-focus: #3b82f6;

  /* Brand / Semantic Accents */
  --accent-primary: #2563eb;       /* Primary CTA */
  --accent-primary-hover: #1d4ed8;
  --accent-secondary: #6366f1;
  --accent-success: #10b981;
  --accent-warning: #f59e0b;
  --accent-danger: #ef4444;
}

.dark {
  /* Dark Mode Canvas & Surfaces */
  --bg-canvas: #09090b;
  --bg-surface: #121215;
  --bg-elevated: #18181b;
  --bg-muted: #27272a;

  /* Text & Foreground */
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  --text-inverse: #09090b;

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.16);
  --border-focus: #60a5fa;

  /* Brand Accents */
  --accent-primary: #3b82f6;
  --accent-primary-hover: #60a5fa;
  --accent-secondary: #818cf8;
}
```

---

## 2. 8-Point Grid Spacing Scale

Always space components using multiples of 4 or 8 pixels:

- **2px (`0.5`)**: Micro adjustments, border widths, compact indicator dots.
- **4px (`1`)**: Tight icon-to-label spacing, badge inner padding.
- **8px (`2`)**: Default compact gap, button horizontal padding for small buttons.
- **12px (`3`)**: Card sub-element spacing, form input vertical padding.
- **16px (`4`)**: Standard component inner padding, input horizontal padding.
- **24px (`6`)**: Standard card internal padding, grid column gaps.
- **32px (`8`)**: Section sub-headers, widget separation.
- **48px (`12`)**: Major container spacing, standard component margins.
- **64px (`16`)**: Medium section vertical padding (`py-16`).
- **96px - 128px (`24 - 32`)**: Hero section top/bottom padding (`py-24` or `py-32`).

---

## 3. Border Radius Tokens

Consistent rounding creates cohesiveness:

- **Small (`rounded-md` / 6px)**: Form fields, checkboxes, tooltips, tags.
- **Medium (`rounded-xl` / 12px)**: Buttons, drop-down menus, toast notifications.
- **Large (`rounded-2xl` / 16px - 20px)**: Bento grid cards, modal dialogs, preview frames.
- **Extra Large (`rounded-3xl` / 24px - 32px)**: Hero visual containers, floating pill navbars.
- **Pill (`rounded-full`)**: Avatar circles, status indicator chips, floating action badges.

---

## 4. Shadow & Elevation Tokens

```css
/* Ambient soft shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.05);

/* Dark mode glowing border highlight */
--glass-card: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
```

