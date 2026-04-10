---

title: "[SQL] 게시판 페이징 쿼리 제대로 구현하기"
date: 2026-04-04T21:10:00+09:00
draft: false

categories: ["sql"]
tags: ["sql", "페이징", "limit", "offset", "실무"]

description: "게시판에서 사용하는 페이징 쿼리 구현 방법과 LIMIT, OFFSET 활용"
toc: true
---------

# 게시판 페이징 쿼리

게시판에서는 한 번에 모든 데이터를 조회하지 않고
일정 개수만 나누어 조회한다.

---

## 1. 기본 구조

```sql id="p8x1m2"
SELECT *
FROM posts
ORDER BY id DESC
LIMIT 10 OFFSET 0;
```

* 최신 글 10개 조회
* OFFSET은 시작 위치를 의미한다

---

## 2. 페이지별 조회

### 1페이지

```sql id="a4k9d3"
SELECT *
FROM posts
ORDER BY id DESC
LIMIT 10 OFFSET 0;
```

---

### 2페이지

```sql id="k7n2x1"
SELECT *
FROM posts
ORDER BY id DESC
LIMIT 10 OFFSET 10;
```

---

### 3페이지

```sql id="z3p8c6"
SELECT *
FROM posts
ORDER BY id DESC
LIMIT 10 OFFSET 20;
```

---

## 3. OFFSET 계산

```text
OFFSET = (페이지 번호 - 1) * 페이지 크기
```

* 페이지 크기: 한 페이지에 보여줄 데이터 수

---

## 4. 문제점

OFFSET 방식은 페이지가 뒤로 갈수록 느려질 수 있다.

* OFFSET 10000 → 앞의 10000개를 건너뜀
* 데이터가 많을수록 성능 저하 발생

---

## 5. 개선 방법 (Keyset Pagination)

```sql id="f6x2d8"
SELECT *
FROM posts
WHERE id < 100
ORDER BY id DESC
LIMIT 10;
```

* 마지막으로 조회한 id 기준으로 다음 페이지 조회
* 성능이 안정적이다

---

## 정리

* LIMIT, OFFSET으로 페이징 구현 가능
* OFFSET은 데이터가 많아질수록 느려질 수 있음
* 실무에서는 Keyset Pagination 방식도 고려해야 한다
