# PHASE 0 — PROJECT DISCOVERY & PLANNING

## 1. PROJECT BRIEF
* **Project Name**: Personal Portfolio & Internship Application Platform
* **Primary Objective**: Berfungsi sebagai media utama saat melamar internship/magang di bidang software engineering/technology. Website dirancang sebagai *Personal Brand + Portfolio + Technical Proof + Landing Page Aplikasi Magang*.
* **Core Philosophy**:
  * **Evidence over Claims**: Menampilkan bukti nyata kemampuan (project live demo, source code, arsitektur, problem-solving), bukan sekadar klaim keahlian atau progress bar fiktif.
  * **Recruiter-Friendly UX**: Informasi inti (siapa Anda, target role, top projects, CV, kontak) dapat dipahami dan diakses dalam 5–10 detik pertama.
  * **No Overengineering**: Menghindari fitur kompleks yang tidak menambah nilai bagi reviewer magang (tidak perlu CMS berat, admin dashboard, login, database backend, atau AI chatbot).

---

## 2. TARGET AUDIENCE & USER PERSONAS
1. **Technical Recruiter / HR**:
   * *Goal*: Scanning cepat apakah kandidat memenuhi kualifikasi dasar magang, lokasi, ketersediaan periode magang, ketersediaan CV, dan link kontak (LinkedIn/Email/GitHub).
   * *Time spent*: 10–30 detik.
   * *Needs*: Hero section yang jelas, tombol CV yang mencolok, ringkasan skill yang mudah dibaca, navigasi cepat.
2. **Tech Lead / Senior Engineer / Hiring Manager**:
   * *Goal*: Memvalidasi kemampuan teknis, cara berpikir (*problem solving*), kualitas kode, pemahaman arsitektur, dan kemauan belajar (*growth mindset*).
   * *Time spent*: 1–3 menit jika tertarik.
   * *Needs*: Case study mendalam pada project utama (arsitektur, tantangan, kontribusi nyata, lessons learned), link repository GitHub, dan live demo yang berfungsi tanpa error.
3. **Peer / Collaborator / Mentor**:
   * *Goal*: Mengetahui ketertarikan teknis (*career interests*) dan potensi kolaborasi.

---

## 3. VALUE PROPOSITION & PERSONAL POSITIONING
* **Positioning Statement Template**:
  > *"Software Engineering / Computer Science Student building practical, scalable, and user-focused digital solutions — currently seeking Software Engineering Internship opportunities."*
  *(Disesuaikan dengan profil dan target spesifik user).*
* **Core Value Pillars**:
  1. **Solid Technical Foundation**: Mampu menulis kode yang bersih, terstruktur, bertipe (*type-safe*), dan maintainable.
  2. **Real Project Execution**: Telah membangun aplikasi nyata yang menyelesaikan masalah konkret, bukan sekadar tutorial cloning.
  3. **High Trainability & Growth Mindset**: Cepat beradaptasi dengan stack baru, terbuka terhadap feedback, dan memiliki rasa ingin tahu teknis yang tinggi.
  4. **Clear Technical Communication**: Mampu mendokumentasikan dan menjelaskan alur sistem serta trade-off teknis secara terstruktur.

---

## 4. INFORMATION ARCHITECTURE (IA)
Website mengadopsi struktur **Single Page Application dengan Anchor Navigation** yang mulus untuk konsumsi cepat, didukung dengan detail modal atau sub-view untuk **Project Case Studies**.

```
[ Navbar (Sticky & Accessible) ]
   │
   ├── 1. Hero Section (First Impression, Value Prop, Primary CTAs: View Projects, Download CV, Contact)
   ├── 2. About Section (Background, Education snapshot, Career Goals & Mindset)
   ├── 3. Skills Section (Categorized & Competency-based: Primary, Comfortable, Familiar, Learning)
   ├── 4. Featured Projects (3–5 curated projects with tech badges, metrics, repo, and demo)
   ├── 5. Project Case Study (Deep dive into Problem, Architecture, Contribution, Challenges, Learnings)
   ├── 6. Experience & Activities (Timeline: Org, Collaborations, Competitions, Freelance, Projects)
   ├── 7. Education & Certifications (Academic background, Relevant coursework, Verified credentials)
   ├── 8. Career Interests & Value Add ("What I Bring to the Team")
   └── 9. Contact Section & Footer (Direct Email, LinkedIn, GitHub, Resume quick access)
```

