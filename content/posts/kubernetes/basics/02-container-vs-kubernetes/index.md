---

title: "[Kubernetes] Container vs Kubernetes"
date: 2026-04-19T21:10:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "docker", "기초"]

description: "Docker와 Kubernetes의 차이와 역할 정리"
toc: true
---

# Container vs Kubernetes

Container와 Kubernetes는 역할이 다르다.

---

## 1. Container 역할

Container는 애플리케이션 실행 환경이다.

대표적으로 Docker가 있다.

```bash
docker run nginx
```

* 컨테이너 실행 가능
* 환경 격리 제공
* 배포 단순화

---

## 2. Container 한계

Container만으로는 운영에 한계가 있다.

* 여러 개 실행 시 관리 어려움
* 장애 발생 시 수동 복구
* 서버 간 분산 처리 불편
* 스케일링 수동 처리

---

## 3. Kubernetes 역할

Kubernetes는 컨테이너를 관리한다.

```text id="t2p9s1"
Container 실행 → Docker
Container 관리 → Kubernetes
```

---

## 4. 주요 차이

| 구분    | Container | Kubernetes |
| ----- | --------- | ---------- |
| 역할    | 실행        | 관리         |
| 스케일링  | 수동        | 자동         |
| 장애 복구 | 없음        | 자동         |
| 운영 범위 | 단일        | 클러스터       |

---

## 5. 사용 흐름

```text id="n8d3xq"
Docker로 컨테이너 생성 → Kubernetes로 운영
```

---

## 정리

* Container는 실행 도구
* Kubernetes는 관리 시스템
* 둘은 대체 관계가 아니라 보완 관계
