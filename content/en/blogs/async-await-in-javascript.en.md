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
image: /images/blogs/js-async.png
description: "Learn how to handle asynchronous code in JavaScript easily with async/await."
toc: 
language: en
---

Async/Await lets you write asynchronous code that looks synchronous. 

## Example

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

### Tip
- Always use `try/catch` for error handling.
- `await` chỉ dùng trong `async` function.

<hr>

**N.B.** Async/await helps avoid callback hell and makes the code more readable.