---

## 5. SITEMAP & ROUTING STRATEGY
* **Primary Landing (`/`)**:
  * `#home` (Hero)
  * `#about` (About & Mindset)
  * `#skills` (Technical Competencies)
  * `#projects` (Featured Project Showcase)
  * `#experience` (Experience & Education Timeline)
  * `#contact` (Contact details & Direct outreach)
* **Dedicated Case Study View (Modal / Dynamic Route `/projects/[slug]` optional)**:
  * Detail teknis project tanpa mengalihkan user secara drastis atau membingungkan flow navigasi.
* **Direct Asset Endpoints**:
  * `/resume.pdf` atau `/cv.pdf` (Download CV langsung).

---

## 6. SECTION HIERARCHY & DETAILED SECTION GOALS

| # | Section Name | Primary Objective | Key Content & Interactive Elements |
|---|--------------|-------------------|-------------------------------------|
| 1 | **Header / Navbar** | Navigasi instan & akses CV cepat | Logo/Initials, Nav links (`About`, `Skills`, `Projects`, `Experience`, `Contact`), CTA `Download CV`, Theme Toggle, Mobile Menu Hamburger. |
| 2 | **Hero Section** | Menjawab: *Who are you? What do you do? What are you looking for?* | Greeting, Nama (`[YOUR NAME]`), Target Role (`Software Engineer Intern`), Short Bio/Value statement, Status Badge (`Open for Internship`), Primary CTAs (`View Projects`, `Download CV`, `Contact`), Social Icons (GitHub, LinkedIn, Email). |
| 3 | **About Section** | Menjelaskan latar belakang & motivasi | Ringkasan background akademis, motivasi di bidang software engineering, pendekatan kerja (*work ethics*), dan target kontribusi magang. |
| 4 | **Skills Section** | Memudahkan recruiter memindai kapabilitas teknis | Dikelompokkan: Programming Languages, Frontend, Backend, Database, Cloud/Tools. Label kompetensi realistis (tanpa % palsu). |
| 5 | **Featured Projects** | Bukti kemampuan utama (3–5 project terbaik) | Kartu project: Thumbnail, Judul, Kategori/Role, Deskripsi singkat (problem + solution), Tech stack tags, Action buttons (GitHub Repo, Live Demo, Read Case Study). |
| 6 | **Project Case Study** | Bukti kedalaman teknis untuk Tech Lead / Hiring Manager | Format terstruktur: Overview, Problem Statement, System Solution, Key Technical Features, Architecture & Implementation, Technical Challenges, Contribution, Lessons Learned. |
| 7 | **Experience & Activities** | Menunjukkan rekam jejak kolaborasi & tanggung jawab | Timeline interaktif: Organisasi, Project team, Freelance/Hackathon/Kompetisi dengan poin kontribusi & impact. |
| 8 | **Education & Certifications** | Bukti fondasi formal & sertifikasi terverifikasi | Universitas, Jurusan, Periode, Mata kuliah relevan, Sertifikat terverifikasi (Penerbit, Tanggal, Credential Link). |
| 9 | **Career Interests & Contribution** | Menjawab: *"Why should we hire you?"* | Area fokus (Backend/Full-Stack/API/Cloud), Nilai tambah yang dibawa (Fast Learner, Code Quality, Team Collaboration). |
| 10 | **Contact & Footer** | Konversi pengunjung menjadi kontak rekrutmen | Headline ("Let's Build Something Useful"), Quick Email button, Copy Email button, Social links, Copyright & Tech credit. |

---

## 7. CONTENT REQUIREMENTS & DATA STRUCTURE (NO FAKE CLAIMS)
Semua konten data akan dikelola dalam file terpisah (`src/data/portfolio.ts` atau JSON) yang terstruktur dan strongly-typed.

### Data Placeholders & Contracts:
* **Personal Info**:
  * Full Name: `[YOUR NAME]`
  * Current Title: `[YOUR CURRENT ROLE / CS STUDENT]`
  * Location: `[YOUR CITY, COUNTRY]`
  * Availability: `[AVAILABLE FOR INTERNSHIP: e.g., Summer 2026 / Immediate]`
  * Resume URL: `/assets/cv-placeholder.pdf`
