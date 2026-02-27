# Phase 03 — 사례 미리보기 + 통계/인포그래픽 섹션

> **실행 순서**: Phase 02 완료 후 실행  
> **결과물**: `data/cases.json` 생성 + Cases 섹션 + Stats 섹션 구현

---

## 🤖 AI 실행 프롬프트 (Step 1 — 데이터 파일)

```
## Phase 03 Step 1: cases.json 데이터 파일 생성

`data/cases.json` 파일을 생성해 주세요.
아래 구조를 따르되, 사례는 모두 **완전 익명 처리** (이름 없음, 나이·지역만 표기):

[
  {
    "id": 1,
    "tag": "은둔형 외톨이",
    "age": "26세",
    "region": "서울",
    "gender": "남성",
    "duration": "3년",
    "summary": "취업 실패 후 방에서 3년을 보냈습니다. 처음엔 잠깐이라고 생각했는데, 어느새 밖이 두려워졌어요.",
    "turning_point": "지역 청년 센터의 '느슨한 연결' 프로그램을 통해 첫 외출을 시작했습니다.",
    "keyword": ["취업실패", "사회불안", "가족갈등"]
  },
  {
    "id": 2,
    "tag": "사회적 고립",
    "age": "29세",
    "region": "부산",
    "gender": "여성",
    "duration": "2년",
    "summary": "친구도, 가족도, 직장도 없었어요. 혼자 편의점 음식으로 버텼던 시간들이 있었습니다.",
    "turning_point": "온라인 커뮤니티에서 비슷한 경험을 가진 사람들을 만나며 조금씩 연결되기 시작했습니다.",
    "keyword": ["경제적어려움", "고독사위험", "온라인연결"]
  },
  {
    "id": 3,
    "tag": "은둔형 외톨이",
    "age": "23세",
    "region": "대전",
    "gender": "남성",
    "duration": "1년 6개월",
    "summary": "대학 중퇴 후 부모님과도 대화가 끊겼습니다. 스스로가 쓸모없는 사람이라고 느꼈어요.",
    "turning_point": "정신건강 위기상담 전화를 통해 상담사를 만났고, 지속적인 연결이 이어졌습니다.",
    "keyword": ["학업중단", "자존감저하", "가족단절"]
  },
  {
    "id": 4,
    "tag": "사회적 고립",
    "age": "31세",
    "region": "인천",
    "gender": "여성",
    "duration": "4년",
    "summary": "직장 내 괴롭힘 이후로 사람이 무서워졌습니다. 4년 동안 혼자였어요.",
    "turning_point": "찾아가는 복지서비스를 통해 처음으로 바깥 도움을 받아들였습니다.",
    "keyword": ["직장내괴롭힘", "트라우마", "대인기피"]
  },
  {
    "id": 5,
    "tag": "은둔형 외톨이",
    "age": "27세",
    "region": "광주",
    "gender": "남성",
    "duration": "2년 3개월",
    "summary": "게임만 했어요. 현실이 너무 버거워서 게임 속에서만 제가 존재할 수 있었습니다.",
    "turning_point": "가족의 꾸준한 기다림과 청년 쉼터 연계가 변화의 계기가 되었습니다.",
    "keyword": ["게임과몰입", "현실회피", "가족지지"]
  }
]

파일 경로: `data/cases.json`
```

---

## 🤖 AI 실행 프롬프트 (Step 2 — Cases 섹션)

