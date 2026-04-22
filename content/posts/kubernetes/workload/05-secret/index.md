---

title: "[Kubernetes] Secret 기본"
date: 2026-04-19T22:30:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "secret", "workload"]

description: "Secret 개념과 민감 정보 관리 방법 정리"
toc: true
---

# Secret 기본

Secret은 민감한 데이터를 저장하기 위한 리소스이다.

---

## 1. Secret이 필요한 이유

ConfigMap은 일반 설정을 저장한다.

하지만 다음과 같은 데이터는 별도로 관리해야 한다.

* 비밀번호
* API 키
* 토큰

---

## 2. Secret 역할

Secret은 민감한 정보를 안전하게 관리한다.

* 데이터 분리
* 접근 제어
* 보안 강화

---

## 3. Secret 생성 (YAML)

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  DB_PASSWORD: cGFzc3dvcmQ=
```

---

## 4. Pod에서 사용 (환경 변수)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secret-pod
spec:
  containers:
  - name: app
    image: nginx
    env:
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: app-secret
          key: DB_PASSWORD
```

---

## 5. 적용

```bash
kubectl apply -f secret.yaml
```

---

## 6. 확인

```bash
kubectl get secret
```

---

## 7. 특징

* Base64 인코딩 저장
* 민감 정보 관리 용도
* ConfigMap과 유사하지만 보안 목적

---

## 정리

* Secret은 민감한 데이터 저장 리소스
* 환경 변수로 주입 가능
* ConfigMap과 용도 구분 필요