* **Projects**:
  * ID / Slug, Title, Summary, Category, Role, Tech Stack (array), Highlights/Key Features, GitHub URL, Live Demo URL, Case Study Content.
* **Skills Structure**:
  * Category (e.g. `Languages`, `Frontend`, `Backend`, `Databases`, `Tools & DevOps`), Skill Name, Level/Familiarity (`Primary`, `Comfortable`, `Familiar`, `Learning`), Icon name.
* **Experience & Education**:
  * Title/Role, Organization/Institution, Period, Location, Key Responsibilities/Achievements (bullet points), Relevant Tech.

---

## 8. TECHNICAL ASSUMPTIONS & ARCHITECTURAL CHOICES

| Layer | Recommended Choice | Rationale |
|---|---|---|
| **Framework** | **Next.js (App Router, React 19 / 18)** | Standar industri, fast server-side rendering / static export (SSG), optimal SEO, route handler fleksibel, zero-config image optimization. |
| **Language** | **TypeScript** | Strict type safety, auto-completion, meminimalisir runtime error, mencerminkan standar profesional. |
| **Styling** | **Tailwind CSS (v3/v4)** | Rapid development, consistent design tokens (colors, spacing, typography), zero runtime CSS overhead, native dark mode support. |
| **Icons** | **Lucide React** | Ringan, konsisten, modern, tree-shakeable. |
| **Component Primitives** | Custom lightweight components + `clsx` / `tailwind-merge` | Menjaga kontrol penuh atas bundle size tanpa library UI berat yang tidak perlu. |
| **State & Theme** | `next-themes` | Seamless light/dark mode tanpa flash on load (*FOUC*). |
| **Data Management** | Static TypeScript data files (`src/data/*`) | Content-driven, mudah diubah user tanpa perlu database atau CMS rumit. |
| **Build & Deploy** | Static / Serverless ready (Vercel, GitHub Pages, Netlify) | Biaya 0, performa maksimal, uptime 99.9%. |

---

## 9. RISKS, CHALLENGES & MITIGATION STRATEGY

| Risk / Possible Problem | Potential Impact | Mitigation Strategy |
|---|---|---|
| **1. Empty / Vague Content** | Portfolio terlihat seperti template generik dan tidak meyakinkan recruiter. | Sediakan struktur data yang jelas dengan placeholder terarah, dan dukung user untuk mengisi detail nyata dari project miliknya. |
| **2. Layout Shift & Heavy Assets** | Score Lighthouse rendah, user experience buruk pada mobile. | Gunakan `next/image` dengan explicit dimensions, optimasi SVG/WebP, dan prioritaskan responsive testing di setiap phase. |
| **3. Overcomplicating Animations** | Halaman terasa lambat, lag pada low-end mobile devices, mengganggu aksesibilitas. | Batasi animasi hanya pada micro-interactions yang fungsional (hover, subtle fade-in) dan dukung `prefers-reduced-motion`. |
| **4. Broken Links & Dead Demos** | Merusak kredibilitas profesional saat recruiter mengklik demo atau GitHub. | Validasi semua external links dan sediakan fallback screenshot/video preview jika demo hosting sedang sleep/down. |
| **5. Dark Mode Inconsistency** | Text kontras rendah atau unreadable saat berganti tema. | Definisikan semantik warna yang ketat pada Design System (Phase 2) dengan Tailwind semantic variables (`bg-background`, `text-foreground`, `border-border`). |

---

## 10. ACCEPTANCE CRITERIA FOR PHASE 0
- [x] Semua 10 section utama telah terdefinisi secara spesifik beserta tujuannya.
- [x] Value proposition dan target audience (Recruiter & Tech Lead) telah dipetakan dengan jelas.
- [x] Struktur arsitektur informasi dan sitemap disepakati (Single-page core + structured case study).
- [x] Skema konten dan placeholder disiapkan tanpa asumsi fiktif.
- [x] Asumsi teknologi (Next.js, TypeScript, Tailwind CSS) terdokumentasi dengan alasan yang solid.
- [x] Tidak ada coding besar atau premature UI implementation yang dilakukan di Phase 0.
