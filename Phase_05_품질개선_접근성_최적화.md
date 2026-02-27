# Phase 05 — 품질 개선 · 접근성 · 최적화

> **실행 순서**: Phase 04 완료 후 실행  
> **결과물**: 접근성 강화, 애니메이션, SEO, 최종 다듬기

---

## 🤖 AI 실행 프롬프트 (Step 1 — 접근성 + 애니메이션)

```
## Phase 05 Step 1: 접근성 개선 + 스크롤 애니메이션

현재 index.html, style.css, main.js를 검토하고 다음을 추가/수정해 주세요.

### 접근성(Accessibility) 개선
1. 모든 이미지/아이콘에 적절한 alt 또는 aria-label 추가
2. 버튼과 링크에 포커스 스타일 추가:
```css
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 4px;
}
```
3. 색상 대비 확인: 모든 텍스트 WCAG AA 기준 4.5:1 이상 유지
4. 카드들에 role="article" 또는 적절한 ARIA role 확인
5. 네비게이션에 aria-current="page" (현재 섹션) 동적 추가
6. 다운로드 버튼에 aria-describedby로 파일 정보 연결
7. skip-to-content 링크 추가 (화면 최상단, 평소엔 숨김):
```html
<a class="skip-link" href="#hero">본문으로 바로가기</a>
```
```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  z-index: 9999;
}
.skip-link:focus { top: 1rem; }
```

### 스크롤 진입 애니메이션
main.js에 IntersectionObserver를 사용한 fade-in 애니메이션:
- 모든 카드(.case-card, .support-card, .stat-card), 섹션 제목(h2), 
  .about-grid 자식들에 data-animate 속성 추가
- CSS:
```css
[data-animate] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
[data-animate].visible {
  opacity: 1;
  transform: translateY(0);
}
```
- JS: IntersectionObserver로 화면 진입 시 .visible 클래스 추가
- 카드들은 staggered delay (0.1s씩 순차 적용):
  카드 index에 따라 transition-delay 동적 설정

### 인쇄/PDF 스타일
```css
@media print {
  .site-header, .hamburger, .share-buttons, footer { display: none; }
  body { font-size: 12pt; color: #000; }
  .case-card { break-inside: avoid; border: 1px solid #ccc; }
  a[href]::after { content: " (" attr(href) ")"; }
}
```
```

---

## 🤖 AI 실행 프롬프트 (Step 2 — SEO + 메타 태그 완성)

```
## Phase 05 Step 2: SEO 및 메타 태그 완성

index.html의 <head> 섹션을 다음으로 완성해 주세요.

```html
<!-- 기본 메타 -->
<meta name="description" content="고립·은둔 청년 23인의 실제 사례를 담은 사례집. 사회적 고립의 현실을 이해하고 지원 연계 방법을 안내합니다.">
<meta name="keywords" content="고립청년, 은둔청년, 청년고립, 사회적단절, 청년지원, 사례집">
<meta name="author" content="[제작기관명]">
<meta name="robots" content="index, follow">

<!-- Open Graph (SNS 공유) -->
<meta property="og:type" content="website">
<meta property="og:url" content="[배포 후 실제 URL 입력]">
<meta property="og:title" content="고립·은둔 청년 사례집 — 우리 곁의 청년들, 그 목소리를 담다">
<meta property="og:description" content="23인의 당사자 이야기와 지원 연계 정보. 무료 다운로드 가능.">
<meta property="og:image" content="[og-image.jpg 경로 — 1200x630px 권장]">
<meta property="og:locale" content="ko_KR">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="고립·은둔 청년 사례집">
<meta name="twitter:description" content="23인의 청년들이 직접 전하는 이야기">
<meta name="twitter:image" content="[og-image.jpg 경로]">

<!-- Canonical -->
<link rel="canonical" href="[배포 후 실제 URL 입력]">

<!-- 파비콘 (선택) -->
<link rel="icon" href="assets/favicon.ico" type="image/x-icon">
```

og-image.jpg 제작 안내 (사람이 직접 수행):
- 크기: 1200 x 630px
- 내용: 사례집 제목 + 간단한 디자인
- 도구: Canva 또는 Figma 사용 권장
```

---

## 🤖 AI 실행 프롬프트 (Step 3 — 최종 점검)

```
## Phase 05 Step 3: 최종 코드 점검 및 README 생성

1. 현재 index.html, style.css, main.js 전체를 검토하여:
   - 미완성 섹션 주석(<!-- Phase 0X에서 채울 예정 -->) 모두 제거됐는지 확인
   - 콘솔 에러 유발 가능 코드 제거 (undefined 변수, 잘못된 selector 등)
   - 모바일 breakpoint 768px 기준 전체 레이아웃 정상 동작 확인

2. README.md 파일 생성:
```markdown
# 고립·은둔 청년 사례집 홍보 홈페이지

## 개요
고립·은둔 청년 23인의 사례를 담은 사례집 홍보용 정적 웹사이트

## 기술 스택
- HTML5 + CSS3 (Vanilla)
- JavaScript ES6+

## 로컬 실행 방법
1. VS Code에서 폴더 열기
2. Live Server 확장 설치 (ms-vscode.live-server)
3. index.html 우클릭 → "Open with Live Server"
4. http://127.0.0.1:5500 접속

## 콘텐츠 수정 방법
- 사례 내용: `data/cases.json` 수정
- 지원기관 정보: `index.html`의 #support 섹션 직접 수정
- 색상/폰트: `style.css`의 :root 변수 수정
- PDF 파일: `assets/youth-isolation-casebook-2024.pdf` 교체

## 배포 방법 (GitHub Pages)
1. GitHub 저장소 생성
2. 전체 파일 push
3. Settings → Pages → Source: main branch / root
4. 자동 배포 완료 (약 2~3분 소요)

## 주의사항
- 사례 내용 수정 시 반드시 당사자 동의 여부 확인
- 상업적 이용 금지
```
```

---

## ✅ Phase 05 최종 완료 체크

- [ ] 키보드만으로 전체 사이트 탐색 가능 확인 (Tab 키)
- [ ] 스크롤 애니메이션 정상 작동 확인
- [ ] 크롬 Lighthouse 접근성 점수 90+ 확인 (선택)
- [ ] 모바일 Chrome DevTools 확인 (iPhone SE 기준)
- [ ] README.md 생성 완료
- [ ] og-image.jpg 제작 및 assets/ 폴더에 추가
- [ ] PDF 파일 assets/ 폴더에 배치
- [ ] [제작기관명], [이메일], [배포 URL] 실제 정보로 교체
