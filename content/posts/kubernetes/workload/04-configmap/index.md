---

title: "[Kubernetes] ConfigMap 기본"
date: 2026-04-19T22:20:00+09:00
draft: false

categories: ["kubernetes"]
tags: ["kubernetes", "configmap", "workload"]

description: "ConfigMap 개념과 환경 변수 관리 방법 정리"
toc: true
---

# ConfigMap 기본

ConfigMap은 설정 데이터를 분리하여 관리하는 리소스이다.

---

## 1. ConfigMap이 필요한 이유

애플리케이션 설정을 코드에 직접 작성하면 문제가 발생한다.

* 환경별 설정 관리 어려움
* 설정 변경 시 재배포 필요
* 보안 관리 어려움

---

## 2. ConfigMap 역할

ConfigMap은 설정 데이터를 외부에서 관리한다.

* 설정 분리
* 환경별 설정 적용
* 유연한 변경 가능

---

## 3. ConfigMap 생성 (YAML)

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DB_HOST: localhost
  DB_PORT: "5432"
```

---

## 4. Pod에서 사용 (환경 변수)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: configmap-pod
spec:
  containers:
  - name: app
    image: nginx
    env:
    - name: DB_HOST
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: DB_HOST
```

---

## 5. 적용

```bash
kubectl apply -f configmap.yaml
```

---

## 6. 확인

```bash
kubectl get configmap
```

---

## 7. 특징

* Key-Value 형태로 저장
* Pod에서 환경 변수로 사용 가능
* 파일 형태로도 사용 가능

---

## 정리

* ConfigMap은 설정 데이터를 분리하는 리소스
* 환경 변수로 주입 가능
* 설정 변경을 유연하게 처리 가능
