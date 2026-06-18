# Nabaa Educational Services — Premium Landing Page
## Complete UX/UI Strategy & Implementation Plan

---

## 1. Visual Identity & Design System

### Design Philosophy
The visual direction fuses the authority and warmth of Nabaa's Saudi identity with the clinical precision of a Stripe/Apple-grade SaaS experience. The page must feel like a premium concierge service — not a mass-market agency. Every element reinforces trust, exclusivity, and human warmth.

**Core Principles:**
- **Purple dominance** with surgical gold accents — gold is never decorative, always functional (icons, active states, key highlights)
- **Generous whitespace** — 100px+ between sections, never cramped
- **Layered depth** through subtle shadows and floating elements — creates a sense of premium tactility
- **Human-first photography** — real Saudi students, never stock-looking
- **Typography as hierarchy** — size contrast creates structure without visual noise

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Purple | `#4D148C` | Headings, primary buttons, active nav, key accents |
| Dark Purple | `#2A0845` | Dark section backgrounds (Team, Final CTA), footer |
| Gold | `#D4A017` | Accent icons, hover states, decorative lines, stat highlights |
| White | `#FFFFFF` | Primary backgrounds, text on dark |
| Light Background | `#F8F8FC` | Alternating section backgrounds, card surfaces |
| Text Primary | `#1A1A2E` | Body text, headings on light bg |
| Text Secondary | `#6B6B80` | Captions, descriptions, metadata |
| Border Light | `#E8E8F0` | Card borders, dividers |

### Typography System

**Font Family:** `Cairo` (Google Fonts) — geometric, modern, excellent Arabic readability, SaaS-native feel. Weights: 400, 500, 600, 700, 800.

| Level | Size (Desktop) | Size (Mobile) | Weight | Usage |
|-------|---------------|--------------|--------|-------|
| H1 | 52px | 32px | 800 | Hero headline |
| H2 | 40px | 26px | 700 | Section headings |
| H3 | 24px | 20px | 600 | Card titles, subsections |
| Body | 18px | 16px | 400 | Paragraphs, descriptions |
| Caption | 14px | 13px | 500 | Labels, badges, metadata |
| Stat | 48px | 36px | 700 | Counter numbers |

**Line heights:** Headings 1.3, Body 1.8 (generous for Arabic readability).

### Spacing System

- Section vertical padding: 100px desktop, 64px mobile
- Content max-width: 1200px, centered
- Card padding: 32px
- Card border-radius: 20px (generous rounding = premium feel)
- Button border-radius: 14px
- Grid gaps: 24px standard, 32px for feature grids

### Component Language

**Primary CTA Button:**
- Background: `#4D148C`
- Text: White, 16px, weight 600
- Padding: 16px 36px
- Border-radius: 14px
- Hover: Scale 1.02, background shifts to `#3A0F6E`, subtle shadow
- Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Always includes WhatsApp icon + "تواصل عبر واتساب"

**Secondary CTA Button:**
- Background: transparent
- Border: 2px solid `#4D148C`
- Text: `#4D148C`
- Same sizing and radius as primary
- Hover: Background fills `#4D148C`, text turns white

**Feature Cards:**
- Background: White
- Border: 1px solid `#E8E8F0`
- Border-radius: 20px
- Padding: 32px
- Shadow: `0 2px 20px rgba(77, 20, 140, 0.04)` — barely perceptible purple tint
- Hover: translateY(-4px), shadow deepens to `0 8px 30px rgba(77, 20, 140, 0.08)`

**Icon Containers:**
- 56x56px rounded square or circle
- Background: `rgba(212, 160, 23, 0.1)` — 10% gold opacity
- Icon color: `#D4A017`

---

## 2. Section Hierarchy & Wireframe

### Global: Sticky Header
- Height: 72px
- Background: White with `backdrop-filter: blur(12px)` on scroll
- Shadow appears on scroll: `0 1px 20px rgba(0,0,0,0.05)`
- Logo: Nabaa wordmark (نبأ for educational services) — left side in RTL
- Right side: Navigation links (smooth-scroll anchors) + Primary CTA button
- Mobile: Hamburger menu, CTA button always visible
- Z-index: 50

