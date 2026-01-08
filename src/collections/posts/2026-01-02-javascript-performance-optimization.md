---
title: "JavaScript Performance Optimization Tips"
date: 2026-01-02
author: "Jordan Kim"
tags: ["javascript", "performance", "optimization"]
excerpt: "Discover practical strategies to make your JavaScript applications faster and more responsive for users."
image: "/assets/images/posts/js-performance.jpg"
---

# JavaScript Performance Optimization Tips

Performance matters. Studies show that a 100ms delay in load time can hurt conversion rates. Let's explore proven techniques to optimize your JavaScript applications.

## 1. Minimize Bundle Size

### Tree Shaking

Import only what you need:

```javascript
// ❌ Imports entire library (~70KB)
import _ from 'lodash';

// ✅ Imports only what's needed (~2KB)
import debounce from 'lodash/debounce';
```

### Code Splitting

Split your code into chunks that load on demand:

```javascript
// Dynamic import for route-based splitting
const Dashboard = lazy(() => import('./Dashboard'));

// Load heavy libraries only when needed
button.addEventListener('click', async () => {
  const { Chart } = await import('chart.js');
  new Chart(canvas, config);
});
```

## 2. Optimize DOM Operations

### Batch DOM Updates

```javascript
// ❌ Forces multiple reflows
items.forEach(item => {
  list.appendChild(createListItem(item));
});

// ✅ Single reflow with DocumentFragment
const fragment = document.createDocumentFragment();
items.forEach(item => {
  fragment.appendChild(createListItem(item));
});
list.appendChild(fragment);
```

### Virtual Scrolling

For large lists, render only visible items:

```javascript
// Only render items in viewport
function renderVisibleItems(scrollTop, containerHeight) {
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const endIndex = Math.ceil((scrollTop + containerHeight) / ITEM_HEIGHT);
  
  return items.slice(startIndex, endIndex);
}
```

## 3. Debounce and Throttle

### Debounce for Search Inputs

```javascript
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Only search after user stops typing
searchInput.addEventListener('input', debounce(handleSearch, 300));
```

### Throttle for Scroll Events

```javascript
const throttle = (fn, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
};

window.addEventListener('scroll', throttle(handleScroll, 100));
```

## 4. Web Workers for Heavy Computation

Offload CPU-intensive tasks to a separate thread:

```javascript
// main.js
const worker = new Worker('processor.js');
worker.postMessage(largeDataSet);
worker.onmessage = (e) => {
  console.log('Processed:', e.data);
};

// processor.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};
```

## 5. Caching Strategies

### Memoization

```javascript
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const expensiveCalc = memoize((n) => {
  // Complex calculation
  return fibonacci(n);
});
```

## Performance Metrics to Track

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint | < 1.8s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Time to Interactive | < 3.8s | Lighthouse |
| Total Blocking Time | < 200ms | Lighthouse |

## Conclusion

Performance optimization is an ongoing process. Measure first, optimize second. Focus on changes that have the biggest impact on user experience. Your users will thank you!
