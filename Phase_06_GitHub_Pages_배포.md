# Phase 06 — GitHub Pages 배포 (열람 전용 웹 공개)

> **실행 순서**: Phase 05 완료 후 실행  
> **목적**: 로컬 완성 파일을 인터넷에서 열람 전용으로 공개  
> **수정은 여전히 로컬 VS Code에서만 진행**

---

## 📋 배포 전 최종 체크리스트

- [ ] `index.html` — 완성 확인
- [ ] `style.css` — 완성 확인  
- [ ] `main.js` — 완성 확인
- [ ] `data/cases.json` — 사례 내용 최종 확인 (익명 처리 여부 재검토)
- [ ] `assets/youth-isolation-casebook-2024.pdf` — 실제 PDF 파일 존재 확인
- [ ] `assets/og-image.jpg` — SNS 공유 이미지 (1200x630px) 존재 확인
- [ ] `README.md` — 작성 완료
- [ ] `index.html` 내 `[제작기관명]`, `[이메일]` 실제 정보로 교체 완료

---

## 🤖 AI 실행 프롬프트 (배포 자동화 스크립트)

```
## Phase 06: GitHub Pages 배포를 위한 설정 파일 생성

다음 파일들을 생성해 주세요.

### 1. .gitignore 파일
```
.DS_Store
Thumbs.db
*.log
node_modules/
.env
```

### 2. GitHub Actions 자동 배포 워크플로우
`.github/workflows/deploy.yml` 파일 생성:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

이 워크플로우는 main 브랜치에 push할 때마다 자동으로 GitHub Pages에 배포됩니다.
```

---

## 🖥️ 사람이 직접 수행하는 배포 단계

### Step 1: GitHub 저장소 생성
1. [github.com](https://github.com) 접속 → 로그인
2. 우측 상단 `+` → `New repository`
3. Repository name: `youth-isolation-homepage` (또는 원하는 이름)
4. **Public** 선택 (GitHub Pages 무료 사용)
5. `Create repository` 클릭

### Step 2: 로컬 Git 설정 및 Push
VS Code 터미널에서 순서대로 실행:

```bash
# 프로젝트 폴더에서
git init
git add .
git commit -m "initial: 고립·은둔 청년 사례집 홈페이지 초기 배포"
git branch -M main
git remote add origin https://github.com/[GitHub계정명]/youth-isolation-homepage.git
git push -u origin main
```

### Step 3: GitHub Pages 활성화
1. GitHub 저장소 → `Settings` 탭
2. 좌측 메뉴 `Pages` 클릭
3. Source: `GitHub Actions` 선택
4. 자동으로 워크플로우 실행 시작

### Step 4: 배포 URL 확인
- 약 2~3분 후 `https://[GitHub계정명].github.io/youth-isolation-homepage/` 접속
- Actions 탭에서 배포 진행 상태 확인 가능

---

## 🔄 이후 수정 방법 (로컬에서만)

```bash
# VS Code에서 파일 수정 후
git add .
git commit -m "update: [수정 내용 간략 설명]"
git push origin main
# → GitHub Actions가 자동으로 웹사이트 업데이트 (2~3분 소요)
```

### 자주 수정하는 파일 가이드

| 수정 목적 | 수정 파일 |
|---|---|
| 사례 내용 변경 | `data/cases.json` |
| 색상/폰트 변경 | `style.css` (`:root` 변수) |
| 기관 정보 변경 | `index.html` (#support 섹션) |
| 통계 수치 변경 | `index.html` (#stats 섹션) |
| PDF 파일 교체 | `assets/` 폴더 파일 교체 |
| 제목/설명 변경 | `index.html` (해당 섹션 직접 수정) |

---

## 🌐 선택: Netlify 배포 (GitHub 없이 더 간단)

GitHub 사용이 어렵다면 Netlify Drop 방식 사용:

1. [app.netlify.com/drop](https://app.netlify.com/drop) 접속
2. 프로젝트 폴더 전체를 **드래그 앤 드롭**
3. 즉시 임시 URL 발급 (예: `https://amazing-curie-abc123.netlify.app`)
4. 무료 커스텀 도메인 설정 가능

**수정 시**: 파일 수정 후 다시 폴더 드래그 앤 드롭 (재배포)

---

## ✅ Phase 06 완료 체크

- [ ] 배포 URL에서 홈페이지 정상 접속 확인
- [ ] 모바일에서 접속 확인
- [ ] PDF 다운로드 버튼 동작 확인
- [ ] SNS 공유 시 OG 이미지 표시 확인 (Facebook Sharing Debugger 활용)
- [ ] 지원기관 링크 모두 정상 연결 확인
- [ ] 배포 URL을 `index.html`의 `og:url`, `canonical` 태그에 업데이트 후 재배포