### Global: Floating WhatsApp Button
- Fixed position: bottom-24px, left-24px (RTL = left side)
- 60x60px circle, `#25D366` WhatsApp green with white icon
- Subtle pulse animation (scale 1 → 1.08 → 1, infinite, 3s)
- Shadow: `0 4px 20px rgba(37, 211, 102, 0.3)`
- Z-index: 40
- Mobile: Slightly larger (64x64), bottom-20px, left-16px

---

### Section 1: Hero (Priority: Critical — 60% of attention)

**Layout:** Full viewport (100vh min), two-column asymmetric split.

**Right Column (55% width — text side in RTL):**
- **Pretitle badge:** "خدمات تعليمية متكاملة" — small pill badge, gold border, gold text, 12px
- **H1:** "خطوتك الأولى لإتقان الإنجليزية والدراسة في ماليزيا" — 52px, weight 800, color `#4D148C`, line-height 1.2
- **Subheadline:** "نبأ تُرافقك في رحلتك من اختيار المعهد المعتمد حتى وصولك إلى ماليزيا — فريق سعودي 100% يضمن لك تجربة دراسية آمنة ومميزة" — 20px, weight 400, color `#6B6B80`, max-width 520px, margin-top 20px
- **Trust badges row:** 4 badges in a 2x2 grid, margin-top 32px
  - Each badge: icon (16px) + text (14px), purple icon, text `#1A1A2E`
  - إدارة سعودية 100% | دعم داخل ماليزيا | معاهد معتمدة | استشارات مجانية
- **CTA group:** Two buttons, margin-top 40px
  - Primary: "تواصل عبر واتساب" with WhatsApp icon
  - Secondary: "احجز استشارة مجانية"
- **Social proof micro-line:** "✦ خدمات مخصصة للطلاب السعوديين" — 13px, `#6B6B80`, margin-top 20px

**Left Column (45% width — image side):**
- **Main image:** Large, rounded-24px, professional photo of a Saudi student in Malaysia (or at airport with luggage). Aspect ratio ~4:5. Subtle shadow.
- **Floating Card 1 (top-right):** "قبول معهد" — small card with document icon, white bg, purple border, slight rotation (-6deg), float animation
- **Floating Card 2 (top-left):** "تأشيرة" — passport icon, white bg, gold accent, rotation (4deg)
- **Floating Card 3 (bottom-right):** "سكن" — home icon, white bg, purple border, rotation (5deg)
- **Floating Card 4 (bottom-left):** "وصول ماليزيا" — plane icon, white bg, gold accent, rotation (-4deg)
- Each floating card: ~110x48px, 14px text, subtle shadow, 2px border

**Background:** Gradient from `#FFFFFF` at top to `#F8F8FC` at bottom. Decorative: subtle radial gradient blob of `rgba(77, 20, 140, 0.04)` behind the image.

**Entrance Animation:** H1 fades in + slides up (0.3s delay), subheadline (0.5s), badges stagger (0.6s-0.9s), CTAs (1s), image slides in from left (0.4s), floating cards pop in with stagger (0.8s-1.2s).

---

### Section 2: Trust Statistics

**Background:** `#F8F8FC`
**Padding:** 80px vertical

**Layout:** 4-column grid, centered content.

**Section label:** "أرقام تثقة بنا" — small gold text, 14px, uppercase tracking, centered

**4 Stat Cards (no visible card bg — just centered text blocks):**
1. **+1,200** طالب سعودي (animated counter from 0)
2. **+15** معهد معتمد (animated counter)
3. **+3,500** قبول جامعي (animated counter)
4. **8** سنوات خبرة (animated counter)

**Each stat:**
- Number: 48px, weight 700, `#4D148C`
- Gold underline accent: 32px wide, 3px height, `#D4A017`, centered below number
- Label: 16px, weight 500, `#6B6B80`, margin-top 12px

**Animation:** Counters animate when section scrolls into view. Numbers count up over 2 seconds with ease-out.

---

### Section 3: Why Nabaa (6 Feature Cards)

**Background:** White
**Padding:** 100px vertical

**Layout:** Centered heading + 3x2 card grid.

