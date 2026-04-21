---
title: "[PostgreSQL] PostgreSQL 설치 및 실행"
date: 2026-04-21T22:10:00+09:00
draft: false

categories: ["sql"]
tags: ["postgresql", "install", "setup"]

description: "PostgreSQL 설치부터 실행, 기본 접속까지 정리"
toc: true
---

# PostgreSQL 설치 및 실행

이번 글에서는 PostgreSQL을 설치하고  
기본적으로 실행 및 접속하는 방법을 정리한다.

운영체제에 따라 설치 방법이 다르므로  
대표적으로 Windows와 Linux 기준으로 설명한다.

---

## 1. PostgreSQL 다운로드

공식 사이트에서 다운로드할 수 있다.

- https://www.postgresql.org/download/

---

## 2. Windows 설치

설치 파일을 다운로드 후 실행한다.

설치 과정에서 다음 항목을 설정한다.

- 설치 경로
- 비밀번호 (postgres 사용자)
- 포트 (기본: 5432)

기본 설정 그대로 진행해도 무방하다.

---

## 3. Linux 설치 (dnf / apt)

### 3.1 dnf (RHEL, CentOS, Rocky, AlmaLinux)

```bash
sudo dnf install -y postgresql-server
```

초기화 및 실행:

```bash
sudo postgresql-setup --initdb
sudo systemctl enable postgresql
sudo systemctl start postgresql
```

---

### 3.2 apt (Ubuntu)

```bash
sudo apt update
sudo apt install -y postgresql postgresql-contrib
```

서비스 실행:

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

---

## 4. PostgreSQL 실행 확인

서비스 상태 확인:

```bash
systemctl status postgresql
```

정상적으로 실행 중이면 active 상태가 표시된다.

---

## 5. psql 접속

```bash
psql -U postgres
```

또는 Linux에서는:

```bash
sudo -u postgres psql
```

---

## 6. 기본 확인

```sql
SELECT version();
```

정상적으로 결과가 나오면 설치가 완료된 것이다.

---

## 정리

- PostgreSQL은 공식 사이트 또는 패키지 매니저로 설치할 수 있다
- Linux에서는 dnf, apt를 통해 간단히 설치 가능하다
- psql을 통해 데이터베이스에 접속할 수 있다