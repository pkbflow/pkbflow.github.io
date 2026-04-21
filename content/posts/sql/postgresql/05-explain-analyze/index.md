---
title: "[PostgreSQL] EXPLAIN ANALYZE - 실행 계획 확인하기"
date: 2026-04-21T22:40:00+09:00
draft: false

categories: ["sql"]
tags: ["postgresql", "explain", "analyze", "performance"]

description: "EXPLAIN ANALYZE를 통해 PostgreSQL 실행 계획을 분석하는 방법"
toc: true
---

# EXPLAIN ANALYZE

PostgreSQL에서 쿼리 성능을 분석하기 위해  
실행 계획(Execution Plan)을 확인하는 것이 중요하다.

EXPLAIN ANALYZE는 쿼리가 실제로 어떻게 실행되는지 보여주는 도구이다.

---

## 1. EXPLAIN vs EXPLAIN ANALYZE

두 명령어는 다음과 같은 차이가 있다.

- EXPLAIN: 실행 계획 예측 (실행하지 않음)
- EXPLAIN ANALYZE: 실제 실행 후 결과와 시간까지 표시

실제 성능을 확인하려면 EXPLAIN ANALYZE를 사용해야 한다.

---

## 2. 기본 사용법

```sql
EXPLAIN ANALYZE
SELECT * FROM users WHERE name = 'kim';
```

이 명령어를 실행하면  
쿼리의 실행 방식과 수행 시간이 함께 출력된다.

---

## 3. 실행 계획 예시

```text
Seq Scan on users  (cost=0.00..35.50 rows=10 width=100)
(actual time=0.01..0.50 rows=10 loops=1)
```

---

## 4. 주요 항목

실행 계획에서 자주 확인하는 항목은 다음과 같다.

- Seq Scan / Index Scan: 데이터 접근 방식
- cost: Planner가 계산한 예상 비용
- rows: 예상 결과 행 수
- actual time: 실제 실행 시간
- loops: 반복 횟수

---

## 5. 왜 중요한가

쿼리가 느릴 때 단순히 인덱스를 추가하기보다  
먼저 실행 계획을 확인해야 한다.

- 어떤 방식으로 데이터를 읽는지
- 예상과 실제 수행 시간이 차이가 있는지

이 정보를 통해 정확한 원인을 파악할 수 있다.

---

## 정리

- EXPLAIN ANALYZE는 쿼리 실행 계획을 확인하는 도구이다
- 실제 실행 결과와 시간을 함께 확인할 수 있다
- 성능 문제 분석의 출발점이다