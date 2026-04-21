---
title: "[PostgreSQL] 쿼리 실행 과정 (Parser / Planner / Executor)"
date: 2026-04-21T22:30:00+09:00
draft: false

categories: ["sql"]
tags: ["postgresql", "query", "execution"]

description: "PostgreSQL에서 쿼리가 실행되는 과정과 내부 흐름 정리"
toc: true
---

# PostgreSQL 쿼리 실행 과정

PostgreSQL은 클라이언트로부터 SQL을 전달받으면  
여러 단계를 거쳐 쿼리를 실행한다.

이 과정을 이해하면 성능 문제를 분석하는 데 큰 도움이 된다.

---

## 1. 전체 흐름

PostgreSQL의 쿼리 실행 과정은 다음과 같다.

1. Parser
2. Planner (Optimizer)
3. Executor

---

## 2. Parser

Parser는 SQL 문장을 분석하는 단계이다.

- SQL 문법 검사
- Parse Tree 생성

문법 오류가 있는 경우 이 단계에서 에러가 발생한다.

---

## 3. Planner (Optimizer)

Planner는 실행 계획을 결정하는 단계이다.

- 여러 실행 방법 중 비용(cost)이 가장 낮은 방법 선택
- Seq Scan / Index Scan 여부 결정

이 단계에서 쿼리 성능이 크게 좌우된다.

---

## 4. Executor

Executor는 실제로 쿼리를 수행하는 단계이다.

- 디스크 또는 메모리에서 데이터 읽기
- 결과를 클라이언트에 반환

Planner가 선택한 실행 계획을 그대로 수행한다.

---

## 5. 간단한 예시

```sql
SELECT * FROM users WHERE name = 'kim';
```

이 쿼리는 다음과 같은 흐름으로 처리된다.

1. Parser가 SQL을 분석
2. Planner가 실행 계획 선택 (Index Scan 또는 Seq Scan)
3. Executor가 실제 데이터를 조회

---

## 정리

- PostgreSQL은 Parser → Planner → Executor 단계로 쿼리를 실행한다
- 성능은 주로 Planner 단계에서 결정된다
- 실행 과정을 이해하면 성능 분석에 도움이 된다