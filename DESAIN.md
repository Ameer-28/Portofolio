# DESAIN.md — ameer.dev (Merged Reference)

> File ini adalah gabungan dari dua dokumen:
> 1. **Design Direction** — spesifikasi arah desain untuk redesign `ameer.dev` (sumber utama/authoritative).
> 2. **Design Tokens Reference** — hasil ekstraksi token visual dari Byuurjaportofolio (byuurjaportofolio.framer.media), dipakai sebagai referensi bahasa visual, bukan untuk disalin literal.

---

# BAGIAN A — DESIGN DIRECTION (ameer.dev)

# DESAIN.md — Design Direction `ameer.dev`

> **Reference:** https://byuurjaportofolio.framer.media/
>
> Dokumen ini adalah **design specification**, bukan prompt implementasi.
> Gunakan sebagai single source of truth untuk arah visual redesign portfolio `ameer.dev`.
>
> **PENTING:** Referensi digunakan untuk mempelajari bahasa visual, composition, rhythm, whitespace, typography, dan interaction pattern. Jangan menyalin branding, copywriting, aset, identitas, atau layout secara literal.

---

## 1. DESIGN OBJECTIVE

Portfolio harus terasa seperti **editorial personal portfolio** yang dirancang secara intentional, bukan template developer biasa.

### Target visual

- Editorial
- Modern
- Expressive
- Clean
- Confident
- Personal
- Technical
- Premium
- Memorable

### Hindari

- Generic SaaS landing page
- Dashboard UI
- Card grid monoton
- Card-everything
- Glassmorphism berlebihan
- Neon developer aesthetic
- Gradient berlebihan
- Heavy shadows
- Animasi dekoratif tanpa fungsi
- Visual clutter

### Hierarchy

```text
TYPOGRAPHY
    ↓
COMPOSITION
    ↓
WHITESPACE
    ↓
CONTENT
    ↓
INTERACTION
    ↓
DECORATION
```

---

## 2. CORE DESIGN DIRECTION

Gunakan pendekatan:

```text
EDITORIAL PORTFOLIO
        +
TECHNICAL STORYTELLING
        +
PROJECT EVIDENCE
```

Identitas utama tetap:

**Muhammad Amin Murtadho**

**ameer.dev**

**Backend Developer**

Core stack:

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL

Status:

**Open for Internship**

Website harus terasa seperti:

> **A backend engineer with strong visual taste.**

Bukan portfolio designer yang kebetulan memakai backend.

---

## 3. REFERENCE ADAPTATION

Pelajari reference untuk:

- Minimal navigation
- Oversized typography
- Generous whitespace
- Strong section labels
- Selected work sebagai centerpiece
- Visual storytelling
- Horizontal/drag interaction bila relevan
- Repeated text / marquee treatment bila relevan
- Career storytelling
- Interaction cues
- Section composition yang tidak monoton

Jangan menyalin:

- Branding
- Nama
- Copywriting
- Images
- Exact assets
- Exact layout
- Exact identity
- Creative-industry positioning

Tujuannya adalah **menerjemahkan design language**, bukan membuat clone.

---

# 4. PAGE RHYTHM

Jangan gunakan pola berulang:

```text
Section
↓
Card Grid
↓
Section
↓
Card Grid
↓
Section
↓
Card Grid
```

Gunakan ritme editorial:

```text
INTRODUCTION
↓
LARGE TYPOGRAPHY
↓
PERSONAL CONTEXT
↓
TECHNICAL SYSTEM
↓
SELECTED WORK
↓
TECHNICAL DEEP DIVE
↓
EDUCATION / EXPERIENCE
↓
CONTACT
```

Setiap section boleh memiliki composition berbeda selama typography, spacing, color, border, dan interaction tetap berada dalam satu design system.

---

# 5. NAVIGATION

Navbar harus:

- Minimal
- Compact
- Premium
- Clear
- Unobtrusive

Desktop navigation:

- About
- Skills
- Projects
- Experience
- Contact
- Theme toggle
- Download CV

Navbar boleh menggunakan floating rounded treatment, tetapi jangan sampai menjadi visual centerpiece.

### Hindari

- Glow
- Neon
- Heavy blur
- Excessive glassmorphism
- Semua navigation item menjadi pill/button
- Navbar terlalu tinggi
- Navbar terlalu dominan

### Mobile

Tampilkan:

- `ameer.dev`
- Theme toggle
- Menu trigger

Mobile menu harus:

- Accessible
- Keyboard friendly
- Escape friendly
- Tidak menyebabkan horizontal overflow
- Touch friendly

---

# 6. HERO

Hero harus menjadi **editorial introduction**, bukan generic developer hero.

### Primary message

```text
BACKEND DEVELOPER
```

### Supporting information

```text
Muhammad Amin Murtadho
Open for Internship
Malang, Indonesia
```

### Core stack

```text
NestJS
TypeScript
Prisma ORM
PostgreSQL
```

### CTA

```text
View Projects
Download CV
```

### Profile

Gunakan:

```text
/images/profile.jpg
```

Jika asset tersedia.

Hero harus memanfaatkan:

- Oversized typography
- Strong whitespace
- Small metadata
- Asymmetric composition jika sesuai
- Technical labels
- Profile image sebagai visual anchor

Jangan membuat hero sebagai kumpulan card.

---

# 7. TYPOGRAPHY

Typography adalah salah satu elemen visual paling penting.

## Display Typography

Gunakan untuk:

- Hero
- Main section headline
- Closing statement

Karakter:

- Large
- Bold
- Confident
- Spacious
- High contrast

## Section Labels

Contoh:

```text
ABOUT
TECHNICAL STACK
SELECTED WORK
EXPERIENCE
CONTACT
```

Boleh uppercase dengan letter spacing yang cukup.

## Body

- Readable
- Comfortable line-height
- Max-width terkontrol
- Jangan terlalu kecil

## Technical Metadata

Gunakan monospace secara selektif untuk:

- API
- Database
- Stack
- Technical labels
- Status
- Project metadata

Jangan menggunakan monospace untuk seluruh website.

---

# 8. WHITESPACE

Whitespace adalah bagian dari desain.

Gunakan breathing room antar section.

Jangan memadatkan halaman hanya agar semua informasi terlihat sekaligus.

Whitespace harus membantu:

- Hierarchy
- Reading rhythm
- Emphasis
- Section separation
- Premium feeling

---

# 9. ABOUT

About harus terasa seperti **personal statement**, bukan profile card.

