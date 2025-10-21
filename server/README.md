# FANFANTV Backend Server

Node.js + Express + SQLite 기반 백엔드 서버

## 설치 방법

```bash
cd server
npm install
```

## 실행 방법

```bash
# 개발 모드 (nodemon - 자동 재시작)
npm run dev

# 프로덕션 모드
npm start
```

## API 엔드포인트

### 인증 (Auth)

-   `POST /api/auth/signup` - 회원가입
-   `POST /api/auth/login` - 로그인
-   `POST /api/auth/reset-password` - 비밀번호 재설정
-   `GET /api/auth/me` - 현재 사용자 정보 (인증 필요)

### 이미지 (Images)

-   `POST /api/images/upload` - 이미지 업로드 (인증 필요)
-   `GET /api/images/list` - 모든 이미지 목록 조회 (인증 필요)
-   `GET /api/images/:filename` - 특정 이미지 파일 조회
-   `DELETE /api/images/:id` - 이미지 삭제 (인증 필요)

### 헬스 체크

-   `GET /api/health` - 서버 상태 확인

## 데이터베이스

SQLite를 사용하며, `fanfantv.db` 파일에 데이터가 저장됩니다.

### 테이블 구조

#### users

-   id (INTEGER, PRIMARY KEY)
-   email (TEXT, UNIQUE)
-   password (TEXT, 해시화됨)
-   created_at (DATETIME)

#### images

-   id (INTEGER, PRIMARY KEY)
-   filename (TEXT)
-   original_name (TEXT)
-   uploaded_by (TEXT)
-   file_path (TEXT)
-   file_size (INTEGER)
-   mime_type (TEXT)
-   created_at (DATETIME)

## 환경 변수

`.env` 파일에 다음 변수를 설정하세요:

```
PORT=5000
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

## 보안

-   비밀번호는 bcrypt로 해시화되어 저장됩니다
-   JWT 토큰 기반 인증 사용
-   파일 업로드 시 타입 및 크기 검증