**Heading:** "لماذا يختار الطلاب السعوديين نبأ؟" — H2, centered
**Subheading:** "نقدم لك تجربة متكاملة تجمع بين المصداقية والاحترافية في خدمة الطلاب" — Body, centered, `#6B6B80`, max-width 560px

**6 Cards (2 rows × 3 columns desktop, 1 column mobile):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | Shield | إدارة سعودية 100% | فريق سعودي متخصص يتابع طلبك من البداية حتى وصولك |
| 2 | Eye | شفافية كاملة | لا رسوم خفية، كل التكاليف واضحة منذ البداية |
| 3 | Headset | دعم قبل السفر | استشارات مجانية واختيار المعهد حسب احتياجك |
| 4 | MapPin | دعم بعد الوصول | فريقنا في ماليزيا يرافقك من المطار إلى سكنك |
| 5 | Award | أفضل المعاهد | شراكات حصرية مع معاهد معتمدة ومرتبة عالمياً |
| 6 | Tag | أسعار تنافسية | عروض حصرية بأسعار لا تُنافس مع ضمان أفضل قيمة |

**Each card:** Feature card component (see Design System), icon in gold container at top-left, title H3, description body text.

**Animation:** Cards fade in + slide up with stagger (0.1s between each).

---

### Section 4: Journey Timeline (8 Steps)

**Background:** `#F8F8FC`
**Padding:** 100px vertical

**Layout:** Centered heading + horizontal timeline (vertical on mobile).

**Heading:** "رحلتك في 8 خطوات" — H2, centered
**Subheading:** "نرافقك في كل مرحلة من استشارتك الأولى حتى استقرارك في ماليزيا" — Body, centered

**Timeline Design:**
- A horizontal connecting line (4px height, gradient from `#4D148C` to `#D4A017`) runs through the center
- 8 circular nodes (48px diameter) sit on the line, connected sequentially
- Each node: number inside (1-8), border 3px solid, bg white
- Completed nodes: purple border + purple number
- Active/current: gold border + gold number
- Below each node: icon (24px, purple) + title (16px, weight 600) + micro-description (13px, `#6B6B80`)

**Steps:**
1. استشارة مجانية — تحديد احتياجك والأهداف
2. اختيار المعهد — مقارنة أفضل الخيارات
3. استخراج القبول — إصدار خطاب القبول الرسمي
4. السكن — حجز السكن المناسب
5. التأشيرة — إعداد ملف التأشيرة
6. السفر — تنسيق تذاكر الطيران
7. الاستقبال — استقبال من المطار
8. المتابعة — دعم مستمر طوال فترة الدراسة

**Mobile:** Vertical timeline — line runs vertically on the right, nodes aligned right, text on the left.

**Animation:** Line draws from left to right as user scrolls (using scroll progress). Nodes pop in sequentially.

---

### Section 5: Student Success Stories

**Background:** White
**Padding:** 100px vertical

**Layout:** Centered heading + 3-column masonry-style card grid.

**Heading:** "قصص نجاح طلابنا" — H2, centered
**Subheading:** "طلاب سعوديون حققوا حلمهم في تعلم الإنجليزية بفضل نبأ" — Body, centered

**Cards (6 cards):**
Each card:
- Photo: aspect-ratio 3:4, rounded-16px, object-fit cover
- Name: H3, 20px, weight 600 — first name only (e.g., "أحمد", "خالد", "فهد")
- City: Caption, `#6B6B80` — "كوالالمبور"
- Institute: Caption, `#4D148C` — "Erica Language Centre"
- Hover: Image scale 1.05, card lifts translateY(-4px)

**Card styling:** No visible border, subtle shadow on hover only. Clean, photography-first.

**Animation:** Staggered fade-in (0.08s between cards).

---

### Section 6: Language Institutes

**Background:** `#F8F8FC`
**Padding:** 100px vertical

**Layout:** Centered heading + 3-column card grid.

**Heading:** "معاهد اللغة الإنجليزية المعتمدة" — H2, centered
**Subheading:** "شراكات حصرية مع أفضل المعاهد في ماليزيا بأسعار مميزة" — Body, centered

**Cards (3 institutes):**

