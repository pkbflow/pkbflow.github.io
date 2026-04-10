---
title: "[SQL] SELECT 기본 - 데이터 조회"
date: 2026-04-03T21:00:00+09:00
draft: false

categories: ["sql"]
tags: ["select", "기초", "조회"]

description: "SQL SELECT 기본 문법과 데이터 조회 방법 정리"
toc: true
---

# SELECT 기본

SELECT는 데이터베이스에서 데이터를 조회할 때 사용하는 기본 문법이다.

---

## 1. 기본 구조

```sql
SELECT 컬럼명
FROM 테이블명;
```

---

## 2. 전체 데이터 조회

```sql
SELECT *
FROM users;
```

* 모든 컬럼을 조회한다
* 테스트 용도 외에는 사용을 지양하는 것이 좋다

---

## 3. 특정 컬럼 조회

```sql
SELECT name, age
FROM users;
```

* 필요한 컬럼만 선택한다
* 가독성과 성능 측면에서 유리하다

---

## 4. 예제

| id | name | age |
| -- | ---- | --- |
| 1  | kim  | 20  |
| 2  | lee  | 25  |

```sql
SELECT name
FROM users;
```

결과

| name |
| ---- |
| kim  |
| lee  |

---

## 정리

* SELECT는 데이터를 조회하는 기본 문법
* 필요한 컬럼만 조회하는 것이 중요
* 이후 모든 SQL 문법의 기반이 된다
