---
title: "JavaScript Event Loop Demystified"
date: 2025-10-20T16:50:00+07:00
draft: false
github_link: "https://github.com/bangtrinh/js-tutorials"
author: "Băng Trinh"
tags:
  - JavaScript
  - Event Loop
  - Async
categories:
  - JavaScript
image: /images/blogs/eventloop.png
description: "Understand the event loop mechanism to handle async code in JavaScript."
toc: 
language: en
---

The Event Loop is the heart of the JS runtime. 

## How it Works

- **Call Stack**: Nơi lưu function đang chạy.
- **Message Queue**: Nơi lưu callback.
- **Event Loop**: Kiểm tra stack rỗng để xử lý queue.

```javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');
```

### Output
```
Start
End
Timeout
```

<hr>

**N.B.** Understanding the event loop makes debugging async code and promise chaining easier.