Struktur:

```text
ABOUT
   ↓
LARGE STATEMENT
   ↓
SUPPORTING CONTEXT
   ↓
FACTUAL METADATA
```

Informasi faktual:

- Muhammad Amin Murtadho
- Siswa RPL SMK Telkom Malang
- 2024 — 2027
- Malang, Indonesia
- Backend Developer
- Open for Internship

Gunakan editorial composition, bukan sekadar card berisi metadata.

---

# 10. SKILLS

Skills jangan terlihat seperti dashboard.

### Dilarang

- Percentage
- Progress bar
- Star rating
- Fake proficiency score

Gunakan curated categories.

### Backend

- NestJS
- Node.js
- TypeScript
- REST API

### Database

- PostgreSQL
- Prisma ORM
- MySQL

### Tools

- Docker
- Git
- GitHub
- Postman
- Railway
- Vercel

Primary stack harus mendapatkan visual priority:

```text
NestJS
TypeScript
Prisma ORM
PostgreSQL
```

Jangan membuat setiap skill menjadi card besar.

---

# 11. SELECTED WORK / PROJECTS

Projects harus menjadi salah satu **visual centerpiece** website.

Gunakan prinsip:

> Selected work adalah karya utama, bukan sekadar daftar card.

## Primary project

**Lapangin Ecosystem**

Terdiri dari:

- Lapangin Web App
- Lapangin API

## Secondary projects

- E-Commerce REST API
- Train Ticketing & Management API
- NestJS & Prisma Architecture Boilerplate

Project section harus memiliki visual hierarchy yang jelas.

---

# 12. LAPANGIN — FLAGSHIP PROJECT

Lapangin harus mendapatkan visual treatment paling kuat.

Tampilkan hubungan:

```text
LAPANGIN
Booking Platform

WEB APP
Next.js
TypeScript
Tailwind CSS
Vercel

        +

BACKEND API
NestJS
TypeScript
Prisma
PostgreSQL
Railway
```

Jangan hanya membuat:

```text
Card
Title
Description
Tags
Buttons
```

Gunakan:

- Large typography
- Project metadata
- System relationship
- Composition
- Architecture hints
- Strong spacing
- Real visual assets bila tersedia

### Critical rule

Jika tidak tersedia screenshot asli:

**JANGAN membuat screenshot palsu.**

---

# 13. PROJECT INTERACTION

Interaction boleh menggunakan:

- Hover reveal
- Horizontal project rail
- Drag interaction
- Subtle image movement
- Metadata reveal
- Directional cue
- Smooth transitions

Tetapi interaction harus memiliki fungsi.

Contoh:

```text
DRAG
→ Explore projects

VIEW CASE STUDY
→ Technical deep dive

HOVER
→ Reveal metadata
```

### Jangan

- Scroll hijacking
- Global horizontal page scrolling
- Interaction yang menghambat reading
- Animation yang tidak memberikan informasi

---

# 14. HORIZONTAL CONTENT

Horizontal interaction dapat digunakan untuk:

- Selected projects
- Technology stack
- Architecture modules
- Case-study previews

Jika digunakan:

- Berikan interaction cue
- Support mouse
- Support touch
- Support keyboard bila memungkinkan
- Pastikan tidak menyebabkan global horizontal overflow

Gunakan:

```text
DRAG
```

atau

```text
SCROLL
```

hanya jika memang relevan.

---

# 15. TECHNICAL STORYTELLING

Visual harus tetap menunjukkan bahwa Amin adalah backend developer.

Contoh architecture visual:

```text
CLIENT
   ↓
REST API
   ↓
NESTJS
   ↓
PRISMA
   ↓
POSTGRESQL
```

Architecture diagram hanya boleh menggambarkan sistem yang benar-benar diverifikasi.

Jangan membuat cloud infrastructure atau service yang sebenarnya tidak digunakan.

---

# 16. CASE STUDIES

Case study harus terasa sebagai continuation dari Selected Work.

Flow:

```text
SELECTED WORK
      ↓
PROJECT
      ↓
TECHNICAL DEEP DIVE
      ↓
ARCHITECTURE
      ↓
DATABASE
      ↓
IMPLEMENTATION
      ↓
LEARNINGS
```

Pertahankan route:

```text
/projects/[slug]
```

Pertahankan technical information yang sudah ada.

Jangan merusak SSG atau dynamic metadata yang sudah bekerja.

---

# 17. EXPERIENCE / EDUCATION

Gunakan editorial timeline atau structured narrative.

Data:

```text
SMK Telkom Malang
Rekayasa Perangkat Lunak
2024 — 2027
Current Student
Malang, Indonesia
```

Jangan membuat employment history fiktif.

Academic projects harus tetap dibedakan dari professional employment.

---

# 18. CERTIFICATION

Hanya tampilkan:

```text
Website Development using Next.js & Nest.js
SMK Telkom Malang
```

### Wajib

- Tahun sertifikasi **JANGAN ditampilkan**
- `Backend Architecture & Database Management` **JANGAN ditampilkan**
- Jangan membuat sertifikasi baru
- Jangan mengarang issuer
- Jangan mengarang credential ID

---

# 19. REMOVED CONTENT

Section:

**Value & Direction**

harus tetap dihapus.

Jangan mengembalikannya dengan nama lain.

Informasi internship dapat disampaikan secara natural melalui:

- Hero
- About
- Experience
- Contact

---

# 20. CONTACT

Contact harus terasa sebagai closing statement.

Arah visual:

```text
LET'S BUILD
SOMETHING
MEANINGFUL.
```

Supporting:

```text
Muhammad Amin Murtadho
Backend Developer
Open for Internship
```

Email:

```text
muhammadaminmurtadho12@gmail.com
```

Actions:

- Email
- Download CV

Social:

- GitHub
- LinkedIn
- Instagram

Jangan membuat contact form palsu atau backend submission yang tidak dibutuhkan.

---

# 21. FOOTER

Footer harus minimal.

```text
ameer.dev
Backend Developer
Malang, Indonesia

GitHub
LinkedIn
Instagram
Email
```

Copyright sederhana.

---

# 22. IMAGE DIRECTION

Profile image:

```text
/images/profile.jpg
```

Project screenshots hanya boleh menggunakan asset asli.

### Dilarang

- Stock developer photos
- Fake screenshots
- Fake dashboard
- Fake analytics
- Fake client logos
- Fake metrics graphics

Image presentation boleh menggunakan:

