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
description: "Hiểu rõ cơ chế event loop để xử lý async code trong JavaScript."
toc: 
language: vi
---

Event Loop là trái tim của JS runtime. 

## Nguyên lý hoạt động

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

**N.B.** Hiểu event loop giúp debug async code và promise chaining dễ dàng hơn.
