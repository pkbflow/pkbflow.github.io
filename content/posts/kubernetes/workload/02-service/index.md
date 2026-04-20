---

title: "[Kubernetes] Service 기본"
date: 2026-04-19T22:00:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "service", "networking"]

description: "Service 개념과 Pod 접근 방법 정리"
toc: true
---------

# Service 기본

Service는 Pod에 접근하기 위한 통로이다.

---

## 1. Service가 필요한 이유

Pod은 직접 접근하기 어렵다.

* Pod IP는 변경될 수 있음
* 여러 Pod 존재
* 외부 접근 불가능

---

## 2. Service 역할

Service는 Pod을 연결한다.

* 고정된 주소 제공
* 여러 Pod에 트래픽 분산
* 외부 접근 지원

---

## 3. Service 생성 (YAML)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
```

---

## 4. Service 실행

```bash
kubectl apply -f service.yaml
```

---

## 5. 상태 확인

```bash
kubectl get services
```

---

## 6. Service 유형

### ClusterIP

* 기본 타입
* 클러스터 내부에서만 접근 가능

---

### NodePort

* 외부에서 접근 가능
* 특정 포트로 노출

---

## 7. 동작 흐름

```text
사용자 → Service → Pod
```

---

## 정리

* Service는 Pod 접근 통로
* 고정 IP와 로드밸런싱 제공
* 외부 노출 시 NodePort 사용
