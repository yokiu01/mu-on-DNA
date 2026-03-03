# MU:ON Design System - 묵향 (墨香, Ink & Essence)

> 한국 전통 미학 + 현대적 미니멀리즘
> 그라데이션 배제, Solid 컬러 + 텍스처 기반

## 1. 브랜드 컨셉

- **이름**: MU:ON (AI 기반 한국 무용 교육 플랫폼)
- **테마**: 묵향 (墨香) - 먹의 향기
- **키워드**: 여백의 미, 먹과 한지, 금색 악센트, 단아한 우아함
- **원칙**: 그라데이션 사용 금지, Solid 컬러 + 미묘한 텍스처

---

## 2. 컬러 시스템

### Core Palette - Ink & Paper

| Token | Hex | 용도 |
|-------|-----|------|
| `--ink-900` | `#0D0D12` | 가장 진한 먹색 |
| `--ink-800` | `#1A1A2E` | 메인 다크 배경, 버튼 |
| `--ink-700` | `#2D2D44` | 호버 상태 |
| `--ink-600` | `#3D3D5C` | 보조 요소 |
| `--ink-500` | `#52527A` | 비활성 상태 |

### Paper & Warmth

| Token | Hex | 용도 |
|-------|-----|------|
| `--paper` | `#FAF8F5` | 메인 배경 (따뜻한 한지색) |
| `--paper-warm` | `#F5F2ED` | 카드 내부 배경 |
| `--paper-cool` | `#F8F9FA` | 차가운 배경 |
| `--cream` | `#FDF9F3` | 밝은 크림색 |

### Accent - Gold & Bronze

| Token | Hex | 용도 |
|-------|-----|------|
| `--gold` | `#B8860B` | 메인 악센트 (진행바, 포인트) |
| `--gold-light` | `#D4A84B` | 밝은 골드 |
| `--gold-dark` | `#8B6914` | 어두운 골드 (텍스트) |
| `--bronze` | `#CD7F32` | 브론즈 |
| `--copper` | `#B87333` | 구리색 |

### 8가지 유형별 컬러

| 유형 | Token | Hex | 이름 |
|------|-------|-----|------|
| 1. 파워풀 | `--type-1` | `#B83232` | Deep Crimson |
| 2. 정밀 | `--type-2` | `#2E5A8B` | Royal Blue |
| 3. 미니멀 | `--type-3` | `#3D4F4F` | Slate |
| 4. 표현자 | `--type-4` | `#7A3B7A` | Plum |
| 5. 테크니션 | `--type-5` | `#C65D2A` | Burnt Orange |
| 6. 클래시컬 | `--type-6` | `#6B4423` | Sepia |
| 7. 그루버 | `--type-7` | `#B8860B` | Gold |
| 8. 실루엣 | `--type-8` | `#2D7A7A` | Teal |

### Neutral

| Token | Hex |
|-------|-----|
| `--white` | `#FFFFFF` |
| `--gray-50` | `#FAFAFA` |
| `--gray-100` | `#F5F5F5` |
| `--gray-200` | `#EEEEEE` |
| `--gray-300` | `#E0E0E0` |
| `--gray-400` | `#BDBDBD` |
| `--gray-500` | `#9E9E9E` |
| `--gray-600` | `#757575` |
| `--gray-700` | `#616161` |
| `--gray-800` | `#424242` |
| `--gray-900` | `#212121` |

---

## 3. 타이포그래피

### 폰트 패밀리

```css
/* 디스플레이/타이틀 - 한국적 세리프 */
--font-display: 'Gowun Batang', 'Nanum Myeongjo', Georgia, serif;

/* 본문 - 현대적 산세리프 */
--font-body: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### 폰트 로드

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet">

<!-- Pretendard CDN -->
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
```

### 폰트 스케일

| 용도 | 크기 | Weight | Font |
|------|------|--------|------|
| Hero Title | `clamp(36px, 8vw, 72px)` | 400 | Display |
| Section Title | `clamp(28px, 5vw, 40px)` | 400 | Display |
| Type Name | `clamp(26px, 4vw, 32px)` | 400 | Display |
| Quote | `clamp(18px, 3vw, 22px)` | 400 | Display |
| Body | `14-15px` | 400-500 | Body |
| Small/Label | `11-13px` | 500-600 | Body |
| Logo | `18-22px` | 400, letter-spacing: 4-6px | Display |

---