- Editorial crop
- Large presentation
- Asymmetric framing
- Subtle border
- Restrained radius

---

# 23. CARDS / BORDERS / RADIUS / SHADOW

## Cards

Tidak semua content menjadi card.

Card hanya digunakan ketika membantu:

- Grouping
- Interaction
- Information hierarchy

## Borders

- Thin
- Subtle
- Consistent

## Radius

Gunakan secara selektif.

Buttons dan controls boleh rounded.

Large editorial blocks tidak harus rounded.

## Shadows

Gunakan sangat ringan.

Prioritaskan:

```text
Spacing
+
Border
+
Typography
```

daripada heavy shadow.

---

# 24. COLOR SYSTEM

Gunakan restrained palette:

```text
Background
Foreground
Muted
Border
Accent
```

Gunakan satu accent terkontrol jika diperlukan.

Accent hanya untuk:

- Active state
- Important CTA
- Status
- Interaction feedback

Hindari:

- Neon
- Rainbow gradients
- Banyak accent
- Excessive color coding

---

# 25. DARK MODE

Dark mode harus terasa intentional.

Pertahankan:

- Readable text
- Surface separation
- Accessible contrast
- Restrained borders
- Same hierarchy

Jangan sekadar invert warna.

---

# 26. LIGHT MODE

Light mode harus:

- Clean
- Premium
- Readable
- Balanced

Jangan terlihat seperti default browser page.

---

# 27. MOTION

Motion harus mendukung storytelling.

Gunakan:

- Opacity transition
- Small transform
- Hover state
- Subtle reveal
- Navigation transition

Hindari:

- Constant floating
- Aggressive parallax
- Scroll hijacking
- Long blocking animation
- Animation pada semua element

Wajib menghormati:

```text
prefers-reduced-motion: reduce
```

---

# 28. RESPONSIVE DESIGN

Mobile bukan desktop yang diperkecil.

Test target:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px
1536px
```

## Desktop

- Large typography
- Asymmetric composition
- Generous whitespace
- Strong project presentation

## Mobile

- Readable typography
- Vertical rhythm
- Touch-friendly controls
- Simple navigation
- Re-composed layout jika diperlukan

### HARD RULE

**ZERO HORIZONTAL OVERFLOW.**

---

# 29. ACCESSIBILITY

Wajib mempertahankan:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus state
- Accessible navigation
- Accessible buttons
- Accessible links
- Adequate touch targets
- Reduced motion

Jangan mengorbankan accessibility demi visual effect.

---

# 30. CONTENT INTEGRITY

Jangan menambahkan:

- Fake clients
- Fake companies
- Fake statistics
- Fake testimonials
- Fake awards
- Fake metrics
- Fake employment
- Fake users
- Fake revenue
- Fake performance claims

Prinsip utama:

> **Evidence > Claims**

---

# 31. TECHNICAL IDENTITY

Redesign tidak boleh menghilangkan identitas backend.

Technical identity harus terlihat melalui:

- NestJS
- TypeScript
- Prisma
- PostgreSQL
- REST API
- Architecture
- Database modeling
- Project case studies

Visual boleh lebih editorial, tetapi content tetap technical.

---

# 32. COMPONENT PHILOSOPHY

Jangan membuat semua content menjadi reusable Card.

Component dibuat berdasarkan fungsi:

- Navigation
- Editorial section
- Project presentation
- Technical metadata
- Case-study module
- Timeline
- Contact CTA

Variasi boleh terjadi pada composition, bukan dengan mengubah design identity setiap section.

---

# 33. PERFORMANCE

Prioritas:

1. CSS / Tailwind
2. Native browser APIs
3. Existing Next.js features
4. Existing components

Hindari dependency baru jika tidak benar-benar dibutuhkan.

Jangan menambahkan animation library hanya untuk hover atau transition sederhana.

Jangan menurunkan performance demi visual effect.

---

# 34. SEO PRESERVATION

Jangan merusak:

- Metadata
- OpenGraph
- Twitter cards
- JSON-LD
- Sitemap
- Robots
- Canonical
- Static generation
- Dynamic case-study metadata

Redesign visual tidak boleh mengorbankan SEO infrastructure.

---

# 35. EXISTING TECHNICAL FOUNDATION

Pertahankan foundation yang sudah berjalan:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Existing semantic tokens
- Existing UI primitives
- Existing case-study routes
- Existing metadata system
- Existing sitemap
- Existing robots
- Existing dark/light theme
- Existing accessibility improvements

Jangan melakukan rewrite arsitektur hanya untuk redesign visual.

---

# 36. ANTI-PATTERNS

## Jangan Card Everything

## Jangan Badge Everything

## Jangan Gradient Everything

## Jangan Animation Everything

## Jangan Center Everything

## Jangan membuat portfolio seperti dashboard

## Jangan membuat setiap section identik

## Jangan menambahkan fake technicality

## Jangan mengorbankan readability demi visual

---

# 37. VISUAL HIERARCHY

Jika terjadi konflik:

```text
PRIMARY MESSAGE
>
PROJECT EVIDENCE
>
SUPPORTING INFORMATION
>
NAVIGATION
>
DECORATION
```

Navigation tidak boleh mengalahkan Hero.

Decoration tidak boleh mengalahkan project evidence.

Animation tidak boleh mengalahkan content.

---

# 38. QUALITY BAR

Hasil akhir harus terlihat:

```text
DESIGNED
bukan
ASSEMBLED
```

Dan:

```text
PERSONAL
bukan
TEMPLATE
```

Dan:

```text
ENGINEERING PORTFOLIO
bukan
SAAS LANDING PAGE
```

---

# 39. DEFINITION OF DONE

Desain dianggap berhasil jika:

- [ ] Editorial
- [ ] Personal
- [ ] Modern
- [ ] Premium
- [ ] Clearly a backend portfolio
- [ ] Hero kuat
- [ ] Typography menjadi visual element utama
- [ ] Projects menjadi visual centerpiece
- [ ] Lapangin memiliki visual priority
- [ ] Case study terintegrasi
- [ ] Whitespace cukup
- [ ] Tidak semua section berupa card
- [ ] Navigation tidak dominan
- [ ] Mobile nyaman
- [ ] Dark/light konsisten
- [ ] Accessibility terjaga
- [ ] Performance tidak turun
- [ ] Tidak ada fake content
- [ ] Value & Direction tetap hilang
- [ ] Backend Architecture & Database Management certification tetap hilang
- [ ] Tahun sertifikasi tidak ditampilkan
- [ ] Existing routes tetap berfungsi
- [ ] Existing SEO tetap berfungsi
- [ ] Zero horizontal overflow

---

# 40. FINAL PRINCIPLE

> **Design the portfolio like an editorial story, but communicate like an engineer.**

Pengalaman halaman harus secara natural menjawab:

```text
WHO IS AMIN?
      ↓
