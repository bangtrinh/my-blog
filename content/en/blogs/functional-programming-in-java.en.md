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
categories:
  - Java
image: /images/blogs/java-functional.png
description: "Leverage lambda and streams to write code in a functional style in Java."
toc: 
language: en
---

From Java 8 onwards, functional programming is supported with lambda and streams. 

## Example

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
numbers.stream()
       .map(n -> n * n)
       .forEach(System.out::println);
```

### Tip
- `map`, `filter`, `reduce` are important functions.
- Makes code cleaner, easier to test and maintain.

<hr>

**N.B.** Functional programming in Java make code modular and readable.
