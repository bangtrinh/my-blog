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
description: "Học cách tổ chức code bằng ES6 modules trong JavaScript."
toc: 
language: vi
---

Modules giúp tách code thành các file reusable.

## Ví dụ

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

**N.B.** Modules giúp tránh global scope pollution và tăng maintainability.
