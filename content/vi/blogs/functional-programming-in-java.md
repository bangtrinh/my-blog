---
title: "Functional Programming in Java"
date: 2025-10-20T17:00:00+07:00
draft: false
github_link: "https://github.com/bangtrinh/java-tutorials"
author: "Băng Trinh"
tags:
  - Java
  - Functional
  - Lambda
image: /images/blogs/java-functional.png
description: "Tận dụng lambda và streams để viết code theo phong cách functional trong Java."
toc: 
language: vi
---

Java 8 trở đi hỗ trợ lập trình functional với lambda và streams. 

## Ví dụ

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
numbers.stream()
       .map(n -> n * n)
       .forEach(System.out::println);
```

### Mẹo
- `map`, `filter`, `reduce` là những function quan trọng.
- Giúp code gọn, dễ test và maintain.

<hr>

**N.B.** Functional programming trong Java giúp code modular và readable.
