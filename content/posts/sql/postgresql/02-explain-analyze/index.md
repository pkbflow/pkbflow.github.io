---

title: "[PostgreSQL] EXPLAIN ANALYZE - 실행 계획 보는 법"
date: 2026-04-05T21:10:00+09:00
draft: false

categories: ["sql"]
tags: ["postgresql", "explain analyze", "실행계획", "성능"]

description: "PostgreSQL에서 EXPLAIN ANALYZE로 실행 계획을 확인하는 방법 정리"
toc: true
---------

# EXPLAIN ANALYZE

EXPLAIN ANALYZE는 SQL이 실제로 어떻게 실행되는지 확인할 때 사용한다.

---

## 1. 필요성

쿼리가 느릴 때는 단순히 SQL만 보는 것으로 원인을 알기 어렵다.

이럴 때 실행 계획을 확인하면
어떤 방식으로 데이터를 조회했는지 파악할 수 있다.

---

## 2. 기본 사용법

```sql
EXPLAIN ANALYZE
SELECT *
FROM users
WHERE name = 'kim';
```

* 실행 계획과 실제 수행 결과를 함께 확인한다

---

## 3. EXPLAIN과 EXPLAIN ANALYZE 차이

### EXPLAIN

```sql
EXPLAIN
SELECT *
FROM users
WHERE name = 'kim';
```

* 실행 예정인 계획을 보여준다
* 실제 실행은 하지 않는다

### EXPLAIN ANALYZE

```sql
EXPLAIN ANALYZE
SELECT *
FROM users
WHERE name = 'kim';
```

* 실제로 쿼리를 실행한다
* 실행 시간과 실제 처리 건수를 함께 보여준다

---

## 4. 자주 보는 항목

### Seq Scan

```text
Seq Scan on users
```

* 테이블을 처음부터 끝까지 읽는 방식
* 데이터가 많으면 느려질 수 있다

### Index Scan

```text
Index Scan using idx_users_name on users
```

* 인덱스를 사용해 데이터를 찾는 방식
* 조건에 맞는 데이터를 빠르게 조회할 수 있다

### cost

* 데이터베이스가 예상한 작업 비용
* 숫자가 작을수록 일반적으로 부담이 적다

### actual time

* 실제 실행 시간
* 예상이 아니라 실제 측정값이다

### rows

* 처리한 행 수
* 예상 rows와 실제 rows 차이가 크면 통계 정보 문제를 의심할 수 있다

---

## 5. 예시

```sql
EXPLAIN ANALYZE
SELECT *
FROM users
WHERE name = 'kim';
```

예상 결과 예시

```text
Seq Scan on users  (cost=0.00..18.10 rows=3 width=40)
  Filter: (name = 'kim'::text)
```

이 경우 name 컬럼에 인덱스가 없다면
전체 테이블을 순차 탐색할 수 있다.

---

## 6. 확인할 때 보는 순서

실행 계획을 볼 때는 다음 순서로 확인하는 것이 좋다.

1. Seq Scan인지 Index Scan인지 확인
2. actual time 확인
3. rows 수 확인
4. 예상과 실제 차이가 큰지 확인

---

## 7. 주의사항

EXPLAIN ANALYZE는 실제로 쿼리를 실행한다.

따라서 UPDATE, DELETE 같은 쿼리에 사용할 때는 주의해야 한다.

---

## 정리

* EXPLAIN ANALYZE는 실행 계획과 실제 수행 결과를 함께 보여준다
* 느린 쿼리의 원인을 파악할 때 사용한다
* Seq Scan, Index Scan, cost, actual time, rows를 우선 확인하면 된다
