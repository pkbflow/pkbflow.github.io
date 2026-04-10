---

title: "[SQL] LIMIT - 조회 개수 제한"
date: 2026-04-03T21:50:00+09:00
draft: false

categories: ["sql"]
tags: ["limit", "offset", "페이징"]

description: "LIMIT과 OFFSET을 사용한 데이터 조회 개수 제한"
toc: true
---------

# LIMIT

LIMIT은 조회할 데이터의 개수를 제한할 때 사용한다.

---

## 1. 기본 구조

```sql id="d8a4m1"
SELECT 컬럼
FROM 테이블명
LIMIT 개수;
```

---

## 2. 기본 사용

```sql id="x3k9p2"
SELECT *
FROM users
LIMIT 5;
```

* 최대 5개의 데이터만 조회한다

---

## 3. OFFSET

```sql id="b7n2q9"
SELECT *
FROM users
LIMIT 5 OFFSET 5;
```

* 앞의 5개를 건너뛰고 다음 5개를 조회한다

---

## 4. 페이징 예시

```sql id="p4s6d3"
SELECT *
FROM users
ORDER BY id DESC
LIMIT 10 OFFSET 0;
```

* 최신 데이터 10개 조회

---

## 정리

* LIMIT은 조회 개수를 제한한다
* OFFSET과 함께 사용하면 페이징 구현이 가능하다
* ORDER BY와 함께 사용하는 것이 일반적이다