WHAT DOES HE BUILD?
      ↓
HOW DOES HE THINK?
      ↓
WHAT HAS HE ACTUALLY BUILT?
      ↓
HOW CAN I CONTACT HIM?
```

Jika sebuah visual terlihat menarik tetapi tidak membantu salah satu pertanyaan tersebut, visual tersebut harus dipertimbangkan kembali.


---

# BAGIAN B — REFERENCE DESIGN TOKENS (Byuurjaportofolio)

> **Catatan:** Bagian ini adalah data mentah hasil ekstraksi desain dari situs referensi. Gunakan hanya untuk mempelajari pola (typography scale, spacing rhythm, shadow philosophy, dsb) sesuai batasan pada Bagian A § 3 (Reference Adaptation). Jangan menyalin warna, font, atau komponen secara literal ke ameer.dev kecuali sudah diselaraskan dengan arah desain di Bagian A.

---
version: alpha
name: Byuurjaportofolio
description: |
  This design system embodies a bold, avant-garde aesthetic rooted in high
  contrast and motion. The portfolio presents itself as a dark, immersive canvas
  (#000000) punctuated by dynamic organic curves, scattered particle effects,
  and dramatic gradient overlays. The visual language is distinctly
  contemporary—blending technical precision with artistic whimsy. Typography
  choices range from modern sans-serif to playful display faces, reflecting the
  designer's versatility across graphic design, photography, and digital media.
  The atmosphere is confidently experimental: surfaces are minimal and
  purposeful, interactions are fluid, and the overall impression is one of
  creative sophistication tempered with approachability. The layout leverages
  white (#FFFFFF) as a primary accent—appearing in CTA buttons, key typography,
  and highlight elements—creating stark, eye-catching contrast against the black
  backdrop. Decorative gradients and radial highlights add depth and movement
  without overwhelming the content.
source:
  url: "https://byuurjaportofolio.framer.media/"
  pagesAnalyzed: 1
  extractedAt: 2026-09-04
  tokensMeasured: true
colors:
  primary: "#FFFFFF"
  link: "#0000EE"
  canvas: "#000000"
  surface: "#F4F1EA"
  on-primary: "#000000"
  ink: "#FFFFFF"
  body: "#172633"
  muted: "#1A1A1A"
  faint: "#111111"
  accent-1: "#A7B4C8"
  neutral-1: "#EDEAE3"
typography:
  display-xl:
    fontFamily: Beast
    fontSize: 64px
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -3.2px
    textTransform: uppercase
  display-lg:
    fontFamily: "Press Start 2P"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.12px
  heading-md:
    fontFamily: Poppins
    fontSize: 34px
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: -1.2px
  heading-sm:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.8px
  body-xl:
    fontFamily: Poppins
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0px
  body-lg:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.32px
  body-md:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.28px
  body-md-strong:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0px
  body-sm:
    fontFamily: Poppins
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 2.08px
    textTransform: uppercase
  body-xs:
    fontFamily: Poppins
    fontSize: 8px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0px
  nav:
    fontFamily: Poppins
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.3px
  caption-lg:
    fontFamily: "Gloria Hallelujah"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0px
  caption-md:
    fontFamily: Poppins
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 1.98px
    textTransform: uppercase
  caption-sm:
    fontFamily: Poppins
    fontSize: 9.5px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: -0.2px
  caption-xs:
    fontFamily: Poppins
    fontSize: 6px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.3px
  code-xl:
    fontFamily: "Share Tech Mono"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  code-lg:
    fontFamily: "Share Tech Mono"
    fontSize: 13px
    fontWeight: 400
    letterSpacing: 1.82px
    textTransform: uppercase
  code-md:
    fontFamily: "Courier New"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0.24px
  code-sm:
    fontFamily: "Share Tech Mono"
    fontSize: 11px
    fontWeight: 400
    letterSpacing: 0px
  code-sm-uppercase:
    fontFamily: "Share Tech Mono"
    fontSize: 11px
    fontWeight: 400
    letterSpacing: 1.21px
    textTransform: uppercase
  code-xs:
    fontFamily: "Courier New"
    fontSize: 10px
    fontWeight: 400
    letterSpacing: 0.8px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 18px
  xl: 24px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 32px
  section: 36px
  band: 40px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(0, 0, 0, 0.5) 0px 14px 34px 0px"
elevationStrategy: single-tier
themes:
  derived: light   # the other theme is the site's measured palette
  light:
    bg: "#F8F8FE"
    surface: "#EEEEF4"
    surfaceRaised: "#E7E7EC"
    text: "#10101C"
    textMuted: "#71717B"
    border: "#D5D5DA"
    accent: "#0000EE"
    accentFg: "#FFFFFF"
    focusRing: "#0000EE"
    elevation: shadow
  dark:
    bg: "#000000"
    surface: "#F4F1EA"
    surfaceRaised: "#F5F2EC"
    text: "#FFFFFF"
    textMuted: "#172633"
    border: "#1F1F1F"
    accent: "#4141FF"
    accentFg: "#FFFFFF"
    focusRing: "#0000EE"
    elevation: "border+surface"
  contrastFailures:
    - "dark: muted on bg = 1.36:1 (needs 4.5:1)"
    - "dark: text on surface = 1.13:1 (needs 4.5:1)"
gradients:
  - context: section
    kind: radial
    value: "radial-gradient(50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.16) 40%, rgba(255, 255, 255, 0) 72%)"
  - context: section
    kind: radial
    value: "radial-gradient(50% 50%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0) 70%)"
  - context: section
    kind: radial
    value: "radial-gradient(50% 50%, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.14) 42%, rgba(255, 255, 255, 0) 74%)"
  - context: section
    kind: radial
    value: "radial-gradient(50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)"
  - context: section
    kind: linear
    value: "linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 62%, rgb(255, 255, 255) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.38) 35%, rgb(255, 255, 255) 100%)"
components:
  button-primary:
    textColor: "{colors.link}"
    height: 48px
    padding: "15px 26px 15px 26px"
    fontSize: 12px
    fontFamily: sans-serif
    fontWeight: 400
    rounded: 999px
    backgroundColor: "{colors.primary}"
  button-filled:
    textColor: "{colors.accent-1}"
    border: "1px solid rgba(255, 255, 255, 0.16)"
    height: 28px
    padding: "0px 10px 0px 10px"
    fontSize: 11px
    fontFamily: "Courier New"
    fontWeight: 400
    rounded: 999px
    backgroundColor: "rgba(0, 0, 0, 0.28)"
  button-filled-lg:
    textColor: "{colors.link}"
    height: 54px
    padding: "0px 14px 0px 12px"
    fontSize: 12px
    fontFamily: sans-serif
    fontWeight: 400
    rounded: 999px
    backgroundColor: "rgb(58, 58, 58)"
  button-icon:
    textColor: "rgba(255, 255, 255, 0.55)"
    height: 46px
    padding: "1px 6px 1px 6px"
    fontSize: 12px
    fontFamily: sans-serif
    fontWeight: 400
    rounded: 999px
  card-featured:
    textColor: "rgb(27, 27, 27)"
    padding: "12px 12px 10px 12px"
    fontSize: 12px
    boxShadow: "rgba(0, 0, 0, 0.28) 0px 10px 26px 0px"
    fontFamily: sans-serif
    fontWeight: 400
    rounded: "{rounded.xs}"
    backgroundColor: "{colors.surface}"
  navigation:
    textColor: "{colors.on-primary}"
    height: 94px
    padding: "14px 16px 14px 16px"
    fontSize: 12px
    fontFamily: sans-serif
    fontWeight: 400
  link:
    textColor: "{colors.on-primary}"
    padding: "18px 20px 24px 20px"
    fontSize: 12px
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 6px 0px inset, rgba(183, 214, 105, 0.22) 0px 0px 40px 0px"
    fontFamily: sans-serif
    fontWeight: 400
    rounded: "{rounded.lg}"
  link-sm:
    textColor: "{colors.link}"
    padding: "20px 26px 20px 26px"
    fontSize: 12px
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 16px 34px 0px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset"
    fontFamily: sans-serif
    fontWeight: 400
    rounded: 999px
states:
breakpoints:
  - width: 375
    containerWidth: 342
    gridColumns: 3
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 28
    bodyPx: 12
    sectionPaddingX: 16
  - width: 768
    containerWidth: 374
    gridColumns: 3
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 28
    bodyPx: 12
    sectionPaddingX: 16
  - width: 1024
    containerWidth: 374
    gridColumns: 2
    navLinksVisible: 6
    menuToggleVisible: false
    headingPx: 28
    bodyPx: 12
    sectionPaddingX: 16
  - width: 1280
    containerWidth: 1080
    gridColumns: 3
    navLinksVisible: 5
    menuToggleVisible: false
    headingPx: 56
    bodyPx: 12
    sectionPaddingX: 16
  - width: 1440
    containerWidth: 1080
    gridColumns: 3
    navLinksVisible: 5
    menuToggleVisible: false
    headingPx: 56
    bodyPx: 12
    sectionPaddingX: 16
coverage:
  statesFound: 11
  gradientsFound: 8
  rolesUnassigned: 2
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: false
  semanticRampDeclared: false
---

# Design System Inspired by Bayu Raja Syah's Portfolio

## 1. Visual Theme & Atmosphere

This design system embodies a bold, avant-garde aesthetic rooted in high contrast and motion. The portfolio presents itself as a dark, immersive canvas (`{colors.canvas}` — `#000000`) punctuated by dynamic organic curves, scattered particle effects, and dramatic gradient overlays. The visual language is distinctly contemporary—blending technical precision with artistic whimsy. Typography choices range from modern sans-serif to playful display faces, reflecting the designer's versatility across graphic design, photography, and digital media. The atmosphere is confidently experimental: surfaces are minimal and purposeful, interactions are fluid, and the overall impression is one of creative sophistication tempered with approachability. The layout leverages white (`{colors.primary}` — `#FFFFFF`) as a primary accent—appearing in CTA buttons, key typography, and highlight elements—creating stark, eye-catching contrast against the black backdrop. Decorative gradients and radial highlights add depth and movement without overwhelming the content.

