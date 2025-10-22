---
title: "Understanding JavaScript Closures"
date: 2025-10-20T16:10:00+07:00
draft: false
github_link: "https://github.com/bangtrinh/js-tutorials"
author: "Băng Trinh"
tags:
  - JavaScript
  - Closures
  - Functions
categories:
  - JavaScript
image: /images/blogs/js-closures.png
description: "Discover the power of closures in JavaScript."
toc: 
language: en
---

Closures are one of the most powerful concepts in JavaScript. 

## What is a Closure?

Closure là khi một function nhớ được scope bên ngoài nó ngay cả khi function đó được gọi ở nơi khác:

```javascript
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### Tip
- Use closures to create private variables.
- Avoid overusing closures inside loops to prevent memory leaks.

<hr>

**N.B.** Closures are the key to understanding many JS patterns such as modules or callbacks.
