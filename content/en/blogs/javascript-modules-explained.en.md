---
title: "JavaScript Modules Explained"
date: 2025-10-20T17:10:00+07:00
draft: false
github_link: "https://github.com/bangtrinh/js-tutorials"
author: "Băng Trinh"
tags:
  - JavaScript
  - Modules
  - ES6
categories:
  - JavaScript
image: /images/blogs/js-module.png
description: "Learn how to organize your code using ES6 modules in JavaScript."
toc: 
language: en
---

Modules help split your code into reusable files.

## Example

`math.js`
```javascript
export function add(a, b) { return a + b; }
export function sub(a, b) { return a - b; }
```

`app.js`
```javascript
import { add } from './math.js';
console.log(add(2,3)); // 5
```

<hr>

**N.B.** Modules help prevent global scope pollution and improve maintainability.
