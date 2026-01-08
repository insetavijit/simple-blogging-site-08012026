---
title: "Modern CSS Techniques Every Developer Should Know"
date: 2026-01-04
author: "Alex Chen"
tags: ["css", "frontend", "design"]
excerpt: "Explore the latest CSS features that are transforming how we style the web, from container queries to cascade layers."
image: "/assets/images/posts/modern-css.jpg"
---

# Modern CSS Techniques Every Developer Should Know

CSS has evolved dramatically over the past few years. Features that once required JavaScript or complex workarounds are now native to the language. Let's explore the game-changing techniques you should add to your toolkit.

## 1. Container Queries

For years, we've relied on viewport-based media queries. Container queries change the game by letting components respond to their container's size.

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

This enables truly reusable components that adapt based on where they're placed, not just the screen size.

## 2. CSS Nesting

Native CSS nesting is finally here! No more preprocessors needed for this beloved feature.

```css
.navbar {
  background: #333;
  
  & .nav-link {
    color: white;
    
    &:hover {
      color: #6366f1;
    }
  }
}
```

## 3. The `:has()` Selector

Often called the "parent selector," `:has()` lets you style elements based on their children.

```css
/* Style a card differently if it contains an image */
.card:has(img) {
  padding: 0;
}

/* Style a form label when its input is focused */
label:has(+ input:focus) {
  color: #6366f1;
}
```

## 4. Cascade Layers

Control CSS specificity with explicit layers:

```css
@layer reset, base, components, utilities;

@layer base {
  h1 { font-size: 2rem; }
}

@layer components {
  .hero h1 { font-size: 3.5rem; }
}
```

## 5. View Transitions API

Create smooth page transitions without JavaScript frameworks:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.3s;
}
```

## Browser Support

Most of these features are now supported in all major browsers. For production use:

- ✅ CSS Nesting - All major browsers
- ✅ `:has()` - Chrome, Safari, Firefox
- ✅ Container Queries - Widespread support
- ⚠️ View Transitions - Chrome, experimental in others

## Conclusion

Modern CSS is more powerful than ever. These features reduce our reliance on JavaScript, improve performance, and make our stylesheets more maintainable. Start experimenting with these techniques today!
