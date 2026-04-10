---
title: "[SQL] JOIN - 여러 테이블 조회"
date: 2026-04-03T21:20:00+09:00
draft: false

categories: ["sql"]
tags: ["join", "inner join", "left join"]

description: "SQL JOIN 개념과 INNER JOIN, LEFT JOIN 정리"
toc: true
---

# JOIN

JOIN은 여러 테이블을 함께 조회할 때 사용한다.

---

## 1. 필요성

데이터는 여러 테이블로 나뉘어 저장된다.

### users

| id | name |
| -- | ---- |
| 1  | kim  |
| 2  | lee  |

### orders

| id | user_id | amount |
| -- | ------- | ------ |
| 1  | 1       | 10000  |
| 2  | 1       | 20000  |
| 3  | 2       | 15000  |

두 테이블의 데이터를 함께 조회해야 하는 경우가 있다.

---

## 2. 기본 구조

```sql
SELECT 컬럼
FROM 테이블1
JOIN 테이블2 ON 조건;
```

---

## 3. INNER JOIN

```sql
SELECT u.name, o.amount
FROM users u
JOIN orders o ON u.id = o.user_id;
```

결과

| name | amount |
| ---- | ------ |
| kim  | 10000  |
| kim  | 20000  |
| lee  | 15000  |

---

## 4. 테이블 별칭

```sql
FROM users u
JOIN orders o
```

* u는 users를 의미한다
* o는 orders를 의미한다
* 쿼리를 간결하게 만든다

---

## 5. LEFT JOIN

```sql
SELECT u.name, o.amount
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
```

* 왼쪽 테이블의 모든 데이터를 유지한다

---

## 정리

* JOIN은 여러 테이블을 함께 조회하는 방법
* ON 조건으로 테이블을 연결한다
* INNER JOIN, LEFT JOIN이 가장 많이 사용된다
