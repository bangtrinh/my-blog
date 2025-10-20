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
image: /images/blogs/js-closures.png
description: "Khám phá sức mạnh của closures trong JavaScript."
toc: 
language: vi
---

Closures là một trong những khái niệm mạnh mẽ nhất trong JavaScript. 

## Closure là gì?

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

### Mẹo
- Dùng closures để tạo private variables.
- Tránh lạm dụng closures trong vòng lặp để prevent memory leaks.

<hr>

**N.B.** Closures là chìa khóa để hiểu nhiều pattern trong JS như module hoặc callback.