| Institute | City | Starting Price |
|-----------|------|---------------|
| Erican Language Centre | كوالالمبور | ابتداءً من ٢,٨٠٠ ريال |
| Sheffield Academy | كوالالمبور | ابتداءً من ٣,٣٥٠ ريال |
| EMS Language Centre | كوالالمبور | ابتداءً من ٣,١٠٠ ريال |

**Each card:**
- Image at top: 16:9 ratio, rounded-t-20px
- Content padding: 24px
- Institute name: H3, 20px, weight 600
- City: Caption with MapPin icon
- Price: 18px, weight 700, `#4D148C` — "٢,٨٠٠ ريال / شهر"
- CTA: "اطلب التفاصيل عبر واتساب" — small primary button, full width

**Card styling:** White bg, 20px radius, border 1px `#E8E8F0`, shadow `0 4px 24px rgba(0,0,0,0.04)`.

**Animation:** Cards slide up with stagger.

---

### Section 7: Saudi Team (Trust Anchor)

**Background:** `#2A0845` (Dark Purple)
**Padding:** 100px vertical
**Text color:** White

**Layout:** Centered heading + team grid + trust statement.

**Heading:** "فريق سعودي يرافقك من البداية حتى الوصول" — H2, white, centered
**Gold accent line:** 64px wide, 3px, `#D4A017`, centered below heading
**Subheading:** "نحن فريق سعودي متخصص نفهم احتياجاتك ونتحدث لغتك. نضمن لك تجربة آمنة وموثوقة في كل خطوة" — Body, `rgba(255,255,255,0.75)`, centered, max-width 600px

**Team Grid (4 members desktop, 2 mobile):**
Each member:
- Photo: 120x120px circle, 3px gold border
- Name: 18px, weight 600, white
- Role: 14px, `rgba(255,255,255,0.6)`
- Use placeholder initials with gradient backgrounds

**Trust statement banner (below grid):**
- Large card with `rgba(255,255,255,0.05)` bg, 1px `rgba(255,255,255,0.1)` border
- "إدارة سعودية 100% — دعم متواصل قبل وبعد السفر" — 20px, weight 600, centered
- 4 micro-icons with labels: استشارة | تسجيل | سكن | متابعة

**Animation:** Heading slides down, team members fade in with stagger, trust banner scales in.

---

### Section 8: FAQ Accordion

**Background:** White
**Padding:** 100px vertical

**Layout:** Centered heading + accordion list (max-width 800px, centered).

**Heading:** "الأسئلة الشائعة" — H2, centered

**Questions (6 items):**
1. هل أحتاج إلى شهادة لغة مسبقة للتسجيل؟
2. كم تستغرق إجراءات التأشيرة الدراسية؟
3. هل توفرون خيارات سكن للطلاب؟
4. هل يوجد استقبال من المطار عند الوصول؟
5. هل المعاهد المعتمدة مرخصة دولياً؟
6. كيف يتم المتابعة خلال فترة الدراسة؟

**Each accordion item:**
- Question bar: padding 24px, border-bottom 1px `#E8E8F0`, flex row
- Question text: 18px, weight 600, `#1A1A2E`
- Chevron icon: right side, rotates 180deg when open
- Answer: padding 24px, color `#6B6B80`, line-height 1.8, slide-down animation
- Only one open at a time

**Animation:** Smooth height transition (0.3s ease). Chevron rotates.

---

### Section 9: Final CTA

**Background:** `#2A0845` (Dark Purple)
**Padding:** 120px vertical

**Layout:** Centered, single-column, highly impactful.

**Decorative elements:**
- Radial gradient blob: `radial-gradient(circle at 50% 50%, rgba(77, 20, 140, 0.3), transparent 60%)` — creates a soft glow behind the content
- Subtle pattern: Very low opacity geometric dots

**Content:**
- **Eyebrow:** "ابدأ رحلتك التعليمية الآن" — 14px, `#D4A017`, weight 500
- **H2:** "مستقبلك يبدأ من ماليزيا" — 48px, white, weight 800
- **Body:** "تواصل معنا الآن واحصل على استشارة مجانية كاملة — فريق نبأ السعودي جاهز لمساعدتك في كل خطوة" — 18px, `rgba(255,255,255,0.75)`, max-width 520px, centered
- **Primary CTA (large):** "تواصل معنا عبر واتساب" — larger button (20px text, padding 20px 48px), `#25D366` WhatsApp green bg, white text, rounded-16px
- **Secondary line:** "أو اتصل بنا مباشرة: 0593340572" — 16px, `rgba(255,255,255,0.6)`, margin-top 20px

