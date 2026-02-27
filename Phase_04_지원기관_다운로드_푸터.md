# Phase 04 — 지원기관 + 다운로드/공유 + 푸터 섹션

> **실행 순서**: Phase 03 완료 후 실행  
> **결과물**: Support 섹션, Download 섹션, Footer 완성

---

## 🤖 AI 실행 프롬프트 (Step 1 — 지원기관 섹션)

```
## Phase 04 Step 1: #support 섹션 (지원기관 연결) 구현

index.html의 #support 섹션과 style.css에 다음을 추가해 주세요.

### #support 섹션 HTML 구조
- 섹션 제목(h2): "도움이 필요하다면"
- 설명(p): "고립·은둔 청년 본인 또는 주변인을 위한 지원 기관입니다."
- 기관 카드 그리드 (2x3 또는 auto-fill):

기관 정보 (아래 6개 카드로 구성):
1. 기관명: "청년재단 고립·은둔청년 지원" / 연락처: "1522-0365" / 서비스: "전국 상담 및 프로그램 연계" / 링크: https://www.youthfoundation.or.kr
2. 기관명: "정신건강 위기상담 전화" / 연락처: "1577-0199" / 서비스: "24시간 위기상담 (무료)" / 링크: https://www.blutouch.net
3. 기관명: "자살예방상담전화" / 연락처: "1393" / 서비스: "24시간 위기개입 상담" / 링크: https://spckorea.or.kr
4. 기관명: "청년내일센터" / 연락처: "지역별 상이" / 서비스: "취업·생활 지원 통합 서비스" / 링크: https://www.youthcenter.go.kr
5. 기관명: "한국청소년상담복지개발원" / 연락처: "1388" / 서비스: "청소년·청년 통합상담" / 링크: https://www.kyci.or.kr
6. 기관명: "지역 정신건강복지센터" / 연락처: "지역번호+1577-0199" / 서비스: "지역 기반 지속 사례관리" / 링크: https://www.nmhc.or.kr

카드 구조:
```html
<a class="support-card" href="[링크]" target="_blank" rel="noopener">
  <div class="support-card__icon">📞</div>
  <h3 class="support-card__name">청년재단 고립·은둔청년 지원</h3>
  <p class="support-card__number">1522-0365</p>
  <p class="support-card__service">전국 상담 및 프로그램 연계</p>
  <span class="support-card__link">바로가기 →</span>
</a>
```

- 연락처(전화번호) 카드의 경우 tel: 링크도 추가 (모바일 탭 시 전화 연결)

### CSS 요구사항
- .support-grid: `repeat(auto-fill, minmax(280px, 1fr))`, gap 1.25rem
- .support-card:
  - 배경 흰색, border-radius var(--radius-md)
  - border 1.5px solid var(--color-accent)
  - padding 1.5rem
  - text-decoration none, color inherit
  - hover: border-color var(--color-primary), box-shadow var(--shadow-md), translateY(-3px)
  - transition var(--transition)
  - display flex flex-direction column
- .support-card__number: font-size 1.25rem, font-weight 700, color var(--color-primary)
- .support-card__link: margin-top auto, color var(--color-primary), font-weight 500
- 비상 연락처 강조: 1393, 1577-0199 카드는 border-color를 강조색 (#E63946)으로 표시
```

---

## 🤖 AI 실행 프롬프트 (Step 2 — 다운로드/공유 섹션)

```
## Phase 04 Step 2: #download 섹션 구현

index.html의 #download 섹션과 style.css에 다음을 추가해 주세요.

### #download 섹션 HTML 구조
- 배경: var(--color-bg-section)
- 중앙 정렬 레이아웃
- 아이콘: 큰 책 이모지 또는 SVG (📗)
- 제목(h2): "사례집을 받아보세요"
- 설명(p): "누구나 무료로 다운로드하고 공유할 수 있습니다.\n비영리·교육 목적의 활용을 환영합니다."
- 다운로드 버튼:
  - .btn-primary 크기 큰 버튼: "PDF 무료 다운로드"
  - href: "assets/youth-isolation-casebook-2024.pdf" (실제 파일 경로로 수정 필요)
  - download 속성 추가
  - 파일 크기 표시: "(약 8MB)"
- 공유하기 버튼 3개 (아이콘 + 텍스트):
  - 카카오톡 공유: 배경 #FEE500, 텍스트 #1A1A1A
  - 페이스북 공유: 배경 #1877F2, 텍스트 흰색
  - 링크 복사: 배경 var(--color-bg), border, 텍스트 var(--color-text)
- 하단 안내: "* 사례 내용은 당사자 동의 하에 수록되었으며, 상업적 이용은 금합니다."

### JavaScript (main.js에 추가)
공유 기능 구현:
1. 카카오톡: Kakao.Link SDK (단, SDK 없을 경우 카카오 공유 URL 방식 사용)
   - 대체: `https://sharer.kakao.com/talk/friends/picker/link` (로그인 필요 방식 대신)
   - 실용적 대안: window.open('kakaotalk://share', '_blank') 또는 안내 텍스트
