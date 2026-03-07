# MU:ON Design System - 연지 (燕脂, Yeonji)

> 한복 연지곤지의 고급스러운 분홍 + 한국 전통 미학
> 20대 여성을 위한 단아하고 품격있는 라이트 테마

## 1. 브랜드 컨셉

- **이름**: MU:ON (AI 기반 한국 무용 교육 플랫폼)
- **테마**: 연지 (燕脂) - 연지곤지의 붉은빛
- **키워드**: 연지곤지, 궁중의 단아함, 금박, 한지, 절제된 우아함
- **타겟**: 20대 여성, 한국무용에 관심있는 MZ세대
- **무드**: 고급스러우면서도 현대적인, 품격있는 전통미

---

## 2. 컬러 시스템

### Primary - 연지 (Yeonji)

| Token | Hex | 용도 |
|-------|-----|------|
| `--yeonji-50` | `#FDF5F6` | 가장 연한 배경 |
| `--yeonji-100` | `#FBEAEC` | 호버 배경 |
| `--yeonji-200` | `#F5CDD3` | 카드 포인트 배경 |
| `--yeonji-300` | `#E9A5AF` | 서브 요소, 테두리 |
| `--yeonji-400` | `#D4707A` | 아이콘, 진행바 |
| `--yeonji-500` | `#C45A65` | **메인 CTA 버튼** |
| `--yeonji-600` | `#A84850` | 버튼 호버 |
| `--yeonji-700` | `#8B3A42` | 버튼 액티브, 강조 텍스트 |

### Background - 한지 (Hanji)

| Token | Hex | 용도 |
|-------|-----|------|
| `--hanji-white` | `#FDFBF9` | 메인 배경 |
| `--hanji-warm` | `#FAF7F2` | 섹션 배경 |
| `--hanji-cream` | `#F5F0E8` | 카드 내부, 구분선 |
| `--white` | `#FFFFFF` | 순백색 (카드) |

### Accent - 오방색 기반 (Five Colors)

| Token | Hex | 이름 | 용도 |
|-------|-----|------|------|
| `--dancheong-blue` | `#2E5A7C` | 청색 | 정보, 차분한 포인트 |
| `--dancheong-yellow` | `#D4A84B` | 황색 (금색) | 고급 포인트, 금박 |
| `--dancheong-white` | `#F5F2ED` | 백색 | 여백 |
| `--dancheong-black` | `#2D2A32` | 흑색 | 텍스트 |

### 추가 전통색

| Token | Hex | 이름 | 용도 |
|-------|-----|------|------|
| `--songhwa` | `#EED9C4` | 송화색 | 따뜻한 배경 |
| `--okbit` | `#7BABA3` | 옥빛 | 차분한 악센트 |
| `--jambit` | `#6B4A6B` | 자색 | 특별 강조 |
| `--chima-pink` | `#E8A4B8` | 치마색 | 부드러운 핑크 |

### 8가지 유형별 컬러 (Type Colors)

| 유형 | Token | Hex | 이름 |
|------|-------|-----|------|
| 1. 파워풀 | `--type-1` | `#C45A65` | Yeonji Red |
| 2. 정밀 | `--type-2` | `#2E5A7C` | Dancheong Blue |
| 3. 미니멀 | `--type-3` | `#8A9A95` | Celadon |
| 4. 표현자 | `--type-4` | `#6B4A6B` | Jam Purple |
| 5. 테크니션 | `--type-5` | `#D4A84B` | Gold |
| 6. 클래시컬 | `--type-6` | `#8B6B4A` | Antique |
| 7. 그루버 | `--type-7` | `#C9853C` | Amber |
| 8. 실루엣 | `--type-8` | `#7BABA3` | Jade |

### Text Colors

| Token | Hex | 용도 |
|-------|-----|------|
| `--text-primary` | `#2D2A32` | 제목, 본문 |
| `--text-secondary` | `#5C5768` | 부제목, 설명 |
| `--text-tertiary` | `#8E899A` | 힌트, 비활성 |
| `--text-muted` | `#A09AAC` | 플레이스홀더 |
| `--text-on-yeonji` | `#FFFFFF` | 연지 버튼 위 텍스트 |

### Semantic Colors