**Animation:** All elements fade in + slide up with stagger. CTA button has subtle pulse (scale 1 → 1.03 → 1, 2.5s infinite).

---

### Footer

**Background:** `#1A0A2E` (darker than dark purple)
**Padding:** 60px vertical top, 24px bottom

**Layout:** 4-column grid.

**Column 1 — Brand:**
- Nabaa logo
- Brief tagline: "خدمات تعليمية سعودية للدراسة في ماليزيا"

**Column 2 — Quick Links:**
- الرئيسية | من نحن | المعاهد | تواصل معنا

**Column 3 — Services:**
- استشارة مجانية | القبول الجامعي | السكن | التأشيرة

**Column 4 — Contact:**
- واتساب: 0593340572
- انستقرام: @nabaa.edu
- البريد: info@nabaa.edu.sa

**Bottom bar:**
- "جميع الحقوق محفوظة © 2025 نبأ للخدمات التعليمية"
- Social icons: WhatsApp, Instagram, X (Twitter)

---

## 3. Conversion Strategy

### Primary Conversion Goal
**WhatsApp Contact** — every element on the page funnels toward initiating a WhatsApp conversation.

### CTA Placement Map

| Location | CTA Type | Button Text | Destination |
|----------|----------|-------------|-------------|
| Sticky Header | Primary | "تواصل عبر واتساب" | WhatsApp |
| Floating Button | Fixed | WhatsApp Icon | WhatsApp |
| Hero | Primary + Secondary | "تواصل عبر واتساب" + "احجز استشارة مجانية" | WhatsApp |
| Institute Cards | Primary | "اطلب التفاصيل عبر واتساب" | WhatsApp (per-institute) |
| Team Section | Implied trust | No direct CTA | — |
| Final CTA | Primary (large) | "تواصل معنا عبر واتساب" | WhatsApp |
| Footer | Secondary | WhatsApp number | WhatsApp |

**WhatsApp Link Format:** `https://wa.me/966593340572?text=مرحباً%20نبأ،%20أرغب%20في%20الاستفسار%20عن%20الدراسة%20في%20ماليزيا`

### Tracking Integration

**Meta Pixel (Facebook):**
```javascript
function trackWhatsAppClick(location) {
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Contact', { content_name: location });
  }
}
```

**TikTok Pixel:**
```javascript
function trackTikTokConversion(location) {
  if (typeof ttq !== 'undefined') {
    ttq.track('ClickButton', { content_name: location });
  }
}
```

**Unified handler:**
```javascript
function handleWhatsAppClick(location) {
  trackWhatsAppClick(location);
  trackTikTokConversion(location);
  // Allow default link navigation
}
```

### Trust-First Conversion Flow

1. **Hero** captures attention with bold promise + immediate credibility (4 trust badges)
2. **Trust Stats** provide social proof through quantified achievements
3. **Why Nabaa** answers "why you?" with 6 concrete differentiators
4. **Journey Timeline** reduces anxiety by showing exactly what happens
5. **Success Stories** provide relatable peer proof (real Saudi students)
6. **Institutes** demonstrate concrete options with pricing transparency
7. **Saudi Team** removes the fear of dealing with strangers in a foreign country
8. **FAQ** handles objections before they become barriers
9. **Final CTA** strikes when trust is at peak

---

## 4. Animation & Interaction Plan

### Philosophy
Animations are functional, not decorative. They guide attention, signal interactivity, and create a sense of polish. Every animation uses the same easing curve for consistency.

**Default easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out-quad)
**Default duration:** 0.5s for entrances, 0.3s for interactions

### Scroll-Triggered Entrance Animations

Using IntersectionObserver with threshold 0.15:

