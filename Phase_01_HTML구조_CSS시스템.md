# Phase 01 — HTML 기본 구조 + CSS 디자인 시스템

> **실행 순서**: Phase 00 컨텍스트 설정 후 이 프롬프트를 AI에 전달  
> **결과물**: `index.html`, `style.css` 기본 골격 생성

---

## 🤖 AI 실행 프롬프트

```
## Phase 01: HTML 기본 구조 + CSS 디자인 시스템 생성

다음 조건으로 `index.html`과 `style.css`를 생성해 주세요.

### index.html 요구사항
- HTML5 표준 구조 (<!DOCTYPE html>)
- lang="ko" 설정
- meta charset="UTF-8", viewport 설정
- Open Graph 메타태그 포함 (SNS 공유 시 미리보기용)
  - og:title: "고립·은둔 청년 사례집"
  - og:description: "우리 곁의 청년들, 그 목소리를 담다"
  - og:type: website
- Google Fonts 로드: Noto Sans KR (weights: 400, 500, 700)
- style.css 링크
- main.js defer 로드
- 다음 섹션을 순서대로 배치 (각 섹션은 <section id="..."> 태그 사용):
  1. <header> — 네비게이션 바
  2. <section id="hero"> — 히어로 영역
  3. <section id="about"> — 소개 영역
  4. <section id="cases"> — 사례 미리보기 영역
  5. <section id="stats"> — 통계 영역
  6. <section id="support"> — 지원기관 영역
  7. <section id="download"> — 다운로드 영역
  8. <footer> — 푸터
- 각 섹션 안에는 내용 없이 <!-- Phase 0X에서 채울 예정 --> 주석만 표시

### style.css 요구사항
CSS 변수(Custom Properties)로 디자인 시스템 정의:
```css
:root {
  --color-primary: #2D6A4F;
  --color-primary-light: #40916C;
  --color-accent: #B7E4C7;
  --color-bg: #FAFAF8;
  --color-bg-section: #F0F4F0;
  --color-text: #1A1A2E;
  --color-text-muted: #6B7280;
  --color-white: #FFFFFF;
  --font-base: 'Noto Sans KR', sans-serif;
  --font-size-base: 16px;
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 2.75rem;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 24px rgba(0,0,0,0.10);
  --max-width: 1100px;
  --transition: 0.25s ease;
}
```

- CSS Reset (box-sizing, margin 0, 최소한의 리셋)
- 기본 body 스타일 (font, color, background)
- `.container` 클래스: max-width 설정, 좌우 auto margin, 좌우 padding 1.5rem
- 반응형: `@media (max-width: 768px)` 준비
- 헤더 스타일:
  - 고정(sticky) 상단 바
  - 배경 흰색, 하단 얇은 테두리
  - 로고(텍스트) + 우측 네비 링크 (flex 레이아웃)
  - 모바일에서 네비 숨김 + 햄버거 버튼 표시
- 섹션 기본 스타일:
  - section { padding: var(--spacing-xl) 0; }
  - 홀수 섹션 배경: var(--color-bg), 짝수 섹션: var(--color-bg-section)
- `.btn-primary` 버튼 스타일:
  - 배경 var(--color-primary), 흰색 텍스트
  - border-radius var(--radius-sm)
  - hover 시 var(--color-primary-light)으로 변경
  - transition 적용
- `.btn-outline` 버튼 스타일:
  - 테두리만 있는 버튼
  - hover 시 배경 채워짐

결과물: index.html 전체 코드 + style.css 전체 코드를 각각 코드블록으로 출력해 주세요.
```

---

## ✅ Phase 01 완료 체크

- [ ] `index.html` 파일 생성 및 저장
- [ ] `style.css` 파일 생성 및 저장
- [ ] VS Code Live Server로 빈 페이지 렌더링 확인
- [ ] 브라우저 개발자 도구에서 CSS 변수 적용 확인