```
## Phase 03 Step 2: #cases 섹션 구현

index.html의 #cases 섹션과 main.js, style.css에 다음을 추가해 주세요.

### #cases 섹션 HTML 구조
- 섹션 헤더:
  - 소제목 텍스트(p): "당사자의 목소리"
  - 섹션 제목(h2): "이런 청년들이 있었습니다"
  - 설명(p): "모든 사례는 당사자 동의 하에 익명으로 수록되었습니다."
- 카드 그리드 영역: <div id="cases-grid" class="cases-grid"></div>
  (JavaScript로 동적 렌더링)
- 하단 링크: "사례집 전체 보기 →" (href="#download")

### main.js에 추가할 JavaScript
`data/cases.json`을 fetch로 불러와 cases-grid에 카드를 렌더링:

카드 HTML 구조:
```html
<article class="case-card">
  <div class="case-card__tag">은둔형 외톨이</div>
  <div class="case-card__meta">26세 · 서울 · 3년</div>
  <blockquote class="case-card__quote">
    "취업 실패 후 방에서 3년을..."
  </blockquote>
  <div class="case-card__turning">
    <span class="turning-label">전환점</span>
    <p>지역 청년 센터의...</p>
  </div>
  <div class="case-card__keywords">
    <span class="keyword-chip">취업실패</span>
    ...
  </div>
</article>
```

### CSS 요구사항 (style.css에 추가)
- .cases-grid: CSS Grid, `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`, gap 1.5rem
- .case-card:
  - 배경 흰색, border-radius var(--radius-md)
  - box-shadow var(--shadow-sm)
  - padding 1.75rem
  - border-top 4px solid var(--color-primary)
  - hover: shadow 강조 + translateY(-4px)
  - transition var(--transition)
- .case-card__tag: 배경 var(--color-accent), color var(--color-primary), font-size 0.8rem, 둥근 뱃지
- .case-card__quote: 이탤릭, color var(--color-text-muted), border-left 3px solid var(--color-accent), padding-left 1rem
- .keyword-chip: 배경 var(--color-bg-section), font-size 0.75rem, 둥근 pill 스타일
- .turning-label: 배경 var(--color-primary), 흰색 텍스트, 작은 뱃지
```

---

## 🤖 AI 실행 프롬프트 (Step 3 — Stats 섹션)

```
## Phase 03 Step 3: #stats 섹션 구현

index.html의 #stats 섹션과 style.css에 다음을 추가해 주세요.

### #stats 섹션 HTML 구조
- 배경: var(--color-primary) (진한 녹색)
- 텍스트 색상: 모두 흰색
- 섹션 제목(h2): "우리가 마주한 숫자들"
- 부제목(p): "고립·은둔 청년 문제의 현실을 수치로 확인합니다."
- 통계 카드 4개 (2x2 그리드 또는 4열):
  1. 숫자: "54만 명+" / 설명: "국내 추정 고립·은둔 청년 수" / 출처: "(보건복지부 2023)"
  2. 숫자: "6년" / 설명: "평균 고립 지속 기간" / 출처: "(청년재단 실태조사)"
  3. 숫자: "3명 중 1명" / 설명: "처음 고립 시작이 학업 문제" / 출처: "(K-NEET 연구)"
  4. 숫자: "78%" / 설명: "전문 지원 연결 시 회복 가능성 있음" / 출처: "(청년정신건강 연구)"

### CSS 요구사항
- #stats: background var(--color-primary)
- .stat-grid: display grid, `repeat(4, 1fr)` (모바일: 2열, 소형: 1열)
- .stat-card: 텍스트 중앙 정렬, padding 2rem, border-right 1px solid rgba(255,255,255,0.2)
- .stat-number: font-size 3rem, font-weight 700, color var(--color-accent)
- 숫자 카운트 애니메이션: Intersection Observer + requestAnimationFrame으로 
  섹션 진입 시 0→최종값으로 올라가는 카운팅 효과 (정수값에만 적용)
```

---

## ✅ Phase 03 완료 체크

- [ ] `data/cases.json` 파일 생성 확인
- [ ] 사례 카드 5개 렌더링 확인 (fetch 정상 작동)
- [ ] 카드 hover 효과 확인
- [ ] 통계 섹션 진입 시 숫자 카운팅 애니메이션 확인
- [ ] 모바일에서 그리드 반응형 확인
- [ ] 로컬(file://) 환경에서 fetch CORS 이슈 발생 시: 
  VS Code Live Server 사용 또는 JSON을 JS 변수로 인라인 처리 지시
