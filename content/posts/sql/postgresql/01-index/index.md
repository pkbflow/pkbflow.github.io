---

title: "[SQL] INDEX 기본 개념 - 왜 필요한가"
date: 2026-04-05T21:00:00+09:00
draft: false

categories: ["sql"]
tags: ["index", "인덱스", "성능", "database"]

description: "SQL 인덱스의 개념과 필요성, 기본 동작 원리 정리"
toc: true
---------

# INDEX

INDEX는 데이터 조회 성능을 향상시키기 위한 구조이다.

---

## 1. 필요성

데이터가 적을 때는 문제가 없지만
데이터가 많아질수록 조회 속도는 느려진다.

```sql id="k3n9d1"
SELECT *
FROM users
WHERE name = 'kim';
```

* 데이터가 많을 경우 전체 테이블을 탐색하게 된다

---

## 2. 인덱스 없이 조회

인덱스가 없는 경우, 데이터베이스는 모든 데이터를 확인한다.

* Full Scan 발생
* 데이터 양이 많을수록 성능 저하

---

## 3. 인덱스의 역할

인덱스는 특정 컬럼을 기준으로 정렬된 구조를 만든다.

* 빠르게 위치를 찾을 수 있음
* 전체 탐색을 하지 않아도 됨

---

## 4. 인덱스 생성

```sql id="f8m2x7"
CREATE INDEX idx_users_name
ON users(name);
```

* name 컬럼 기준으로 인덱스 생성

---

## 5. 주의사항

인덱스는 무조건 좋은 것은 아니다.

* INSERT, UPDATE, DELETE 성능 저하 가능
* 저장 공간 추가 사용

---

## 정리

* INDEX는 조회 성능을 개선하기 위한 구조
* 전체 탐색을 줄이고 빠르게 데이터를 찾는다
* 쓰기 작업에는 영향을 줄 수 있다
