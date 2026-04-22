---

title: "[Kubernetes] Ingress 기본"
date: 2026-04-19T22:10:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "ingress", "workload"]

description: "Ingress 개념과 외부 요청 라우팅 방법 정리"
toc: true
---

# Ingress 기본

Ingress는 외부 요청을 Service로 전달하는 리소스이다.

---

## 1. Ingress가 필요한 이유

Service로도 Pod에 접근할 수 있다.

하지만 다음과 같은 한계가 있다.

* Service마다 외부 노출 필요
* 도메인 기반 라우팅 어려움
* 경로 기반 분기 필요
* HTTPS 설정 필요

---

## 2. Ingress 역할

Ingress는 외부 요청을 내부 Service로 연결한다.

* 도메인 기반 라우팅
* 경로 기반 라우팅
* HTTPS 처리 가능

---

## 3. 기본 구조

```text
사용자 → Ingress → Service → Pod
```

---

## 4. Ingress 생성 (YAML)

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nginx-service
            port:
              number: 80
```

---

## 5. Ingress 실행

```bash
kubectl apply -f ingress.yaml
```

---

## 6. 상태 확인

```bash
kubectl get ingress
```

---

## 7. Ingress Controller

Ingress 리소스만 생성한다고 바로 동작하지는 않는다.

실제로 요청을 처리할 Ingress Controller가 필요하다.

예시

* NGINX Ingress Controller
* Traefik

---

## 8. 동작 흐름

```text
사용자 요청 → Ingress Controller → Service → Pod
```

---

## 정리

* Ingress는 외부 요청을 Service로 연결하는 리소스
* 도메인과 경로 기준으로 라우팅 가능
* 실제 동작에는 Ingress Controller가 필요
