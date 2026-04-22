---

title: "[Kubernetes] kubectl 기본 사용법"
date: 2026-04-19T21:30:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "kubectl", "기초"]

description: "kubectl 명령어와 기본 사용 방법 정리"
toc: true
---

# kubectl 기본 사용법

kubectl은 Kubernetes 클러스터를 제어하는 명령어 도구이다.

---

## 1. kubectl 역할

kubectl은 Kubernetes에 명령을 전달한다.

```text id="r4m2kc"
kubectl → API Server → Kubernetes 동작
```

---

## 2. 기본 명령어

### 리소스 조회

```bash id="y1r7ka"
kubectl get pods
```

* 현재 실행 중인 Pod 목록 조회

---

### 리소스 생성

```bash id="h3k9qp"
kubectl apply -f file.yaml
```

* YAML 파일을 기반으로 리소스 생성

---

### 상세 정보 확인

```bash id="d8t2mv"
kubectl describe pod <pod-name>
```

* Pod 상태 및 이벤트 확인

---

### 로그 확인

```bash id="p6x4zn"
kubectl logs <pod-name>
```

* 컨테이너 로그 확인

---

## 3. 사용 흐름

```text id="k9d2qp"
YAML 작성 → kubectl apply → 리소스 생성 → 상태 확인
```

---

## 정리

* kubectl은 Kubernetes 제어 도구
* 모든 요청은 API Server를 통해 전달
* 리소스 생성, 조회, 로그 확인 가능