**Key Characteristics**

- Deep, pure black background with high-contrast white typography and accents
- Organic, flowing decorative curves and particle effects throughout
- Pill-shaped buttons and rounded cards; sharp inputs and navigation edges
- Radial and linear gradient overlays for atmospheric depth
- Multi-font approach: Beast, Press Start 2P, Poppins, Oswald, Share Tech Mono, and others for distinct roles
- Single-tier shadow elevation; primarily flat or color-blocked depth
- Responsive scaling maintains visual hierarchy across all viewports
- Clean, technical feel tempered by playful, personality-driven details

## 2. Color Palette & Roles

### Primary

- **Primary / Brand / Ink** (`{colors.primary}` — `#FFFFFF`): Dominates headings, primary CTA buttons, active states, and brand emphasis. The core accent creating maximum contrast against the dark canvas.
- **Link** (`{colors.link}` — `#0000EE`): Inline hyperlinks and call-to-action text within cards and buttons. Maintains web-standard blue for recognizable interactivity.

### Accent Colors

- **Accent / Decorative** (`{colors.accent-1}` — `#A7B4C8`): No measured semantic role; used as a decorative accent in the palette for subtle tonal variation where softness is desired.

### Neutral Scale

- **Canvas / On Primary** (`{colors.canvas}` — `#000000`): The default page background and primary neutral. Also serves as label color on brand (white) surfaces.
- **Surface** (`{colors.surface}` — `#F4F1EA`): Card and panel backgrounds, providing warm, off-white contrast for featured content and comments.
- **Body** (`{colors.body}` — `#172633`): Primary body copy and paragraph text; dark blue-gray for soft hierarchy against black.
- **Muted** (`{colors.muted}` — `#1A1A1A`): Captions, secondary text, and labels; slightly elevated from pure black for supporting information.
- **Faint** (`{colors.faint}` — `#111111`): Tertiary and placeholder text; near-black for minimal visual weight.
- **Neutral** (`{colors.neutral-1}` — `#EDEAE3`): Soft neutral used in secondary surfaces and decorative contexts.

### Semantic / Status

*No error, success, or warning colors were extracted from the site. The design does not declare a semantic color ramp for validation states.*

## 3. Typography Rules

### Font Family

**Primary:** Poppins (sans-serif) — modern, clean, and highly legible. Fallback to `sans-serif`.

