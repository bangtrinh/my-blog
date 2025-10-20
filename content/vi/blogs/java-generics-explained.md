---
title: "Java Generics Explained"
date: 2025-10-20T16:20:00+07:00
draft: false
github_link: "https://github.com/bangtrinh/java-tutorials"
author: "Băng Trinh"
tags:
  - Java
  - Generics
  - Type Safety
image: /images/blogs/java-generic.png
description: "Tìm hiểu về generics và cách chúng giúp code an toàn hơn."
toc: 
language: vi
---

Generics giúp code Java an toàn kiểu dữ liệu và dễ bảo trì. 

## Vì sao cần sử dụng Generics?

```java
List<String> names = new ArrayList<>();
names.add("Alice");
// names.add(10); // Lỗi biên dịch!
```

### Mẹo
- Sử dụng `<T>` cho class hoặc method.
- Giúp tránh casting thủ công.

<hr>

**N.B.** Generics tăng type-safety nhưng không thể sử dụng với primitive types trực tiếp.
