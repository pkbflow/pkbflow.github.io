---

title: "[Kubernetes] Pod 기본"
date: 2026-04-19T21:40:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "pod", "기초"]

description: "Pod 개념과 기본 사용 방법 정리"
toc: true
---

# Pod 기본

Pod은 Kubernetes에서 컨테이너를 실행하는 최소 단위이다.

---

## 1. Pod 개념

Pod은 하나 이상의 컨테이너를 포함한다.

* 보통 하나의 컨테이너를 실행
* 동일한 네트워크(IP) 공유
* 함께 생성되고 함께 종료됨

---

## 2. Pod이 필요한 이유

Kubernetes는 컨테이너를 직접 실행하지 않는다.

→ 반드시 Pod 단위로 실행된다.

---

## 3. Pod 생성 (YAML)

```yaml id="n2k7qm"
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 80
```

---

## 4. Pod 실행

```bash id="m5p8zt"
kubectl apply -f pod.yaml
```

---

## 5. 상태 확인

```bash id="x3v9ql"
kubectl get pods
```

---

## 6. Pod 특징

* IP는 생성 시 부여됨
* 재시작 시 IP 변경 가능
* 직접 관리하지 않고 상위 리소스로 관리

---

## 7. 한계

Pod은 직접 운영하기에는 적합하지 않다.

* 장애 시 자동 복구 없음
* 개수 유지 불가능
* 업데이트 어려움

---

## 정리

* Pod은 컨테이너 실행 단위
* Kubernetes는 Pod 단위로 동작
* 실제 운영에서는 Deployment 사용