**Secondary Display:** Beast, Press Start 2P, Oswald, Gloria Hallelujah — distinctive display and accent fonts for personality and hierarchy breaks.

**Code / Technical:** Share Tech Mono, Courier New, Player Sans Mono 8x8 — monospace families for code blocks and technical labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display XL | Beast, Oswald, or Poppins | 56px | 700 | 1.2 | Negative tracking on display sizes; exact value context-dependent | Hero headings and largest page titles; used at 1280px+ breakpoints |
| Display SM | Poppins or Oswald | 28px | 700 | 1.2 | Negative tracking | Section headings and subheadings; appears at all breakpoints |
| Heading MD | Poppins | 24px | 700 | 1.3 | 0px | Feature titles and card headers |
| Heading SM | Poppins | 18px | 600 | 1.3 | 0px | Secondary headings and labels |
| Body MD | Poppins | 12px | 400 | 1.5 | 0px | Paragraph text, default body copy |
| Body SM | Poppins | 11px | 400 | 1.5 | 0px | Captions and secondary body text |
| Button | Poppins, sans-serif | 12px | 400 | 1.0 | 0px | Interactive button text; consistent across states |
| Code SM | Courier New, Share Tech Mono | 11px | 400 | 1.4 | 0px | Inline code and monospace labels |

### Principles

- **High contrast as default**: White text on black, black text on white surface.
- **Display faces for personality**: Beast, Press Start 2P, and Oswald used sparingly for distinctive headings and hero text.
- **Poppins as workhorse**: Modern, approachable, and highly legible across sizes.
- **Monospace for technical**: Share Tech Mono and Courier New establish code and label hierarchy.
- **Consistent 1.2–1.5 line heights**: Ensures readability and breathing room in dense layouts.
- **Negative tracking on display**: Applied to large sizes for tighter, more premium feel.

## 4. Component Stylings

### Buttons

**Primary CTA Button**
- Background: `{colors.primary}` (`#FFFFFF`)
- Text Color: `{colors.link}` (`#0000EE`)
- Padding: `15px 26px`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: sans-serif
- Border Radius: `{rounded.full}` (`9999px`)
- Border: none
- Box Shadow: none
- Height: `48px`
- Width: `166px`
- Line Height: normal

**Filled Button (Secondary)**
- Background: `rgba(0, 0, 0, 0.28)`
- Text Color: `{colors.accent-1}` (`#A7B4C8`)
- Padding: `0px 10px`
- Font Size: `11px`
- Font Weight: `400`
- Font Family: Courier New
- Border Radius: `{rounded.full}` (`9999px`)
- Border: `1px solid rgba(255, 255, 255, 0.16)`
- Box Shadow: none
- Height: `28px`
- Width: `56px`
- Line Height: normal

**Filled Button Large**
- Background: `rgb(58, 58, 58)`
- Text Color: `{colors.link}` (`#0000EE`)
- Padding: `0px 14px 0px 12px`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: sans-serif
- Border Radius: `{rounded.full}` (`9999px`)
- Border: none
- Box Shadow: none
- Height: `54px`
- Width: `119px`
- Line Height: normal

**Icon Button (Ghost)**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `rgba(255, 255, 255, 0.55)`
- Padding: `1px 6px`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: sans-serif
- Border Radius: `{rounded.full}` (`9999px`)
- Border: none
- Box Shadow: none
- Height: `46px`
- Width: `46px`
- Line Height: normal

### Cards & Containers

**Featured Card**
- Background: `{colors.surface}` (`#F4F1EA`)
- Text Color: `rgb(27, 27, 27)`
- Padding: `12px 12px 10px 12px`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: sans-serif
- Border Radius: `{rounded.xs}` (`2px`)
- Border: none
- Box Shadow: `rgba(0, 0, 0, 0.28) 0px 10px 26px 0px`
- Height: `228px`
- Width: `200px`
- Line Height: normal

### Navigation

**Default Navigation**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `rgb(0, 0, 0)`
- Padding: `14px 16px`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: sans-serif
- Border Radius: `{rounded.none}` (`0px`)
- Border: none
- Box Shadow: none
- Height: `94px`
- Width: `1440px`
- Line Height: normal

### Links

**Default Link**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `rgb(0, 0, 0)`
- Padding: `18px 20px 24px 20px`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: sans-serif
- Border Radius: `{rounded.lg}` (`18px`)
- Border: none
- Box Shadow: `rgba(0, 0, 0, 0.35) 0px 2px 6px 0px inset, rgba(183, 214, 105, 0.22) 0px 0px 40px 0px`
- Height: `150px`
- Width: `408px`
- Line Height: normal

**Default Link Small**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `{colors.link}` (`#0000EE`)
- Padding: `20px 26px`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: sans-serif
- Border Radius: `{rounded.full}` (`9999px`)
- Border: none
- Box Shadow: `rgba(0, 0, 0, 0.45) 0px 16px 34px 0px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset`
- Height: `62px`
- Width: `408px`
- Line Height: normal

## 5. Layout Principles

### Spacing System

Base unit: `{spacing.xs}` = `8px`

Full scale with usage contexts:

- `{spacing.xxs}` = `4px` — Micro-spacing for tight icon-text pairs or extreme density.
- `{spacing.xs}` = `8px` — Compact spacing within buttons, labels, and inline elements.
- `{spacing.sm}` = `12px` — Comfortable spacing between nested components; body text adjustments.
- `{spacing.md}` = `16px` — Standard spacing between card elements and horizontal padding.
- `{spacing.lg}` = `20px` — Larger padding for card internals and moderate section breaks.
- `{spacing.xl}` = `24px` — Prominent spacing between major groups; card borders to content.
- `{spacing.xxl}` = `28px` — Between distinct sections within a page.
- `{spacing.xxxl}` = `32px` — Large vertical rhythm between hero and next section.
- `{spacing.section}` = `36px` — Full section-to-section spacing; major layout breaks.
- `{spacing.band}` = `40px` — Maximum horizontal/vertical padding for page bands and full-width sections.

### Grid & Container

- **Max Width (Desktop):** `1080px` — Content area on 1280px+ viewports, providing balanced negative space.
- **Section Padding X:** `{spacing.md}` (`16px`) — Consistent horizontal edge padding across all breakpoints.
- **Column Strategy:** Measured as 3 columns on mobile/tablet, 2 columns on 1024px, scaling to 3 columns on desktop with increased content width.
- **Responsive Container:** Content column ranges from `342px` on 375px viewports to `1080px` on 1440px, maintaining aspect and readability.