| Token | Hex | 용도 |
|-------|-----|------|
| `--success` | `#5A9E78` | 성공, 완료 |
| `--warning` | `#D4A84B` | 경고 |
| `--error` | `#C45A65` | 에러 |
| `--info` | `#2E5A7C` | 정보 |

---

## 3. 타이포그래피

### 폰트 패밀리

```css
/* 디스플레이/타이틀 - 우아한 한글 세리프 */
--font-display: 'Gowun Batang', 'Nanum Myeongjo', Georgia, serif;

/* 본문 - 현대적이고 읽기 편한 산세리프 */
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
| Hero Title | `clamp(28px, 6vw, 48px)` | 400 | Display |
| Section Title | `clamp(20px, 4vw, 32px)` | 400 | Display |
| Type Name | `clamp(24px, 5vw, 28px)` | 400 | Display |
| Card Title | `18-20px` | 600 | Body |
| Body Large | `16px` | 400 | Body |
| Body | `14-15px` | 400 | Body |
| Small/Label | `12-13px` | 500-600 | Body |
| Caption | `11px` | 400 | Body |
| Logo | `22px` | 400, letter-spacing: 4px | Display |

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
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-full: 9999px;  /* 버튼, 뱃지, 태그용 */
```

---

## 6. 그림자 (Shadows)

절제되고 부드러운 그림자:

```css
/* 연지빛 그림자 */
--shadow-yeonji-sm: 0 2px 8px rgba(196, 90, 101, 0.08);
--shadow-yeonji-md: 0 4px 16px rgba(196, 90, 101, 0.12);
--shadow-yeonji-lg: 0 8px 24px rgba(196, 90, 101, 0.15);

/* 중립 그림자 */
--shadow-card: 0 2px 12px rgba(45, 42, 50, 0.06);
--shadow-card-hover: 0 8px 24px rgba(45, 42, 50, 0.10);

/* 버튼용 */
--shadow-button: 0 4px 14px rgba(196, 90, 101, 0.20);
--shadow-button-hover: 0 6px 20px rgba(196, 90, 101, 0.28);

/* 금박 효과 */
--shadow-gold: 0 2px 8px rgba(212, 168, 75, 0.15);
```

---

## 7. 트랜지션/애니메이션

### 트랜지션 토큰

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--transition-fast: 150ms var(--ease-out);
--transition-normal: 250ms var(--ease-out);
--transition-slow: 400ms var(--ease-out);
```

### 호버 효과

- 카드: `translateY(-4px)` + 그림자 강화 + 테두리 색상 변경
- 버튼: `translateY(-2px)` + 그림자 강화
- 메뉴 아이템: `translateX(4px)` + 테두리 색상 변경
- 링크: 연지색 언더라인 페이드인

---

## 8. 주요 컴포넌트 패턴

### 네비게이션 바

```css
.nav {
    position: fixed;
    top: 0;
    height: 60px;
    background: rgba(253, 251, 249, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(196, 90, 101, 0.1);
}

.logo {
    font-family: var(--font-display);
    font-size: 22px;
    letter-spacing: 4px;
    color: var(--yeonji-500);
}

.logo span {
    color: var(--dancheong-yellow);  /* 콜론에 금색 */
}
```

### Hero 섹션

```css
.hero {
    background: linear-gradient(180deg, var(--hanji-white) 0%, var(--yeonji-50) 100%);
    text-align: center;
    padding: 48px 24px;
}

/* 연지 문양 장식 */
.hero::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, var(--yeonji-200) 0%, transparent 70%);
    opacity: 0.5;
    border-radius: 50%;
}

.hero-title {
    font-family: var(--font-display);
    font-size: clamp(28px, 6vw, 48px);
    color: var(--text-primary);
}

.hero-title em {
    color: var(--yeonji-500);
    font-style: normal;
}
```

### CTA 버튼 (Primary)

```css
.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    background: var(--yeonji-500);
    color: white;
    border: none;
    border-radius: var(--radius-full);
    font-size: 15px;
    font-weight: 600;
    box-shadow: var(--shadow-button);
    transition: var(--transition-normal);
}

.btn-primary:hover {
    background: var(--yeonji-600);
    transform: translateY(-2px);
    box-shadow: var(--shadow-button-hover);
}

