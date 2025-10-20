---
title: "Java Streams Made Easy"
date: 2025-10-20T16:00:00+07:00
draft: false
github_link: "https://github.com/bangtrinh/java-tutorials"
author: "Băng Trinh"
tags:
  - Java
  - Streams
  - Functional Programming
image: /images/blogs/java-streams.png
description: "Học cách sử dụng Java Streams để xử lý dữ liệu dễ dàng."
toc: 
language: vi
---

Java Streams giúp bạn thao tác trên collections một cách dễ dàng và hiệu quả. 

## Stream Basics

Bạn có thể tạo Stream từ List, Set, hoặc Arrays:

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println);
```

### Mẹo
- `map()` để biến đổi dữ liệu.
- `filter()` để lọc.
- `collect()` để gom kết quả lại.

<hr>

**N.B.** Streams giúp viết code ngắn gọn, nhưng hãy nhớ lazy evaluation và tránh side-effect.
