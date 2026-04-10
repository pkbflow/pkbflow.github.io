---

title: "[SQL] ORDER BY - 데이터 정렬"
date: 2026-04-03T21:40:00+09:00
draft: false

categories: ["sql"]
tags: ["order by", "정렬", "asc", "desc"]

description: "ORDER BY를 사용한 데이터 정렬 방법 정리"
toc: true
---------

# ORDER BY

ORDER BY는 조회한 데이터를 정렬할 때 사용한다.

---

## 1. 기본 구조

```sql id="m8x2z1"
SELECT 컬럼
FROM 테이블명
ORDER BY 컬럼;
```

---

## 2. 오름차순 (ASC)

```sql id="f3j8k2"
SELECT *
FROM users
ORDER BY age ASC;
```

* age 기준으로 작은 값부터 정렬한다
* ASC는 기본값이므로 생략 가능하다

---

## 3. 내림차순 (DESC)

```sql id="k2p9s4"
SELECT *
FROM users
ORDER BY age DESC;
```

* age 기준으로 큰 값부터 정렬한다

---

## 4. 여러 컬럼 정렬

```sql id="n7c1d8"
SELECT *
FROM users
ORDER BY age DESC, name ASC;
```

* age 기준 정렬 후 name 기준으로 정렬한다

---

## 정리

* ORDER BY는 데이터를 정렬할 때 사용한다
* ASC, DESC를 통해 정렬 방향을 지정한다
* 여러 컬럼 기준으로 정렬할 수 있다
