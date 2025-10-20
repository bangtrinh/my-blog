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
description: "Learn about generics and how they make your code safer."
toc: 
language: en
---

Generics make Java code type-safe and easier to maintain. 

## Why Use Generics?

```java
List<String> names = new ArrayList<>();
names.add("Alice");
// names.add(10); // Lỗi biên dịch!
```

### Tip
- Use <T> for classes or methods.
- Helps avoid manual casting.

<hr>

**N.B.** Generics improve type-safety but cannot be used directly with primitive types.
