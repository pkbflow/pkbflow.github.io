---

title: "[SQL] HAVING - 그룹 조건 필터링"
date: 2026-04-03T22:00:00+09:00
draft: false

categories: ["sql"]
tags: ["having", "group by", "조건"]

description: "HAVING을 사용한 그룹 결과 조건 필터링"
toc: true
---------

# HAVING

HAVING은 GROUP BY로 묶인 결과에 조건을 적용할 때 사용한다.

---

## 1. 필요성

GROUP BY 이후 조건을 적용해야 하는 경우가 있다.

---

## 2. 기본 구조

```sql id="s2f8k1"
SELECT 컬럼, 집계함수
FROM 테이블명
GROUP BY 컬럼
HAVING 조건;
```

---

## 3. 예제

```sql id="j4k7d2"
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2;
```

* 인원이 2명 이상인 부서만 조회한다

---

## 4. WHERE vs HAVING

```sql id="t9p3n5"
-- WHERE
SELECT *
FROM employees
WHERE salary > 3000;

-- HAVING
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2;
```

* WHERE: 그룹화 이전 조건
* HAVING: 그룹화 이후 조건

---

## 정리

* HAVING은 GROUP BY 결과에 조건을 적용한다
* 집계 함수와 함께 사용한다
* WHERE와 역할이 다르다
