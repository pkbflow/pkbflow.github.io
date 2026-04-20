---

title: "[Kubernetes] Deployment 기본"
date: 2026-04-19T21:50:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "deployment", "기초"]

description: "Deployment 개념과 Pod 관리 방법 정리"
toc: true
---------

# Deployment 기본

Deployment는 Pod을 자동으로 관리하는 리소스이다.

---

## 1. Pod의 한계

Pod은 직접 운영하기에 적합하지 않다.

* 장애 발생 시 자동 복구 없음
* Pod 개수 유지 불가능
* 업데이트 관리 어려움

---

## 2. Deployment 역할

Deployment는 Pod을 대신 관리한다.

* Pod 개수 유지 (Replica)
* 장애 발생 시 자동 재생성
* 업데이트 관리

---

## 3. Deployment 생성 (YAML)

```yaml id="q7v3mb"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
```

---

## 4. Deployment 실행

```bash id="t4x8qn"
kubectl apply -f deployment.yaml
```

---

## 5. 상태 확인

```bash id="w9k2pl"
kubectl get deployments
kubectl get pods
```

* 설정한 개수만큼 Pod 생성됨

---

## 6. 주요 기능

### Replica 유지

설정한 Pod 개수를 유지한다.

---

### 자동 복구

Pod이 삭제되면 자동으로 다시 생성된다.

---

### 업데이트 관리

이미지 변경 시 순차적으로 업데이트된다.

---

## 7. 동작 흐름

```text id="v2n6qc"
Deployment → ReplicaSet → Pod
```

---

## 정리

* Deployment는 Pod 관리 리소스
* 개수 유지, 복구, 업데이트 제공
* 실제 운영에서는 Deployment 사용