## 4. 간격 (Spacing)

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-7: 32px;
--space-8: 40px;
--space-9: 48px;
--space-10: 64px;
--space-11: 80px;
--space-12: 96px;
```

---

## 5. Border Radius

```css
--radius-xs: 4px;
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 18px;
--radius-2xl: 24px;
--radius-full: 9999px;  /* 버튼, 뱃지, 태그용 */
```

---

## 6. 그림자 (Shadows)

부드럽고 자연스러운 그림자 사용:

```css
--shadow-xs: 0 1px 2px rgba(13, 13, 18, 0.04);
--shadow-sm: 0 2px 8px rgba(13, 13, 18, 0.06);
--shadow-md: 0 4px 16px rgba(13, 13, 18, 0.08);
--shadow-lg: 0 8px 32px rgba(13, 13, 18, 0.10);
--shadow-xl: 0 16px 48px rgba(13, 13, 18, 0.12);
--shadow-gold: 0 4px 20px rgba(184, 134, 11, 0.15);
```

---

## 7. 트랜지션/애니메이션

### 트랜지션 토큰

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-back: cubic-bezier(0.34, 1.56, 0.64, 1);
--transition-fast: 150ms var(--ease-out);
--transition-normal: 250ms var(--ease-out);
--transition-slow: 400ms var(--ease-out);
```

### 호버 효과

- 카드: `translateY(-6px)` + 그림자 강화 + 골드 테두리
- 버튼: `translateY(-2px)` + 그림자 강화
- 테이블 행: 좌측 컬러 바 3px 표시

---

## 8. 주요 컴포넌트 패턴

### Hero 섹션

```css
.hero {
    background: var(--ink-800);
}

/* 미묘한 빛 효과 (그라데이션 아님 - radial만 허용) */
.hero-background::before {
    background:
        radial-gradient(ellipse 80% 50% at 20% 80%, rgba(184, 134, 11, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse 60% 40% at 80% 20%, rgba(45, 90, 139, 0.06) 0%, transparent 50%);
}

/* 텍스처 오버레이 */
.hero-background::after {
    background-image: url("data:image/svg+xml,...noise...");
    opacity: 0.04;
}
```

### CTA 버튼

```css
.cta-button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4) var(--space-8);
    background: var(--ink-800);  /* Solid color */
    color: var(--white);
    border: none;
    border-radius: var(--radius-full);
    font-size: 15px;
    font-weight: 600;
    box-shadow: var(--shadow-md);
}

.cta-button:hover {
    background: var(--ink-700);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

### 카드

```css
.card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-xl);
    padding: var(--space-8);
    position: relative;
    overflow: hidden;
}

.card:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--gold);
}

/* 좌측 컬러 바 */
.card .color-bar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--type-color);  /* Solid color */
}
```

### 태그/뱃지

```css
.tag {
    display: inline-block;
    padding: var(--space-1) var(--space-3);
    background: var(--paper);
    color: var(--ink-700);
    border: 1px solid var(--gray-300);
    border-radius: var(--radius-full);
    font-size: 11px;
    font-weight: 500;
}
```

### 섹션 타이틀

```css
.section-title {
    font-family: var(--font-display);
    font-size: clamp(28px, 5vw, 40px);
    color: var(--ink-800);  /* Solid color - no gradient text */
}

.section-title::after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: var(--gold);
    margin: var(--space-4) auto 0;
}
```

### 테이블

```css
.table-header {
    background: var(--ink-800);  /* Solid color */
    color: var(--white);
    font-weight: 600;
}

.table-row:hover {
    background: var(--paper);
    border-left: 3px solid var(--type-color);
}
```

---

## 9. 텍스처 (Noise)

한지/종이 질감을 위한 미묘한 노이즈 오버레이:

```css
/* SVG 노이즈 텍스처 */
body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.025;
    pointer-events: none;
    z-index: 9999;
}
```

---

## 10. 반응형 브레이크포인트

| 브레이크포인트 | 변경사항 |
|---------------|---------|
| `768px` | 카드 1컬럼, 테이블 2컬럼, 컨테이너 패딩 축소 |
| `480px` | 그리드 2컬럼, 폰트 크기 축소, 레이아웃 단순화 |

---

## 11. 금지 사항

1. **linear-gradient()** 버튼, 배경, 텍스트에 사용 금지
2. **핑크/보라 그라데이션** 사용 금지
3. **과도한 글래스모피즘** 효과 자제
4. **Inter, Roboto** 등 generic 폰트 사용 금지
5. **동글동글한 과도한 radius** (24px 이상) 자제

---

## 12. 허용 사항

1. **radial-gradient()** 미묘한 빛/그림자 효과에만 허용
2. **Solid 컬러** 기본 사용
3. **SVG 노이즈 텍스처** 배경 질감용
4. **미묘한 box-shadow** 깊이 표현

---

## 13. 디자인 원칙 요약

1. **먹색 + 금색** 중심의 차분하고 품격있는 톤
2. **한국적 세리프** (Gowun Batang) 타이틀에 사용
3. **여백의 미** - 충분한 spacing으로 숨쉬는 레이아웃
4. **미묘한 텍스처** - 한지 느낌의 노이즈 오버레이
5. **Solid 컬러** - 그라데이션 대신 단색 사용
6. **자연스러운 트랜지션** - 부드럽고 우아한 애니메이션
7. **유형별 고유 컬러** - 명확한 시각적 구분

---

## 14. 외부 리소스

```html
<!-- Gowun Batang -->
<link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet">

<!-- Pretendard -->
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
```
