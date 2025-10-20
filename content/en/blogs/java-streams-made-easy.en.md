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
description: "Learn how to use Java Streams to process data easily."
toc: 
language: en
---

Java Streams allow you to manipulate collections easily and efficiently. 

## Stream Basics

Bạn có thể tạo Stream từ List, Set, hoặc Arrays:

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println);
```

### Tip
- `map()` to transform data.
- `filter()` to filter data.
- `collect()`to gather the results.

<hr>

**N.B.** Streams help write concise code, but remember lazy evaluation and avoid side effects.
