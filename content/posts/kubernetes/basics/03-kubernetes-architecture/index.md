---

title: "[Kubernetes] Kubernetes Architecture"
date: 2026-04-19T21:20:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "architecture", "기초"]

description: "Kubernetes 구조와 주요 구성 요소 정리"
toc: true
---------

# Kubernetes Architecture

Kubernetes는 여러 서버를 하나의 클러스터로 구성하여 컨테이너를 관리한다.

---

## 1. 전체 구조

Kubernetes는 다음과 같이 구성된다.

```text id="x9u2ab"
Control Plane + Worker Node
```

---

## 2. Control Plane

클러스터를 관리하는 영역이다.

주요 구성 요소

* API Server
* Scheduler
* etcd

---

### API Server

모든 요청을 처리하는 진입점

---

### Scheduler

Pod을 어떤 Node에 배치할지 결정

---

### etcd

클러스터 상태를 저장하는 저장소

---

## 3. Worker Node

실제 컨테이너가 실행되는 영역이다.

주요 구성 요소

* kubelet
* kube-proxy
* container runtime

---

### kubelet

Node에서 Pod 실행을 관리

---

### kube-proxy

네트워크 및 통신 처리

---

### container runtime

컨테이너 실행 (예: Docker)

---

## 4. 동작 흐름

```text id="7d9qpl"
kubectl → API Server → Scheduler → Node → Pod 실행
```

---

## 정리

* Control Plane은 관리 영역
* Worker Node는 실행 영역
* 모든 요청은 API Server를 통해 처리
