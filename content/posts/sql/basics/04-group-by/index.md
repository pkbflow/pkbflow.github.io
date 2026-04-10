---

title: "[SQL] GROUP BY - 데이터 그룹화와 집계"
date: 2026-04-03T21:30:00+09:00
draft: false

categories: ["sql"]
tags: ["group by", "집계", "count", "sum"]

description: "GROUP BY를 사용한 데이터 그룹화와 집계 함수 정리"
toc: true
---------

# GROUP BY

GROUP BY는 데이터를 그룹으로 묶고 집계할 때 사용한다.

---

## 1. 필요성

데이터를 단순 조회하는 것만으로는 부족한 경우가 있다.

예를 들어, 부서별 인원 수를 알고 싶은 경우를 생각해볼 수 있다.

---

## 2. 기본 구조

```sql id="n2g7dp"
SELECT 컬럼, 집계함수
FROM 테이블명
GROUP BY 컬럼;
```

---

## 3. COUNT

```sql id="6q0n0k"
SELECT department, COUNT(*)
FROM employees
GROUP BY department;
```

* 부서별 인원 수를 계산한다

결과

| department | count |
| ---------- | ----- |
| dev        | 3     |
| sales      | 2     |

---

## 4. SUM

```sql id="h3w9f1"
SELECT department, SUM(salary)
FROM employees
GROUP BY department;
```

* 부서별 급여 합계를 계산한다

---

## 5. AVG

```sql id="o8m2cz"
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

* 부서별 평균 급여를 계산한다

---

## 6. 주의사항

GROUP BY를 사용할 때는
SELECT에 포함된 컬럼이 GROUP BY에 포함되어야 한다.

```sql id="z3d8qv"
SELECT department, COUNT(*)
FROM employees
GROUP BY department;
```

---

## 정리

* GROUP BY는 데이터를 그룹화할 때 사용한다
* COUNT, SUM, AVG와 같은 집계 함수와 함께 사용한다
* 데이터 분석 및 통계에서 자주 사용된다