2. 페이스북: `https://www.facebook.com/sharer/sharer.php?u=` + encodeURIComponent(location.href)
3. 링크 복사: navigator.clipboard.writeText(location.href) + 버튼 텍스트 "복사됨!" 피드백

### CSS 요구사항
- #download: text-align center, padding var(--spacing-xl) 0
- 버튼 그룹: display flex, gap 1rem, justify-content center, flex-wrap wrap
- 공유 버튼: 아이콘 + 텍스트 flex 정렬, border-radius var(--radius-sm), padding 0.75rem 1.5rem
- hover 시 opacity 0.9
```

---

## 🤖 AI 실행 프롬프트 (Step 3 — 네비게이션 + 푸터 + 스크롤 기능)

```
## Phase 04 Step 3: 네비게이션, 푸터, 스크롤 기능 완성

### 헤더/네비게이션 완성 (index.html의 <header> 채우기)
```html
<header class="site-header" id="site-header">
  <div class="container header-inner">
    <a href="#hero" class="header-logo">
      <span class="logo-icon">📗</span>
      <span class="logo-text">고립·은둔 청년 사례집</span>
    </a>
    <nav class="header-nav" id="header-nav">
      <a href="#about">소개</a>
      <a href="#cases">사례</a>
      <a href="#stats">현황</a>
      <a href="#support">지원기관</a>
      <a href="#download" class="btn-primary btn-sm">다운로드</a>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="메뉴 열기">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

### <footer> 완성
```html
<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <p class="footer-title">고립·은둔 청년 사례집 2024</p>
      <p class="footer-subtitle">우리 곁의 청년들, 그 목소리를 담다</p>
    </div>
    <div class="footer-info">
      <p>제작: [제작기관명 입력]</p>
      <p>문의: [이메일 입력]</p>
      <p>© 2024 All rights reserved. 비영리 목적 자유 배포 허용.</p>
    </div>
    <div class="footer-links">
      <a href="#hero">맨 위로 ↑</a>
      <a href="#download">사례집 다운로드</a>
      <a href="#support">지원기관 안내</a>
    </div>
  </div>
</footer>
```

### main.js에 추가할 기능
1. 햄버거 메뉴 토글 (모바일):
   - #hamburger 클릭 시 #header-nav의 .open 클래스 토글
   - 메뉴 열릴 때 body scroll lock

2. 스크롤 시 헤더 스타일 변경:
   - 스크롤 50px 이상 시 .scrolled 클래스 추가 → 배경 흰색 + 그림자

3. 부드러운 스크롤:
   - HTML에 scroll-behavior: smooth 또는 JS로 처리
   - 헤더 높이(64px) offset 고려

4. 현재 섹션 표시:
   - Intersection Observer로 현재 보이는 섹션 감지
   - 해당 nav 링크에 .active 클래스 추가

### CSS 추가
- 푸터: background var(--color-text), color 흰색, padding var(--spacing-lg) 0
- .footer-inner: 3열 그리드 (모바일: 1열)
- .site-header.scrolled: box-shadow var(--shadow-sm)
- .header-nav a.active: color var(--color-primary), font-weight 700
- 모바일 햄버거: .header-nav.open { display: flex; flex-direction: column; }
```

---

## ✅ Phase 04 완료 체크

- [ ] 지원기관 카드 6개 렌더링 및 링크 동작 확인
- [ ] PDF 다운로드 버튼 동작 확인 (파일 경로 지정 필요)
- [ ] SNS 공유 버튼 동작 확인
- [ ] 링크 복사 기능 + 피드백 텍스트 확인
- [ ] 햄버거 메뉴 열림/닫힘 확인
- [ ] 스크롤 시 헤더 변화 확인
- [ ] 페이지 전체 스무스 스크롤 확인
- [ ] 푸터 정보 입력 (제작기관명, 이메일)
