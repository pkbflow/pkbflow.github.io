---
title: "[PostgreSQL] PostgreSQL 아키텍처 기본 구조"
date: 2026-04-21T22:20:00+09:00
draft: false

categories: ["sql"]
tags: ["postgresql", "architecture", "database"]

description: "PostgreSQL의 기본 아키텍처와 동작 구조 정리"
toc: true
---

# PostgreSQL 아키텍처

PostgreSQL은 클라이언트 요청을 처리하기 위해  
프로세스, 메모리, 디스크 구조를 기반으로 동작한다.

이 구조를 이해하면 쿼리 성능이나 트러블슈팅에 큰 도움이 된다.

---

## 1. 전체 구조

PostgreSQL은 크게 다음과 같은 구조로 이루어진다.

- Client
- Server Process
- Memory
- Disk

클라이언트가 요청을 보내면  
서버 프로세스가 이를 처리하고,  
메모리와 디스크를 활용하여 결과를 반환한다.

---

## 2. Client

Client는 PostgreSQL에 쿼리를 요청하는 주체이다.

예를 들어 다음과 같은 도구가 Client 역할을 한다.

- psql (CLI)
- 애플리케이션 (Spring, Node.js 등)

---

## 3. Server Process

PostgreSQL은 프로세스 기반 구조를 사용한다.

주요 프로세스는 다음과 같다.

- Postmaster: 전체 서버 관리
- Backend Process: 클라이언트 요청 처리

클라이언트가 접속할 때마다  
새로운 Backend Process가 생성되어 요청을 처리한다.

---

## 4. Memory 구조

PostgreSQL은 성능을 위해 메모리를 사용한다.

대표적인 메모리 영역은 다음과 같다.

- shared_buffers: 디스크 데이터를 캐싱
- work_mem: 정렬 및 연산 작업에 사용

메모리를 적절히 활용하면 디스크 접근을 줄여 성능을 향상시킬 수 있다.

---

## 5. Disk 구조

실제 데이터는 디스크에 저장된다.

- Data File: 테이블 및 인덱스 데이터
- WAL (Write-Ahead Log): 변경 사항 기록

WAL은 장애 발생 시 데이터 복구를 가능하게 한다.

---

## 6. 동작 흐름

간단한 동작 흐름은 다음과 같다.

1. Client가 쿼리 요청
2. Backend Process가 쿼리 처리
3. Memory에서 데이터 확인
4. 없으면 Disk에서 읽음
5. 결과를 Client에 반환

---

## 정리

- PostgreSQL은 Client / Process / Memory / Disk 구조로 동작한다
- 프로세스 기반 구조로 클라이언트 요청을 처리한다
- 메모리와 디스크를 활용해 성능과 안정성을 확보한다