# MU:ON 춤 DNA 8가지 유형

> AI 기반 한국 무용 교육 플랫폼 MU:ON의 춤 DNA 유형 테스트 웹사이트

## 프로젝트 개요

이 프로젝트는 사용자의 춤 스타일을 8가지 DNA 유형으로 분류하는 인터랙티브 웹사이트입니다. 한국 전통 무용의 미학과 현대적 웹 디자인을 결합한 "묵향(墨香)" 테마를 적용했습니다.

### 8가지 춤 DNA 유형

| 유형 | 이름 | 핵심 |
|------|------|------|
| 1 | 파워풀 (Powerful) | 강한 힘으로 표현한다 |
| 2 | 정밀 (Precise) | 손끝까지 감성을 담는다 |
| 3 | 미니멀 (Minimal) | 동작을 쪼개어 분절한다 |
| 4 | 표현자 (Expresser) | 감정을 연기한다 |
| 5 | 테크니션 (Technician) | 기술로 보여준다 |
| 6 | 클래시컬 (Classical) | 한국무용의 본질을 품는다 |
| 7 | 그루버 (Groover) | 몸을 리듬에 맡긴다 |
| 8 | 실루엣 (Silhouette) | 선과 모양을 만든다 |

## 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 커스텀 프로퍼티, Flexbox, Grid, 애니메이션
- **Vanilla JavaScript** - ES6 모듈

### 폰트

- **Gowun Batang (고운바탕)** - 디스플레이/타이틀 (한국적 세리프)
- **Pretendard** - 본문 (현대적 산세리프)

## 파일 구조

```
dance-dna-types/
├── index.html          # 메인 페이지 (8유형 소개)
├── quiz.html           # 퀴즈 페이지
├── result.html         # 결과 페이지
├── styles.css          # 메인 페이지 스타일
├── quiz.css            # 퀴즈/결과 페이지 스타일
├── js/
│   ├── quiz-data.js    # 질문/답변 데이터
│   ├── quiz-engine.js  # 점수 계산 로직
│   ├── quiz-ui.js      # 퀴즈 UI 컨트롤러
│   └── result-ui.js    # 결과 UI 컨트롤러
├── tests/              # 테스트 파일
├── README.md           # 프로젝트 문서
└── DESIGN-THEME.md     # 디자인 시스템 가이드
```

## 디자인 시스템: 묵향 (墨香)

### 컬러 팔레트

**Ink & Paper**
- `--ink-800`: #1A1A2E (깊은 먹색)
- `--paper`: #FAF8F5 (따뜻한 한지색)

**Accent**
- `--gold`: #B8860B (금색)
- `--gold-light`: #D4A84B

**Type Colors**
각 유형별 고유 컬러가 지정되어 있습니다:
- 파워풀: #B83232 (크림슨)
- 정밀: #2E5A8B (로열블루)
- 미니멀: #3D4F4F (슬레이트)
- 표현자: #7A3B7A (플럼)
- 테크니션: #C65D2A (번트오렌지)
- 클래시컬: #6B4423 (세피아)
- 그루버: #B8860B (골드)
- 실루엣: #2D7A7A (틸)

### 디자인 원칙

1. **그라데이션 배제** - Solid 컬러 + 미묘한 텍스처
2. **한국적 우아함** - 전통 서체와 여백의 미
3. **미니멀리즘** - 불필요한 장식 제거
4. **부드러운 인터랙션** - 자연스러운 트랜지션

## 실행 방법

로컬 서버를 실행하여 프로젝트를 확인할 수 있습니다:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve

# VS Code Live Server 확장 사용
```

브라우저에서 `http://localhost:8000` 접속

## 페이지 설명

### 1. 메인 페이지 (index.html)
- Hero 섹션: 타이틀 및 소개
- Overview 섹션: 8유형 카드 그리드
- Type Cards 섹션: 각 유형 상세 설명
- Summary Table: 한눈에 보기 표
- CTA 섹션: 테스트 시작 버튼

### 2. 퀴즈 페이지 (quiz.html)
- 12개 질문 인터랙티브 퀴즈
- 진행률 표시
- 슬라이드 애니메이션 전환

### 3. 결과 페이지 (result.html)
- 메인 DNA 유형 표시
- 서브 DNA 유형
- 점수 차트
- SNS 공유 기능

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

이 프로젝트는 MU:ON 플랫폼의 일부입니다.

---

**MU:ON** - AI 기반 한국 무용 교육 플랫폼
