---
title: "Async/Await in JavaScript"
date: 2025-10-20T16:30:00+07:00
draft: false
github_link: "https://github.com/bangtrinh/js-tutorials"
author: "Băng Trinh"
tags:
  - JavaScript
  - Async
  - Promises
categories:
  - JavaScript
image: /images/blogs/js-async.png
description: "Học cách xử lý asynchronous code trong JavaScript dễ dàng với async/await."
toc: 
language: vi
---

Async/Await giúp viết code bất đồng bộ trông như đồng bộ. 

## Ví dụ

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch(err) {
    console.error(err);
  }
}

fetchData();
```

### Mẹo
- Luôn dùng `try/catch` để xử lý lỗi.
- `await` chỉ dùng trong `async` function.

<hr>

**N.B.** Async/await giúp tránh callback hell và code readable hơn.
