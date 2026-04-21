---
title: "[SQL] WHERE 절 - 조건으로 데이터 필터링"
date: 2026-04-03T21:10:00+09:00
draft: false

categories: ["sql"]
tags: ["where", "조건", "필터링"]

description: "WHERE 절을 사용한 조건 검색과 연산자 정리"
toc: true
---

# WHERE 절

WHERE는 조건에 맞는 데이터만 조회할 때 사용한다.

---

## 1. 기본 구조

```sql
SELECT 컬럼명
FROM 테이블명
WHERE 조건;
```

---

## 2. 기본 조건 조회

```sql
SELECT *
FROM users
WHERE age >= 20;
```

* age가 20 이상인 데이터만 조회한다

---

## 3. 비교 연산자

* = : 같다
* != : 같지 않다
* > : 크다
* < : 작다
* > = : 크거나 같다
* <= : 작거나 같다

```sql
SELECT *
FROM users
WHERE age < 30;
```

---

## 4. AND / OR 조건

```sql
SELECT *
FROM users
WHERE age >= 20 AND age <= 30;
```

```sql
SELECT *
FROM users
WHERE name = 'kim' OR name = 'lee';
```

---

## 5. LIKE

```sql
SELECT *
FROM users
WHERE name LIKE 'k%';
```

* k로 시작하는 문자열을 조회한다

---

## 6. 예제

| id | name | age |
| -- | ---- | --- |
| 1  | kim  | 20  |
| 2  | lee  | 25  |
| 3  | park | 30  |

```sql
SELECT name
FROM users
WHERE age >= 25;
```

결과

| name |
| ---- |
| lee  |
| park |

---

## 정리

* WHERE는 조건을 통해 데이터를 필터링한다
* 비교 연산자와 함께 사용한다
* SELECT와 함께 사용하는 핵심 문법
