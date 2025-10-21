# FANFANTV API 엔드포인트 가이드

## 🌐 Base URL

```
http://localhost:5000/api
```

## 📋 목차

1. [Health Check](#health-check)
2. [인증 API](#인증-api)
3. [이미지 API](#이미지-api)

---

## Health Check

### GET `/api/health`

서버 상태 확인

**요청 예시:**

```bash
curl http://localhost:5000/api/health
```

**응답:**

```json
{
	"success": true,
	"message": "FANFANTV Server is running!",
	"timestamp": "2025-10-21T12:00:00.000Z"
}
```

---

## 인증 API

### 1. POST `/api/auth/signup`

회원가입

**요청 Body:**

```json
{
	"email": "user@example.com",
	"password": "password123"
}
```

**요청 예시:**

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "test1234"
  }'
```

**성공 응답 (201):**

```json
{
	"success": true,
	"message": "회원가입이 완료되었습니다.",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
	"user": {
		"id": 1,
		"email": "test@example.com"
	}
}
```

**검증 규칙:**

-   이메일 형식 검증
-   비밀번호 최소 6자 이상
-   중복 이메일 불가

---

### 2. POST `/api/auth/login`

로그인

**요청 Body:**

```json
{
	"email": "user@example.com",
	"password": "password123"
}
```

**요청 예시:**

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "test1234"
  }'
```

**성공 응답 (200):**

```json
{
	"success": true,
	"message": "로그인 성공",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
	"user": {
		"id": 1,
		"email": "test@example.com"
	}
}
```

**에러 응답 예시:**

```json
{
	"success": false,
	"message": "이메일에 해당하는 계정이 없습니다.",
	"code": "auth/user-not-found"
}
```

---

### 3. POST `/api/auth/reset-password`

비밀번호 재설정 요청

**요청 Body:**

```json
{
	"email": "user@example.com"
}
```

**요청 예시:**

```bash
curl -X POST http://localhost:5000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com"
  }'
```

**응답:**

```json
{
	"success": true,
	"message": "비밀번호 재설정 링크가 이메일로 전송되었습니다."
}
```

---

### 4. GET `/api/auth/me`

현재 로그인한 사용자 정보 조회 (🔒 인증 필요)

**요청 예시:**

```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**응답:**

```json
{
	"success": true,
	"user": {
		"id": 1,
		"email": "test@example.com",
		"created_at": "2025-10-21 12:00:00"
	}
}
```

---

## 이미지 API

> **⚠️ 모든 이미지 API는 인증이 필요합니다.**  
> `Authorization: Bearer YOUR_TOKEN_HERE` 헤더를 포함해야 합니다.

### 1. POST `/api/images/upload`

이미지 업로드 (🔒 인증 필요)

**요청 타입:** `multipart/form-data`

**요청 예시:**

```bash
curl -X POST http://localhost:5000/api/images/upload \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -F "image=@/path/to/your/image.jpg"
```

**성공 응답 (201):**

```json
{
	"success": true,
	"message": "이미지가 성공적으로 업로드되었습니다.",
	"image": {
		"id": 1,
		"filename": "myimage-1634567890123-123456789.jpg",
		"originalName": "myimage.jpg",
		"uploadedBy": "test@example.com",
		"size": 1024567,
		"url": "/api/images/myimage-1634567890123-123456789.jpg"
	}
}
```

**제한사항:**

-   허용 파일 형식: JPG, PNG, GIF, WEBP
-   최대 파일 크기: 10MB

---

### 2. GET `/api/images/list`

모든 이미지 목록 조회 (🔒 인증 필요)

**요청 예시:**

```bash
curl http://localhost:5000/api/images/list \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**응답:**

```json
{
	"success": true,
	"count": 2,
	"images": [
		{
			"id": 1,
			"filename": "myimage-1634567890123-123456789.jpg",
			"originalName": "myimage.jpg",
			"uploadedBy": "test@example.com",
			"size": 1024567,
			"mimeType": "image/jpeg",
			"createdAt": "2025-10-21 12:00:00",
			"url": "/api/images/myimage-1634567890123-123456789.jpg"
		},
		{
			"id": 2,
			"filename": "photo-1634567890456-987654321.png",
			"originalName": "photo.png",
			"uploadedBy": "user2@example.com",
			"size": 2048000,
			"mimeType": "image/png",
			"createdAt": "2025-10-21 13:00:00",
			"url": "/api/images/photo-1634567890456-987654321.png"
		}
	]
}
```

---

### 3. GET `/api/images/my-images`

내가 업로드한 이미지 목록 조회 (🔒 인증 필요)

**요청 예시:**

```bash
curl http://localhost:5000/api/images/my-images \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**응답:**

```json
{
	"success": true,
	"count": 1,
	"images": [
		{
			"id": 1,
			"filename": "myimage-1634567890123-123456789.jpg",
			"originalName": "myimage.jpg",
			"uploadedBy": "test@example.com",
			"size": 1024567,
			"mimeType": "image/jpeg",
			"createdAt": "2025-10-21 12:00:00",
			"url": "/api/images/myimage-1634567890123-123456789.jpg"
		}
	]
}
```

---

### 4. GET `/api/images/:filename`

특정 이미지 파일 가져오기 (인증 불필요)

**요청 예시:**

```bash
curl http://localhost:5000/api/images/myimage-1634567890123-123456789.jpg \
  --output downloaded-image.jpg
```

또는 브라우저에서 직접 접속:

```
http://localhost:5000/api/images/myimage-1634567890123-123456789.jpg
```

---

### 5. DELETE `/api/images/:id`

이미지 삭제 (🔒 인증 필요, 본인 이미지만)

**요청 예시:**

```bash
curl -X DELETE http://localhost:5000/api/images/1 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**성공 응답:**

```json
{
	"success": true,
	"message": "이미지가 삭제되었습니다."
}
```

**에러 응답 (권한 없음):**

```json
{
	"success": false,
	"message": "본인이 업로드한 이미지만 삭제할 수 있습니다."
}
```

---

## 🔐 인증 (Authorization)

인증이 필요한 API는 요청 헤더에 JWT 토큰을 포함해야 합니다:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 토큰 받기:

1. `/api/auth/signup` 또는 `/api/auth/login`으로 회원가입/로그인
2. 응답의 `token` 값을 저장
3. 이후 요청 시 `Authorization` 헤더에 포함

---

## 📦 Postman/Thunder Client 테스트용 환경 변수

```
BASE_URL=http://localhost:5000/api
TOKEN=your_jwt_token_here
```

---

## 🧪 전체 플로우 테스트 예시

```bash
# 1. Health Check
curl http://localhost:5000/api/health

# 2. 회원가입
TOKEN=$(curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123"}' \
  | jq -r '.token')

# 3. 토큰 확인
echo "Token: $TOKEN"

# 4. 내 정보 조회
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer $TOKEN"

# 5. 이미지 업로드
curl -X POST http://localhost:5000/api/images/upload \
  -H "Authorization: Bearer $TOKEN" \
  -F "image=@/path/to/image.jpg"

# 6. 내 이미지 목록 조회
curl http://localhost:5000/api/images/my-images \
  -H "Authorization: Bearer $TOKEN"

# 7. 모든 이미지 목록 조회
curl http://localhost:5000/api/images/list \
  -H "Authorization: Bearer $TOKEN"
```

---

## ⚠️ 에러 코드

| Status Code | 설명                              |
| ----------- | --------------------------------- |
| 200         | 성공                              |
| 201         | 생성 성공                         |
| 400         | 잘못된 요청 (입력 검증 실패)      |
| 401         | 인증 실패 (토큰 없음/만료/잘못됨) |
| 403         | 권한 없음 (본인 리소스가 아님)    |
| 404         | 찾을 수 없음                      |
| 500         | 서버 에러                         |

---

## 🛠️ 추천 테스트 도구

1. **cURL** (커맨드라인)
2. **Postman** (GUI 기반 API 테스트)
3. **Thunder Client** (VS Code 확장)
4. **HTTPie** (사용자 친화적인 cURL 대안)

```bash
# HTTPie 설치 (macOS)
brew install httpie

# HTTPie 사용 예시
http POST localhost:5000/api/auth/login \
  email=test@test.com \
  password=test123
```