.btn-primary:active {
    background: var(--yeonji-700);
    transform: translateY(0);
}
```

### Secondary 버튼

```css
.btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: transparent;
    color: var(--yeonji-500);
    border: 1.5px solid var(--yeonji-300);
    border-radius: var(--radius-full);
    font-size: 14px;
    font-weight: 600;
    transition: var(--transition-normal);
}

.btn-secondary:hover {
    background: var(--yeonji-50);
    border-color: var(--yeonji-500);
}
```

### 뱃지/태그

```css
.badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: var(--hanji-white);
    border: 1px solid var(--yeonji-200);
    border-radius: 20px;
    font-size: 12px;
    color: var(--yeonji-600);
}

/* 금박 마름모 장식 */
.badge::before {
    content: '◆';
    font-size: 8px;
    color: var(--dancheong-yellow);
}
```

### 유형 카드

```css
.type-card {
    background: white;
    border-radius: 20px;
    padding: 24px;
    box-shadow: var(--shadow-card);
    border: 1px solid rgba(196, 90, 101, 0.08);
    position: relative;
    overflow: hidden;
}

/* 상단 컬러 바 */
.type-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--yeonji-400);
}

/* 금박 마름모 장식 */
.type-card::after {
    content: '◇';
    position: absolute;
    top: 16px;
    right: 16px;
    color: var(--dancheong-yellow);
    font-size: 20px;
    opacity: 0.6;
}

.type-label {
    font-size: 11px;
    color: var(--yeonji-500);
    font-weight: 600;
    letter-spacing: 1px;
}

.type-name {
    font-family: var(--font-display);
    font-size: 26px;
    color: var(--text-primary);
}
```

### 태그

```css
.tag {
    padding: 6px 12px;
    background: var(--yeonji-50);
    color: var(--yeonji-600);
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
}

.tag.accent {
    background: var(--songhwa);
    color: var(--jambit);
}
```

### 스탯 카드

```css
.stat-card {
    background: white;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    box-shadow: var(--shadow-card);
    border: 1px solid rgba(0,0,0,0.04);
}

.stat-card:hover {
    transform: translateY(-2px);
    border-color: var(--yeonji-200);
}

.stat-icon {
    width: 40px;
    height: 40px;
    background: var(--yeonji-50);
    border-radius: 12px;
}

.stat-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--yeonji-500);
}
```

### 메뉴 아이템 (리스트형)

```css
.menu-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    background: white;
    border-radius: 16px;
    box-shadow: var(--shadow-card);
    border: 1px solid transparent;
    transition: var(--transition-normal);
}

.menu-item:hover {
    border-color: var(--yeonji-200);
    transform: translateX(4px);
}

.menu-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
}

.menu-icon.pink { background: var(--yeonji-100); }
.menu-icon.blue { background: #E8F0F5; }
.menu-icon.gold { background: #F5EFE0; }
.menu-icon.jade { background: #E5F2F0; }
```

### 입력 필드

```css
.input {
    width: 100%;
    padding: 16px;
    background: white;
    border: 1.5px solid var(--hanji-cream);
    border-radius: var(--radius-md);
    font-size: 15px;
    color: var(--text-primary);
    transition: var(--transition-fast);
}

.input:focus {
    outline: none;
    border-color: var(--yeonji-400);
    box-shadow: 0 0 0 3px rgba(196, 90, 101, 0.08);
}

.input::placeholder {
    color: var(--text-muted);
}
```

### 프로그레스 바

```css
.progress-bar {
    height: 6px;
    background: var(--yeonji-100);
    border-radius: var(--radius-full);
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: var(--yeonji-500);
    border-radius: var(--radius-full);
    transition: width 0.5s var(--ease-out);
}
```

### 하단 네비게이션

```css
.bottom-nav {
    position: fixed;
    bottom: 0;
    height: 72px;
    background: white;
    border-top: 1px solid var(--hanji-cream);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.nav-item.active .nav-icon,
.nav-item.active .nav-label {
    color: var(--yeonji-500);
}

.nav-icon {
    font-size: 22px;
    color: var(--text-muted);
}

.nav-label {
    font-size: 11px;
    color: var(--text-muted);
    font-weight: 500;
}
```

---

## 9. 텍스처 (한지)

미세한 한지 텍스처로 고급스러운 질감 표현:

```css
body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    z-index: 1000;
}
```

---

## 10. 장식 요소

### 금박 마름모 (◇, ◆)

- 카드 우상단 장식
- 뱃지 앞 아이콘
- 섹션 구분선

### 골드 라인

```css
.gold-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--dancheong-yellow), transparent);
}
```

### 섹션 헤더

```css
.section-header {
    display: flex;
    align-items: center;
    gap: 8px;
}