### Whitespace Philosophy

The design favors generous negative space to emphasize content and create breathing room. Large sections of the canvas remain intentionally empty, allowing organic decorative curves and particle effects to draw the eye without cluttering. Padding is consistent within components but varies dramatically between sections, creating visual rhythm and guiding focus to key pieces. Surface cards (`{colors.surface}`) anchor information within the void, and gradients layer subtle depth without requiring physical elevation or shadow stacking.

### Border Radius Scale

- `{rounded.none}` = `0px` — Buttons, inputs, navigation; sharp, technical feel.
- `{rounded.xs}` = `2px` — Cards; minimal softening for elegant constraint.
- `{rounded.sm}` = `4px` — Decorative accents and secondary elements.
- `{rounded.md}` = `6px` — Mid-level softening for panels and moderate component groups.
- `{rounded.lg}` = `18px` — Generous rounding on link cards and call-to-action containers.
- `{rounded.xl}` = `24px` — Image containers; warming the visual experience.
- `{rounded.full}` = `9999px` — All buttons and interactive pills; soft, friendly, and modern.

### Border Widths

- **Thin** (`1px`): Applied to secondary filled buttons (`1px solid rgba(255, 255, 255, 0.16)`) for subtle definition against dark backgrounds.

## 6. Depth & Elevation

### Shadow Table

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow; color blocking only | Default state for most components; inputs, text, transparent navigation |
| Navigation | `rgba(0, 0, 0, 0.5) 0px 14px 34px 0px` | Header bar when anchored or scrolled; subtle depth anchor |
| Card Lift | `rgba(0, 0, 0, 0.28) 0px 10px 26px 0px` | Featured cards and panels; moderate elevation for focus |
| Link Internal | `rgba(0, 0, 0, 0.35) 0px 2px 6px 0px inset, rgba(183, 214, 105, 0.22) 0px 0px 40px 0px` | Interactive link cards; inset shadow + colored glow |
| Link Prominent | `rgba(0, 0, 0, 0.45) 0px 16px 34px 0px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset` | Call-to-action button links; dramatic depth with light inset |

### Shadow Philosophy

The system employs a **single-tier, color-blocking** approach to depth. Rather than relying on a graduated ladder of shadows, the design achieves layering through surface color changes (`{colors.surface}` against `{colors.canvas}`) and selective, dramatic shadows on key interactive elements. Shadows are purposefully heavy (high opacity, large blur radius) to create immediate visual separation. Decorative elements like cards and CTA links feature inset and outer shadows simultaneously, creating tactile richness without multiple elevation states.

### Opacity Levels

- `0.99` (99%) — Nearly opaque; for very subtle overlays or near-full content visibility.
- `0.90` (90%) — Slightly reduced opacity for disabled or secondary states.
- `0.85` (85%) — Soft reduction for hover or transition states.
- `0.74` (74%) — Moderate reduction for muted or background layers.
- `0.70` (70%) — For semi-transparent overlays and decorative depth.
- `0.55` (55%) — Icon opacity in ghost/inactive states; significant reduction for tertiary elements.

### Z-index / Layering

- **Base:** `1–3` — Default content flow; cards, text, and standard components.
- **Elevated:** `4–5` — Hoverable elements, interactive layers, and mild overlays.
- **Fixed/Sticky:** `6–7` — Navigation bars and anchored headers.
- **Modal/Overlay:** `8` — Topmost layer for dialogs, tooltips, and full-page overlays.

All z-indices are minimal, reflecting the flat, color-blocking philosophy.

## 7. Do's and Don'ts

### Do

- **Use `{colors.primary}` (`#FFFFFF`) as the primary accent** for CTAs, active states, and emphasis. High contrast against the black canvas ensures maximum visibility and brand recognition.
- **Pair Poppins with display fonts sparingly.** Beast, Press Start 2P, and Oswald add personality; reserve them for hero headings and section breaks, not body text.
- **Apply pill-shaped (`{rounded.full}`) buttons consistently** across all interactive elements for a unified, friendly interaction model.
- **Layer gradients and particle effects** behind content rather than on top. Use `radial-gradient(50% 50%, rgba(255, 255, 255, 0.5) 0%, ...)` and similar patterns for atmospheric depth without obscuring readability.
- **Maintain 16px section padding (`{spacing.band}`)** on mobile and tablet to prevent edge clipping and ensure safe areas.
- **Use color blocking over shadow stacking.** Change surface color (`{colors.surface}`) to define cards; rely on selective, dramatic shadows for key interactions only.
- **Respect the single-tier shadow model.** Featured cards and link CTA containers receive the heaviest shadows (`0px 10px 26px 0px`); everything else is flat.
- **Scale typography purposefully.** At 1280px+ viewports, display sizes jump to 56px; maintain this clear breakpoint hierarchy.

### Don't

- **Avoid softening buttons with high border-radius values** unless they are ghost/icon buttons. Primary CTAs and filled buttons use `{rounded.full}` for consistency; do not introduce intermediate radii.
- **Don't invent semantic colors.** The site does not declare error/warning/success states. Do not add red, green, or amber unless explicitly measured.
- **Never apply multiple shadow layers** to a single component. The system is flat-first; if depth is needed, use one precise shadow or color blocking.
- **Avoid light text on light surfaces** or dark text on dark surfaces. Maintain the stark contrast model: white on black, dark content on `{colors.surface}` (`#F4F1EA`).
- **Don't exceed display-size heading widths** on mobile. At 375px viewports, headings are 28px, not 56px; scale gracefully with breakpoints.
- **Avoid navigation transparency changes.** The default navigation is transparent; do not add background color or opacity shift on scroll without explicit design revision.
- **Never cluster more than 3 pill buttons horizontally** on mobile. Wrap and stack for legibility.

## 8. Responsive Behavior

### Breakpoints

| Viewport | Content Column | Grid Columns | Nav Links Visible | Display Size | Body Size | Section Padding X | Key Changes |
|---|---|---|---|---|---|---|---|
| 375px | 342px | 3 | 6 | 28px | 12px | `{spacing.md}` (`16px`) | Mobile: stacked layout, compact spacing |
| 768px | 374px | 3 | 6 | 28px | 12px | `{spacing.md}` (`16px`) | Tablet: content narrows slightly, no major changes |
| 1024px | 374px | 2 | 6 | 28px | 12px | `{spacing.md}` (`16px`) | Grid shifts from 3 to 2 columns; content width stable |
| 1280px | 1080px | 3 | 5 | 56px | 12px | `{spacing.md}` (`16px`) | Desktop: content max-width increases, display type doubles in size, nav collapses slightly |
| 1440px | 1080px | 3 | 5 | 56px | 12px | `{spacing.md}` (`16px`) | Stable desktop; no further changes |

