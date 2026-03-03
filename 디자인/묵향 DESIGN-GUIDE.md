# MU:ON 디자인 가이드 - 묵향 (墨香)

> 다른 에이전트에게 전달하기 위한 디자인 시스템 요약

## 핵심 원칙

```
1. 그라데이션 사용 금지 (linear-gradient 절대 X)
2. Solid 컬러 + 미묘한 텍스처 사용
3. 한국 전통 미학 + 현대적 미니멀리즘
```

---

## 컬러 팔레트

### 메인 컬러

```css
/* 다크/배경 */
--ink-800: #1A1A2E;    /* 메인 다크 (Hero, 버튼, Footer) */
--ink-700: #2D2D44;    /* 호버 상태 */

/* 라이트/배경 */
--paper: #FAF8F5;      /* 메인 배경 (따뜻한 한지색) */
--white: #FFFFFF;      /* 카드 배경 */

/* 악센트 */
--gold: #B8860B;       /* 포인트 (진행바, 테두리, 밑줄) */
--gold-dark: #8B6914;  /* 텍스트용 골드 */
```

### 유형별 컬러 (8가지)

```css
--type-1: #B83232;  /* 파워풀 - 크림슨 */
--type-2: #2E5A8B;  /* 정밀 - 로열블루 */
--type-3: #3D4F4F;  /* 미니멀 - 슬레이트 */
--type-4: #7A3B7A;  /* 표현자 - 플럼 */
--type-5: #C65D2A;  /* 테크니션 - 번트오렌지 */
--type-6: #6B4423;  /* 클래시컬 - 세피아 */
--type-7: #B8860B;  /* 그루버 - 골드 */
--type-8: #2D7A7A;  /* 실루엣 - 틸 */
```

### Gray Scale

```css
--gray-100: #F5F5F5;
--gray-200: #EEEEEE;
--gray-300: #E0E0E0;
--gray-500: #9E9E9E;
--gray-600: #757575;
--gray-700: #616161;
```

---

## 타이포그래피

### 폰트

```html
<!-- 필수 폰트 로드 -->
<link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
```

```css
/* 타이틀/디스플레이 - 한국적 세리프 */
font-family: 'Gowun Batang', Georgia, serif;

/* 본문 - 현대적 산세리프 */
font-family: 'Pretendard', -apple-system, system-ui, sans-serif;
```

### 크기

| 용도 | 크기 | 폰트 |
|------|------|------|
| Hero Title | `clamp(36px, 8vw, 72px)` | Gowun Batang |
| Section Title | `clamp(28px, 5vw, 40px)` | Gowun Batang |
| Body | `14-15px` | Pretendard |
| Small | `11-13px` | Pretendard |

---

## 컴포넌트 스타일

### 버튼

```css
/* 기본 버튼 - Solid 컬러 */
.button {
    background: #1A1A2E;  /* ink-800 */
    color: #FFFFFF;
    border: none;
    border-radius: 9999px;
    padding: 16px 40px;
    font-weight: 600;
    box-shadow: 0 4px 16px rgba(13, 13, 18, 0.08);
}

.button:hover {
    background: #2D2D44;  /* ink-700 */
    transform: translateY(-2px);
}
```

### 카드

```css
.card {
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 18px;
    padding: 40px;
}

.card:hover {
    border-color: #B8860B;  /* gold */
    box-shadow: 0 8px 32px rgba(13, 13, 18, 0.10);
}
```

### 좌측 컬러바 (유형 표시)

```css
.type-indicator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--type-color);  /* 해당 유형 컬러 */
}
```

### 섹션 타이틀

```css
.section-title {
    font-family: 'Gowun Batang', serif;
    font-size: clamp(28px, 5vw, 40px);
    color: #1A1A2E;
    text-align: center;
}

/* 금색 밑줄 */
.section-title::after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: #B8860B;
    margin: 16px auto 0;
}
```

---

## 배경 처리

### 다크 배경 (Hero, Footer)

```css
.dark-section {
    background: #1A1A2E;
    color: #FFFFFF;
}

/* 미묘한 빛 효과 (radial만 허용) */
.dark-section::before {
    background:
        radial-gradient(ellipse at 20% 80%, rgba(184, 134, 11, 0.08), transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(45, 90, 139, 0.06), transparent 50%);
}
```

### 노이즈 텍스처 (한지 느낌)

```css
body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.025;
    pointer-events: none;
    z-index: 9999;
}
```

---

## 인터랙션

### 호버 효과

```css
/* 카드 호버 */
transform: translateY(-6px);
border-color: #B8860B;
box-shadow: 0 8px 32px rgba(13, 13, 18, 0.10);

/* 버튼 호버 */
transform: translateY(-2px);
box-shadow: 0 8px 32px rgba(13, 13, 18, 0.10);
```

### 트랜지션

```css
transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
```

---

## 금지 사항

| 금지 | 대안 |
|------|------|
| `linear-gradient()` | Solid 컬러 사용 |
| 핑크/보라 그라데이션 | 먹색 + 금색 조합 |
| Inter, Roboto 폰트 | Gowun Batang, Pretendard |
| 과도한 border-radius (32px+) | 최대 24px |
| 글래스모피즘 남용 | 깔끔한 테두리 + 그림자 |

---

## 허용 사항

| 허용 | 용도 |
|------|------|
| `radial-gradient()` | 미묘한 빛 효과에만 |
| SVG 노이즈 텍스처 | 배경 질감용 |
| `box-shadow` | 깊이/부유감 표현 |
| `backdrop-filter: blur()` | 모달 배경에 제한적 사용 |

---

## 빠른 참조

```css
:root {
    /* 필수 컬러 */
    --ink-800: #1A1A2E;
    --paper: #FAF8F5;
    --gold: #B8860B;

    /* 필수 폰트 */
    --font-display: 'Gowun Batang', Georgia, serif;
    --font-body: 'Pretendard', system-ui, sans-serif;

    /* 필수 값 */
    --radius-card: 18px;
    --radius-button: 9999px;
    --shadow: 0 4px 16px rgba(13, 13, 18, 0.08);
    --transition: 250ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

**테마 이름**: 묵향 (墨香, Ink & Essence)
**컨셉**: 한국 전통 + 현대 미니멀
**핵심 키워드**: 먹색, 금색, 한지, 여백, Solid 컬러
