---
title: "Building Accessible Web Applications"
date: 2026-01-03
author: "Sam Rivera"
tags: ["accessibility", "a11y", "web development"]
excerpt: "Accessibility isn't optional—it's essential. Learn practical techniques to make your web applications usable by everyone."
image: "/assets/images/posts/accessibility.jpg"
---

# Building Accessible Web Applications

Web accessibility (a11y) ensures that websites and applications are usable by everyone, including people with disabilities. Beyond being the right thing to do, it's often a legal requirement and improves SEO.

## The POUR Principles

The Web Content Accessibility Guidelines (WCAG) are built on four principles:

1. **Perceivable** - Users must be able to perceive the content
2. **Operable** - Users must be able to operate the interface
3. **Understandable** - Content must be understandable
4. **Robust** - Content must work with various assistive technologies

## Practical Techniques

### Semantic HTML

The foundation of accessibility is proper HTML structure:

```html
<!-- ❌ Don't do this -->
<div class="button" onclick="submit()">Submit</div>

<!-- ✅ Do this instead -->
<button type="submit">Submit</button>
```

Semantic elements like `<nav>`, `<main>`, `<article>`, and `<aside>` provide important context to screen readers.

### Alternative Text for Images

```html
<!-- Decorative image - empty alt -->
<img src="decoration.svg" alt="">

<!-- Informative image - descriptive alt -->
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2">

<!-- Complex image - link to long description -->
<img src="infographic.png" alt="2025 Industry Report" aria-describedby="report-desc">
```

### Keyboard Navigation

Every interactive element should be keyboard accessible:

```css
/* Visible focus indicators */
:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

/* Don't do this! */
*:focus { outline: none; } /* ❌ */
```

### Color Contrast

Ensure text has sufficient contrast against its background:

| Size | Minimum Ratio (AA) | Enhanced (AAA) |
|------|-------------------|----------------|
| Regular text | 4.5:1 | 7:1 |
| Large text (18px+ bold) | 3:1 | 4.5:1 |

### ARIA When Needed

ARIA attributes enhance accessibility when HTML isn't enough:

```html
<div role="alert" aria-live="polite">
  Your form has been submitted successfully.
</div>

<button aria-expanded="false" aria-controls="menu">
  Menu
</button>
```

## Testing Your Site

1. **Keyboard-only navigation** - Can you use everything without a mouse?
2. **Screen reader testing** - Try NVDA (Windows) or VoiceOver (Mac)
3. **Automated tools** - Lighthouse, axe DevTools, WAVE
4. **Color contrast checkers** - WebAIM Contrast Checker

## Conclusion

Accessibility benefits everyone. Curb cuts help wheelchair users, but also parents with strollers. Captions help deaf users, but also people in noisy environments. Build with accessibility in mind from the start—retrofitting is always harder.

**Resources:**
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [WebAIM](https://webaim.org/)