| Element | Animation | Delay | Duration |
|---------|-----------|-------|----------|
| Section headings | Fade in + translateY(30px → 0) | 0s | 0.6s |
| Body text | Fade in + translateY(20px → 0) | 0.15s | 0.5s |
| Cards (grid) | Fade in + translateY(40px → 0) | Stagger 0.1s each | 0.5s |
| Hero H1 | Fade in + translateY(40px → 0) | 0.2s | 0.7s |
| Hero image | Fade in + translateX(-50px → 0) | 0.3s | 0.8s |
| Floating cards | Scale(0.8 → 1) + opacity | Stagger 0.15s | 0.4s |
| Stats numbers | Count up from 0 | On viewport entry | 2s |

### Continuous Animations

| Element | Animation | Parameters |
|---------|-----------|------------|
| Floating WhatsApp button | Pulse scale | 1 → 1.08 → 1, 3s, infinite, ease-in-out |
| Hero floating cards | Float Y | translateY(0 → -8px → 0), 4s, infinite, ease-in-out, each card offset by 0.5s |
| Final CTA button | Subtle pulse | 1 → 1.03 → 1, 2.5s, infinite |

### Hover Interactions

| Element | Hover Effect | Duration |
|---------|-------------|----------|
| Primary CTA | Scale 1.02, shadow deepens, bg darkens | 0.3s |
| Secondary CTA | Fill purple, text white | 0.3s |
| Feature cards | translateY(-4px), shadow deepens | 0.3s |
| Institute cards | translateY(-6px), image scale 1.05 | 0.3s |
| Success cards | Image scale 1.05 | 0.4s |
| Nav links | Color → purple, underline slides in | 0.2s |
| Accordion item | Background → `#F8F8FC` | 0.2s |

### Performance Notes
- All animations use `transform` and `opacity` only (GPU-composited)
- `will-change: transform, opacity` applied to animated elements
- No layout-triggering properties animated
- `prefers-reduced-motion` media query disables all non-essential animations

---

## 5. SEO & Technical Implementation

### Meta Tags
```html
<title>نبأ للخدمات التعليمية | دراسة اللغة الإنجليزية في ماليزيا للطلاب السعوديين</title>
<meta name="description" content="نبأ تُرافقك في رحلتك لدراسة اللغة الإنجليزية في ماليزيا. فريق سعودي 100% - استشارات مجانية - معاهد معتمدة - دعم قبل وبعد السفر.">
```

### Open Graph
```html
<meta property="og:title" content="نبأ للخدمات التعليمية | دراسة اللغة الإنجليزية في ماليزيا">
<meta property="og:description" content="فريق سعودي يرافقك من اختيار المعهد حتى وصولك إلى ماليزيا">
<meta property="og:type" content="website">
<meta property="og:locale" content="ar_SA">
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="نبأ للخدمات التعليمية">
<meta name="twitter:description" content="دراسة اللغة الإنجليزية في ماليزيا للطلاب السعوديين">
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "نبأ للخدمات التعليمية",
  "description": "خدمات استشارية متكاملة لدراسة اللغة الإنجليزية في ماليزيا",
  "url": "https://nabaa.edu.sa",
  "telephone": "+966593340572",
  "areaServed": "SA",
  "serviceType": "Educational Consulting"
}
```

### Performance Checklist
- [ ] Images: WebP format, lazy loading (except hero), explicit width/height
- [ ] CSS: Tailwind CDN + minimal custom CSS (~5KB)
- [ ] JS: Vanilla, deferred, ~8KB total
- [ ] Fonts: Cairo loaded with `font-display: swap`
- [ ] Semantic HTML: header, nav, main, section, article, footer
- [ ] Heading hierarchy: single H1, logical H2→H3 flow
- [ ] Alt text on all images
- [ ] ARIA labels on interactive elements
- [ ] Color contrast: All text meets WCAG AA (4.5:1 minimum)
- [ ] RTL: `dir="rtl"` on html, logical CSS properties

---

## 6. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|---------------|
| Mobile | < 640px | Single column, stacked hero, hamburger nav, floating WhatsApp larger, timeline vertical |
| Tablet | 640-1024px | 2-column grids, hero stacked, timeline vertical |
| Desktop | > 1024px | Full layout as designed, horizontal timeline, all features active |

---

*End of Plan — Ready for Implementation*
