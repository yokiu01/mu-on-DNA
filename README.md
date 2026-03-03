# MU:ON 춤 DNA 테스트

> AI 기반 한국 무용 교육 플랫폼 MU:ON의 춤 DNA 유형 테스트 웹사이트

## 프로젝트 개요

사용자의 춤 스타일을 8가지 DNA 유형으로 분류하는 인터랙티브 퀴즈 웹사이트입니다. 한국 전통 무용의 미학과 현대적 웹 디자인을 결합한 **"묵향(墨香)"** 테마를 적용했습니다.

### 주요 특징

- 12개 질문으로 구성된 스토리텔링 기반 퀴즈
- 초보자도 쉽게 답할 수 있는 보편적 상황 설정
- 몰입감 있는 인트로 화면 (의문의 스승 연출)
- 커스텀 붓터치 스타일 SVG 아이콘
- 반응형 디자인 및 접근성 고려

---

## 8가지 춤 DNA 유형

| # | 유형 | 영문 | 별명 | 핵심 |
|---|------|------|------|------|
| 1 | 파워풀 | Powerful | 무대 장악형 | 강한 힘으로 표현한다 |
| 2 | 정밀 | Precise | 디테일 집착형 | 손끝까지 감성을 담는다 |
| 3 | 미니멀 | Minimal | 프레임 장인 | 동작을 쪼개어 분절한다 |
| 4 | 표현자 | Expresser | 감정 과몰입형 | 감정을 연기한다 |
| 5 | 테크니션 | Technician | 스킬 덕후 | 기술로 보여준다 |
| 6 | 클래시컬 | Classical | 정적인 카리스마 | 한국무용의 본질을 품는다 |
| 7 | 그루버 | Groover | 리듬이 체질 | 몸을 리듬에 맡긴다 |
| 8 | 실루엣 | Silhouette | 라인의 정석 | 선과 모양을 만든다 |

---

## 기술 스택

| 분야 | 기술 |
|------|------|
| 마크업 | HTML5 (시맨틱) |
| 스타일 | CSS3 (커스텀 프로퍼티, Flexbox, Grid) |
| 스크립트 | Vanilla JavaScript (ES6 모듈) |
| 배포 | Vercel |

### 폰트

- **Gowun Batang (고운바탕)** - 디스플레이/타이틀 (한국적 세리프)
- **Pretendard** - 본문 (현대적 산세리프)

---

## 프로젝트 구조

```
dance-dna-types/
├── index.html              # 메인 페이지 (8유형 소개)
├── quiz.html               # 퀴즈 페이지
├── result.html             # 결과 페이지
├── styles.css              # 메인 페이지 스타일
├── quiz.css                # 퀴즈/결과 페이지 스타일
│
├── js/
│   ├── quiz-data.js        # 질문/답변/유형 데이터
│   ├── quiz-engine.js      # 점수 계산 엔진
│   ├── quiz-ui.js          # 퀴즈 UI 컨트롤러
│   └── result-ui.js        # 결과 UI 컨트롤러
│
├── assets/
│   └── icons/              # 커스텀 SVG 아이콘
│       ├── powerful.svg
│       ├── precise.svg
│       ├── minimal.svg
│       ├── expresser.svg
│       ├── technician.svg
│       ├── classical.svg
│       ├── groover.svg
│       └── silhouette.svg
│
├── src/                    # TypeScript 소스 (개발용)
├── tests/                  # 테스트 파일
│
├── 디자인/
│   └── 묵향 DESIGN-GUIDE.md
│
├── 설문지문-유형매핑.md      # 설문 문항 및 점수 매핑 문서
├── 8가지 춤유형.md          # 유형별 상세 설명
└── README.md
```

---

## 디자인 시스템: 묵향 (Ink & Essence)

### 핵심 원칙