### Touch Targets

- **Minimum interactive size:** `44px` (`46px` measured on icon buttons at `{rounded.full}`).
- **Button height:** `48px` for primary CTAs; `28px` for compact secondary buttons.
- **Tap-friendly spacing:** Maintain `{spacing.md}` (`16px`) minimum between adjacent interactive elements to prevent mis-taps.
- **Icon buttons:** `46px × 46px` with centered content for comfortable one-handed interaction.

### Collapsing Strategy

- **Mobile (375–768px):** Single-column content layout; cards and sections stack vertically. Navigation maintains full link visibility (6 links); no hamburger menu. Section padding remains `{spacing.md}` (`16px`).
- **Tablet (768–1024px):** Content column slightly widens to `374px`; grid columns remain 3 but may shift visually. No major collapse; navigation stable.
- **Desktop (1280px+):** Content container expands to `1080px` max-width, centering within the viewport. Display heading jumps from 28px to 56px. Navigation collapses from 6 links to 5 (measured change). Grid may reflow to 2 or 3 columns depending on content.
- **Text scaling:** Font sizes remain constant across breakpoints (no responsive type stepping measured except heading display sizes). Line heights stable at 1.2–1.5.
- **Image containers:** Maintain `{rounded.xl}` (`24px`) border radius across all breakpoints; scale proportionally with column width.

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA / Brand Accent:** White (`{colors.primary}` — `#FFFFFF`)
- **Links / Interactive Text:** Blue (`{colors.link}` — `#0000EE`)
- **Canvas / Default Background:** Black (`{colors.canvas}` — `#000000`)
- **Card Surface / Featured Content:** Off-white (`{colors.surface}` — `#F4F1EA`)
- **Body Copy:** Dark blue-gray (`{colors.body}` — `#172633`)
- **Muted / Secondary Text:** Near-black (`{colors.muted}` — `#1A1A1A`)
- **Decorative Accent:** Light gray-blue (`{colors.accent-1}` — `#A7B4C8`)

### Implementation Rules

1. **Buttons are always pill-shaped** (`{rounded.full}` / `9999px`) and available in four variants: Primary (white bg, blue text), Filled secondary (dark semi-transparent), Large filled (gray bg, blue text), and Ghost/Icon (transparent, muted text).

2. **Typography hierarchy is strict:** Display sizes (28px mobile / 56px desktop) use Beast or Oswald; headings use Poppins at 18–24px; body is always 12px Poppins. No custom sizes outside this table.

3. **Cards have minimal radius** (`{rounded.xs}` / `2px`) and a single dramatic shadow (`0px 10px 26px 0px rgba(0, 0, 0, 0.28)`) on a warm surface (`#F4F1EA`).

4. **Navigation is transparent by default**, no background, no border. When a shadow is applied (scrolling trigger), use `rgba(0, 0, 0, 0.5) 0px 14px 34px 0px`.

5. **All spacing derives from 8px base unit** (`{spacing.xs}`). Section padding is always `{spacing.md}` (`16px`) horizontally; vertical spacing between sections uses `{spacing.band}` (`40px`), `{spacing.section}` (`36px`), or `{spacing.xxxl}` (`32px`).

6. **Depth comes from color blocking and selective shadows, not layered elevation.** Cards use `{colors.surface}`; text uses `{colors.body}` on black. Shadows appear only on featured cards and prominent CTAs.

7. **Responsive design is breakpoint-based, not fluid.** Content width is fixed at 342px (mobile), 374px (tablet), or 1080px (desktop). Typography does not scale incrementally; it jumps at 1280px (display 28px → 56px).

8. **Opacity overlays and decorative gradients** use radial patterns: `radial-gradient(50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 72%)` and linear patterns: `linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 62%, rgb(255, 255, 255) 100%)`. These are atmospheric, not semantic.

9. **Ghost/Icon buttons are transparent with muted text** (`rgba(255, 255, 255, 0.55)`) and no shadow. Use for secondary actions or navigation toggles.

10. **Link cards combine inset and outer shadows** for tactile depth: `rgba(0, 0, 0, 0.35) 0px 2px 6px 0px inset, rgba(183, 214, 105, 0.22) 0px 0px 40px 0px`. This unique combination distinguishes interactive cards from static content.

## 10. Known Gaps

- **No measured interaction states for most components.** The site's stylesheets declare link hover behavior via CSS variables, but no explicit hover, focus, or active styles were extracted for buttons, inputs, or cards. Implement standard interactions (darker background, outline focus) based on accessible design patterns; verify against live prototype.
- **Semantic status colors (error, success, warning) are not declared.** The extraction found no red, green, amber, or similar. If the portfolio requires form validation feedback, these colors must be designed and added; they are not part of the measured system.
- **Two colors have no measured semantic role:** `{colors.accent-1}` (`#A7B4C8`) and `{colors.neutral-1}` (`#EDEAE3`). Both are treated as decorative accents; if a designer assigns them future roles (e.g., disabled states, divider lines), document and expand this guide.
- **Dark mode or theme variants are not declared.** The extraction captured one visual theme (dark canvas, white text). If a light theme exists behind an unseen toggle, it is not represented here.
- **Form input styling is inferred from buttons only.** No explicit `<input>`, `<textarea>`, or `<select>` components were measured. Inputs likely use `{rounded.none}` (sharp corners, matching button borders) and inherit typography, but baseline states, disabled appearance, and validation styling should be verified against actual form elements.
- **Only one page was analyzed.** Portfolio pages behind "Career," "Contact," or authentication flows were not visited. Design decisions on those surfaces may differ.
- **Micro-interactions and animation timings are not documented.** The system includes opacity levels (0.55–0.99) but no transition duration or easing function data was extracted. Define CSS `transition` properties (e.g., `0.2s ease-out`) based on the brand's motion preferences.
- **Exact letter-spacing values for display typography are context-dependent.** Negative tracking is applied but the exact px or em offset varies by font and size. Measure and confirm on live type before finalizing large-scale headings.

---

**Document Version:** 1.0  
**Last Updated:** From design token extraction of byuurjaportofolio.framer.media  
**Coverage:** Homepage and portfolio comments section; 1 page analysed.