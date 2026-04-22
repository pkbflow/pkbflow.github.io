---

title: "[Kubernetes] Kubernetes란 무엇인가"
date: 2026-04-19T21:00:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "기초", "입문"]

description: "Kubernetes 개념과 왜 필요한지 정리"
toc: true
---

# Kubernetes란 무엇인가

Kubernetes는 컨테이너를 자동으로 관리하는 시스템이다.

---

## 1. 왜 필요한가

애플리케이션 규모가 커지면 다음과 같은 문제가 발생한다.

* 트래픽 증가
* 서버 장애
* 여러 서버에 배포 필요
* 수동 운영의 한계

---

## 2. Docker의 한계

Docker는 컨테이너 실행 도구이다.

하지만 다음과 같은 기능은 제공하지 않는다.

* 자동 스케일링
* 장애 복구
* 분산 배포

---

## 3. Kubernetes 역할

Kubernetes는 컨테이너 운영을 자동화한다.

주요 기능

* 자동 배포
* 자동 스케일링
* 자동 복구

---

## 4. 핵심 개념

Kubernetes는 다음 3가지로 구성된다.

### Pod

컨테이너 실행 단위

### Deployment

Pod 관리 (개수 유지, 재시작)

### Service

외부에서 접근하는 통로

---

## 5. 동작 흐름

```text
사용자 → Service → Deployment → Pod → Container
```

---

## 정리

* Kubernetes는 컨테이너를 관리하는 시스템
* Docker는 실행, Kubernetes는 운영
* 자동화된 배포와 복구를 제공
