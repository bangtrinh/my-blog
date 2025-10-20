---
title: "Java 17 Features You Must Know"
date: 2025-10-20T16:40:00+07:00
draft: false
github_link: "https://github.com/bangtrinh/java-tutorials"
author: "Băng Trinh"
tags:
  - Java
  - Java17
  - NewFeatures
image: /images/blogs/java17.png
description: "Những tính năng mới thú vị trong Java 17 bạn nên thử."
toc: 
language: vi
---

Java 17 mang đến nhiều cải tiến hữu ích. 

## Nổi bật

- **Sealed Classes**: Giới hạn class con.
- **Records**: Data class ngắn gọn.
- **Pattern Matching for switch**: Dễ đọc hơn.

```java
record Point(int x, int y) {}
Point p = new Point(1, 2);
System.out.println(p.x());
```

<hr>

**N.B.** Cập nhật lên Java 17 để tận dụng các tính năng hiện đại và tối ưu code.
