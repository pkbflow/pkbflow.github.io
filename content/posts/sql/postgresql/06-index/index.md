---
title: "[PostgreSQL] Index Scan vs Seq Scan - 인덱스가 있어도 안 쓰는 이유"
date: 2026-04-21T22:50:00+09:00
draft: false

categories: ["sql"]
tags: ["postgresql", "index", "scan", "performance"]

description: "PostgreSQL에서 Index Scan과 Seq Scan의 차이와 선택 기준 정리"
toc: true
---

# Index Scan vs Seq Scan

PostgreSQL에서 인덱스를 생성했다고 해서  
항상 인덱스를 사용하는 것은 아니다.

실행 계획에 따라 Seq Scan이 선택될 수도 있으며,  
오히려 그쪽이 더 빠른 경우도 있다.

---

## 1. Seq Scan이란

Seq Scan은 테이블의 처음부터 끝까지  
모든 데이터를 순차적으로 읽는 방식이다.

- 테이블 전체를 탐색
- 데이터 양이 많을수록 비효율적

하지만 다음과 같은 경우에는 오히려 유리하다.

- 조회 대상 데이터가 많은 경우
- 테이블 크기가 작은 경우

---

## 2. Index Scan이란

Index Scan은 인덱스를 통해  
조건에 맞는 데이터의 위치를 먼저 찾고  
해당 데이터만 조회하는 방식이다.

- 특정 값을 빠르게 찾을 때 유리
- 조회 대상이 적을수록 효율적

---

## 3. PostgreSQL은 어떻게 선택하는가

PostgreSQL은 무조건 인덱스를 사용하는 것이 아니라  
Planner가 비용(cost)을 계산하여 더 효율적인 방법을 선택한다.

즉, 인덱스가 있어도 상황에 따라 Seq Scan이 선택될 수 있다.

---

## 4. 인덱스가 있어도 안 쓰는 이유

### 4.1 조회 대상이 많은 경우

조건에 맞는 데이터가 많다면  
인덱스를 통해 하나씩 접근하는 것보다  
전체를 순차적으로 읽는 것이 더 빠를 수 있다.

---

### 4.2 테이블이 작은 경우

테이블 크기가 작다면  
전체를 읽는 비용이 낮기 때문에  
Seq Scan이 선택될 수 있다.

---

### 4.3 통계 정보가 부정확한 경우

PostgreSQL은 통계 정보를 기반으로 실행 계획을 선택한다.

데이터가 변경되었는데 통계가 갱신되지 않았다면  
비효율적인 실행 계획이 선택될 수 있다.

```sql
ANALYZE users;
```

---

## 5. EXPLAIN ANALYZE로 확인하기

실제 실행 계획은 EXPLAIN ANALYZE로 확인할 수 있다.

```sql
EXPLAIN ANALYZE
SELECT * FROM users WHERE name = 'kim';
```

실행 계획에서 다음을 확인할 수 있다.

- Seq Scan / Index Scan: 선택된 접근 방식
- cost: 예상 비용
- actual time: 실제 수행 시간

---

## 정리

- PostgreSQL은 상황에 따라 Seq Scan과 Index Scan을 선택한다
- 인덱스가 있어도 항상 사용되는 것은 아니다
- 실행 계획은 EXPLAIN ANALYZE로 확인해야 한다