---

title: "[SQL] 실무에서 자주 쓰는 SQL TOP 5"
date: 2026-04-04T21:00:00+09:00
draft: false

categories: ["sql"]
tags: ["sql", "실무", "쿼리", "패턴"]

description: "실무에서 자주 사용하는 SQL 쿼리 패턴 5가지 정리"
toc: true
---------

# 실무에서 자주 쓰는 SQL TOP 5

실제 서비스에서는 단순 조회보다 다양한 조건과 패턴이 함께 사용된다.
자주 사용되는 SQL 패턴을 정리한다.

---

## 1. 최신 데이터 조회

```sql id="t1x9k2"
SELECT *
FROM posts
ORDER BY created_at DESC
LIMIT 10;
```

* 가장 최근 데이터 10개 조회
* 게시판, 로그 조회 등에서 사용

---

## 2. 특정 기간 데이터 조회

```sql id="p4n8d1"
SELECT *
FROM orders
WHERE created_at >= '2026-01-01'
  AND created_at < '2026-02-01';
```

* 기간별 데이터 조회
* 통계, 리포트에서 자주 사용

---

## 3. 중복 제거

```sql id="c7z3m9"
SELECT DISTINCT user_id
FROM orders;
```

* 중복된 값을 제거하고 고유 값만 조회

---

## 4. 그룹별 집계

```sql id="h2k6s4"
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id;
```

* 사용자별 주문 횟수 계산

---

## 5. 조건에 따른 그룹 필터링

```sql id="v8d1p5"
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) >= 3;
```

* 주문이 3건 이상인 사용자 조회

---

## 정리

* ORDER BY + LIMIT → 최신 데이터 조회
* WHERE → 조건 필터링
* DISTINCT → 중복 제거
* GROUP BY → 집계
* HAVING → 그룹 조건 필터링
