# Phase 02 — Hero 섹션 + About(소개) 섹션 구현

> **실행 순서**: Phase 01 완료 후 실행  
> **결과물**: Hero 섹션과 About 섹션 HTML 마크업 + CSS 스타일 추가

---

## 🤖 AI 실행 프롬프트

```
## Phase 02: Hero 섹션 + About 섹션 구현

이전에 만든 index.html의 #hero, #about 섹션과 style.css에 아래 내용을 추가해 주세요.

---

### #hero 섹션 구현

HTML 마크업 요구사항:
- 배경: var(--color-primary) 그라디언트 (진한 녹색 → 연한 녹색)
- 전체 화면 높이(100vh) 기준, 세로 중앙 정렬
- 내부 .container 안에:
  - 작은 뱃지 텍스트: "2024 고립·은둔 청년 지원사업" (배경: 반투명 흰색, 둥근 pill 형태)
  - 메인 제목(h1): "우리 곁의 청년들,\n그 목소리를 담다"
    (줄바꿈은 <br> 태그 또는 white-space 처리)
  - 부제목(p): "고립·은둔 청년 23인의 실제 이야기를 통해 우리 사회의 단절을 이해하고, 함께 연결의 첫 걸음을 내딛습니다."
  - CTA 버튼 두 개 (flex row):
    1. .btn-primary: "사례집 다운로드 (PDF)" — href="#download"
    2. .btn-outline (흰색 테두리): "사례 살펴보기" — href="#cases"
  - 하단 스크롤 유도 아이콘 (↓ 화살표 SVG, 애니메이션 bounce)
- 텍스트 색상: 모두 흰색
- 모바일에서 버튼 세로 배치

CSS 요구사항:
- #hero 배경: linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #40916C 100%)
- h1 폰트: 3rem (모바일 2rem), font-weight 700, line-height 1.3
- 뱃지: 배경 rgba(255,255,255,0.2), border 1px solid rgba(255,255,255,0.4)
- 스크롤 화살표 애니메이션:
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
```

---

### #about 섹션 구현

HTML 마크업 요구사항:
- 배경: var(--color-bg) (크림화이트)
- 섹션 제목(h2): "이 사례집에 대하여"
  - 하단에 진한 녹색 accent 선 (width: 48px, height: 4px)
- 2열 그리드 레이아웃 (모바일: 1열):
  - 좌측 열: 설명 텍스트 블록
    - 소제목(h3): "왜 이 사례집이 필요한가"
    - 본문: "청년 고립·은둔 문제는 더 이상 개인의 선택이 아닙니다. 사회적 구조, 경제적 압박, 관계의 단절이 복합적으로 작용한 결과입니다. 이 사례집은 23인의 당사자 목소리를 직접 담아, 그들이 어떻게 고립되었고 어떻게 사회와 다시 연결되었는지를 기록합니다."
    - 두 번째 소제목(h3): "누가 읽어야 하는가"
    - 본문: "복지 실무자, 청년 지원 기관 종사자, 정책 입안자, 그리고 주변에 고립된 청년이 있는 가족과 친구들에게 이 사례집을 권합니다."
  - 우측 열: 하이라이트 카드 3개 (세로 배치)
    - 카드 1: 아이콘(👥) + "23인의 실제 사례" + "당사자 동의 하에 기록된 진실된 이야기"
    - 카드 2: 아이콘(📋) + "전문가 분석 포함" + "사회복지사·심리상담사의 해설 수록"
    - 카드 3: 아이콘(🔗) + "지원 연계 정보" + "실제 활용 가능한 기관 및 프로그램 안내"

CSS 요구사항:
- 섹션 제목(h2) 스타일: font-size 2rem, color var(--color-primary), margin-bottom 0.5rem
- accent 선: display block, background var(--color-primary), 별도 <span> 태그
- 2열 그리드: `grid-template-columns: 1fr 1fr`, gap 3rem
- 하이라이트 카드:
  - 배경 var(--color-white), border-left 4px solid var(--color-primary)
  - padding 1.5rem, border-radius var(--radius-sm)
  - box-shadow var(--shadow-sm)
  - hover 시 box-shadow var(--shadow-md), translateY(-2px) transition
- 모바일(768px 이하): 그리드 1열로 변경

수정 방법: index.html의 <!-- Phase 0X에서 채울 예정 --> 주석을 위 코드로 교체하고,
style.css 하단에 해당 스타일을 추가해 주세요.
전체 코드가 아닌 **추가/변경되는 부분만** 명확히 표시하여 출력해 주세요.
```

---

## ✅ Phase 02 완료 체크

- [ ] Hero 섹션 전체 화면 렌더링 확인
- [ ] CTA 버튼 2개 클릭 시 해당 섹션으로 스크롤 이동 확인
- [ ] About 섹션 2열 그리드 확인
- [ ] 모바일(768px)에서 1열로 전환 확인
- [ ] 카드 hover 효과 확인
