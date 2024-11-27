# MJU-AI2-FE

명지대학교 AI2 프로젝트, "코딩친구, 플릭"의 프론트엔드 레포지토리입니다.

## 🛠 Tech Stack

### Package Management
- **PNPM**
  - 디스크 공간 효율적 사용 (Content-addressable store)
  - 빠른 설치 속도
  - 엄격한 패키지 관리
  - Node.js v18 이상 필요

### Core
- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite

### Project Structure
- **Architecture:** Feature-First
  - 도메인/기능 중심의 폴더 구조 채택
  - 기능별 독립적인 모듈화로 확장성과 유지보수성 향상
  - 각 기능별 components, hooks, api, types 등을 모듈화

### Styling
- **Styled-components**
  - CSS-in-JS 솔루션으로 컴포넌트 기반 스타일링
  - 동적 스타일링 및 테마 관리 용이
  - TypeScript와의 완벽한 통합

### API Integration
- **HTTP Client:** Axios
  - REST API 통신
  - 인터셉터를 통한 요청/응답 핸들링
  - 타입 안전성이 보장된 API 통신
- **상태 관리:** React Query
  - 서버 상태 관리
  - 캐싱 및 동기화
  - 무한 스크롤/페이지네이션 지원

### Development Environment
- **Code Quality**
  - ESLint (Airbnb 설정)
  - Prettier
  - 일관된 코드 스타일 유지
- **타입 체킹:** TypeScript
  - 정적 타입 검사
  - 더 나은 개발자 경험
  - 런타임 에러 방지

### Utilities
- **날짜 처리:** Day.js
  - 경량화된 날짜 처리 라이브러리
  - 날짜 포맷팅 및 조작

### UI/UX
- **아이콘:** Lucide React
  - 모던하고 일관된 아이콘 시스템
- **알림:** React Hot Toast
  - 사용자 친화적인 토스트 메시지

## 🚀 시작하기

### Prerequisites

```bash
# Node.js 18 이상 설치 필요

# pnpm 설치
npm install -g pnpm
```

### Installation & Development

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build
```

## 📝 Commit Convention

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor: 코드 리팩토링
test: 테스트 코드, 리팩토링 테스트 코드 추가
chore: 빌드 업무 수정, 패키지 매니저 수정
```