1. **그라데이션 배제** - Solid 컬러 + 미묘한 노이즈 텍스처
2. **한국적 우아함** - 전통 서체와 여백의 미
3. **미니멀리즘** - 불필요한 장식 제거
4. **부드러운 인터랙션** - 자연스러운 트랜지션

### 컬러 팔레트

**Core - Ink & Paper**
```css
--ink-800: #1A1A2E;    /* 깊은 먹색 (Primary Dark) */
--ink-700: #2D2D44;
--paper: #FAF8F5;       /* 따뜻한 한지색 (Primary Light) */
--paper-warm: #F5F2ED;
```

**Accent - Gold & Bronze**
```css
--gold: #B8860B;
--gold-light: #D4A84B;
--gold-dark: #8B6914;
```

**Type Colors**
```css
--type-1: #B83232;  /* Powerful - 크림슨 */
--type-2: #2E5A8B;  /* Precise - 로열블루 */
--type-3: #3D4F4F;  /* Minimal - 슬레이트 */
--type-4: #7A3B7A;  /* Expresser - 플럼 */
--type-5: #C65D2A;  /* Technician - 번트오렌지 */
--type-6: #6B4423;  /* Classical - 세피아 */
--type-7: #B8860B;  /* Groover - 골드 */
--type-8: #2D7A7A;  /* Silhouette - 틸 */
```

### 커스텀 아이콘

각 유형별로 붓터치 스타일의 SVG 아이콘이 제작되어 있습니다:

- `stroke-linecap: round` 로 부드러운 붓 끝 표현
- `currentColor` 사용으로 테마 컬러 적용 가능
- 64x64 viewBox 기준으로 제작

---

## 페이지 설명

### 1. 메인 페이지 (index.html)

- **Hero 섹션**: 타이틀 및 브랜드 소개
- **Overview 섹션**: 8유형 카드 그리드 (클릭시 해당 유형으로 스크롤)
- **Type Cards 섹션**: 각 유형 상세 설명 카드
- **Summary Table**: 8유형 한눈에 보기 표
- **CTA 섹션**: 테스트 시작 버튼

### 2. 퀴즈 페이지 (quiz.html)

- **인트로 화면**: 2페이지 구성의 몰입형 스토리 연출
  - Page 1: 스승의 등장 (타이핑 애니메이션)
  - Page 2: 스승의 초대 (순차 등장 텍스트)
- **퀴즈 화면**: 12개 질문 인터랙티브 퀴즈
  - 진행률 표시 (이모지 + 프로그레스 바)
  - 슬라이드 애니메이션 전환
  - 뒤로가기/종료 기능

### 3. 결과 페이지 (result.html)

- **로딩 화면**: 분석 중 애니메이션
- **메인 결과**: 1순위 DNA 유형 카드
- **서브 결과**: 2순위 DNA 유형
- **점수 차트**: 8유형 점수 바 차트
- **공유 기능**: 카카오톡, 인스타그램, X(트위터), 링크 복사

---

## 실행 방법

### 로컬 개발

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# VS Code Live Server 확장 사용
```

브라우저에서 `http://localhost:8000` 접속

### Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

---

## 설문 설계 원칙

1. **스토리텔링 방식**: 각 질문이 하나의 장면처럼 구성
2. **초보자 친화적**: 춤 경험이 없어도 상상으로 답할 수 있는 보편적 상황
3. **품격 있는 문체**: 연령대에 관계없이 읽기 편한 표현
4. **균형 잡힌 측정**: 모든 유형이 고르게 측정되도록 설계

---

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- 모바일 브라우저 (iOS Safari, Android Chrome)

---

## 접근성

- 시맨틱 HTML 마크업
- `prefers-reduced-motion` 미디어 쿼리 지원
- 키보드 네비게이션 (focus-visible)
- 충분한 색상 대비 (WCAG 2.1 AA)

---

## 라이선스

이 프로젝트는 MU:ON 플랫폼의 일부입니다.

---

**MU:ON** - AI 기반 한국 무용 교육 플랫폼