.section-title {
    font-family: var(--font-display);
    font-size: 20px;
    color: var(--text-primary);
}
```

---

## 11. 반응형 브레이크포인트

| 브레이크포인트 | 변경사항 |
|---------------|---------|
| `1024px` | 2컬럼 → 1컬럼 레이아웃 |
| `768px` | 카드 1컬럼, 햄버거 메뉴, 폰트 축소 |
| `480px` | 최소 패딩, 버튼 풀 width |

---

## 12. 접근성

- 색상 대비: WCAG AA 준수
- `--yeonji-500` 위 흰색 텍스트: 4.5:1 이상 대비
- 포커스 링: 명확한 연지색 아웃라인
- 터치 타겟: 최소 44px

---

## 13. 다크 모드 (선택적)

```css
@media (prefers-color-scheme: dark) {
    :root {
        --hanji-white: #1A181C;
        --hanji-warm: #242228;
        --hanji-cream: #2D2A32;
        --text-primary: #F5F3F7;
        --text-secondary: #B5B0C0;
        --yeonji-500: #D4707A;  /* 약간 밝게 */
    }
}
```

---

## 14. 금지 사항

1. ❌ 너무 밝고 채도 높은 핑크 (generic pink)
2. ❌ 차갑고 어두운 컬러 (네이비, 차콜) 메인 사용
3. ❌ 벚꽃/사쿠라 같은 일본풍 요소
4. ❌ 과도한 그라데이션
5. ❌ 너무 동글동글한 디자인 (품격 저하)

---

## 15. 권장 사항

1. ✅ 금박(◇) 장식을 절제되게 사용
2. ✅ 한지 텍스처로 질감 표현
3. ✅ 여백을 충분히 확보 (단아함)
4. ✅ 세리프 폰트(Gowun Batang)로 타이틀 강조
5. ✅ 연지-금색 조합으로 고급스러움 연출
6. ✅ 절제된 애니메이션 (과하지 않게)

---

## 16. 디자인 원칙 요약

1. **연지곤지처럼 단아하게** - 진한 연지빛 중심의 품격있는 팔레트
2. **궁중처럼 고급스럽게** - 금박 포인트와 절제된 장식
3. **한지처럼 따뜻하게** - 미세한 텍스처와 웜톤 배경
4. **여백의 미** - 충분한 공간으로 숨쉬는 레이아웃
5. **절제된 우아함** - 과하지 않은 애니메이션과 효과
6. **현대적 전통미** - 한국적 요소의 세련된 재해석

---

## 17. 외부 리소스

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">

<!-- Icons (권장) -->
<!-- Lucide: https://lucide.dev -->
<!-- Phosphor: https://phosphoricons.com -->
```

---

## 18. 컬러 팔레트 미리보기

```
┌─────────────────────────────────────────────────────┐
│  연지 (燕脂) Color Palette                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ████  Yeonji 500   #C45A65  메인 CTA              │
│  ████  Yeonji 400   #D4707A  아이콘, 진행바         │
│  ████  Yeonji 200   #F5CDD3  카드 포인트           │
│  ████  Yeonji 50    #FDF5F6  연한 배경             │
│                                                     │
│  ████  Hanji White  #FDFBF9  메인 배경             │
│  ████  Hanji Cream  #F5F0E8  카드 내부             │
│                                                     │
│  ████  Gold         #D4A84B  금박 포인트           │
│  ████  Okbit        #7BABA3  옥빛 악센트           │
│  ████  Jambit       #6B4A6B  자색 강조             │
│                                                     │
│  ████  Text Primary #2D2A32  본문 텍스트           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 19. 참고: HTML 프리뷰

실제 디자인 미리보기:
- `theme-A-yeonji.html` - 연지 테마 앱 메인 화면
- `theme-B-hongmae.html` - 홍매 테마 앱 메인 화면 (대안)
- `THEME-COMPARISON.md` - 두 테마 비교 문서
