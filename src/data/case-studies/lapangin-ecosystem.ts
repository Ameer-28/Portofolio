import { CaseStudyData } from "@/types/case-study";

export const lapanginPlatformCaseStudy: CaseStudyData = {
  slug: "lapangin-platform",
  projectName: "Lapangin — Platform Booking Lapangan",
  projectType: "Web Application Client",
  tagline: "Antarmuka web interaktif untuk pemesanan lapangan olahraga dengan pengecekan jadwal dinamis dan integrasi payment gateway.",
  role: "Frontend Integration & Full-Stack System",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Midtrans Payment", "Google OAuth"],
  liveUrl: "https://lapangin-frontend.vercel.app/",
  githubUrl: "https://github.com/Ameer-28/Lapangin_frontend",
  relatedCaseStudy: {
    slug: "lapangin-api",
    name: "Lapangin API (Backend Service)",
    type: "Backend API",
  },
  overview: [
    "Lapangin adalah platform pemesanan dan manajemen jadwal lapangan olahraga full-stack yang mengintegrasikan antarmuka web modern dengan layanan backend terpisah.",
    "Aplikasi ini menyediakan pengalaman pemesanan yang mulus mencakup eksplorasi venue, pengecekan ketersediaan slot waktu secara dinamis, penerapan promo code, integrasi payment gateway Midtrans, hingga Admin Dashboard analitik.",
  ],
  systemContext:
    "Aplikasi web client ini dibangun menggunakan Next.js dan Tailwind CSS, berkomunikasi secara asinkron via REST API dengan backend server Lapangin di Railway.",
  architectureLayers: [
    {
      name: "Presentation Layer (Client)",
      tech: "Next.js & Tailwind CSS",
      description: "Antarmuka booking interaktif, katalog lapangan, form reservasi, dan visualisasi Admin Dashboard.",
    },
    {
      name: "Authentication & Payment Integration",
      tech: "Google OAuth & Midtrans Gateway",
      description: "Alur autentikasi pihak ketiga yang aman serta checkout pembayaran digital otomatis.",
    },
    {
      name: "Backend Service & Data Processing",
      tech: "Lapangin API (NestJS & Railway)",
      description: "Layanan server backend yang mengelola jadwal, pemesanan, validasi, dan persistensi database.",
    },
  ],
  backendImplementation: [
    {
      title: "Pengecekan Ketersediaan Slot Dinamis",
      description: "Mencegah bentrok jadwal reservasi dengan validasi ketersediaan slot waktu secara real-time.",
      highlights: [
        "Sinkronisasi status lapangan dan slot waktu aktif dari backend service.",
        "Dukungan pemilihan jam sewa fleksibel dengan kalkulasi tarif otomatis.",
        "Pemberian feedback visual langsung saat slot waktu telah terisi.",
      ],
    },
    {
      title: "Integrasi Payment & Admin Dashboard",
      description: "Menghubungkan alur transaksi pengguna dan pemantauan aktivitas lapangan.",
      highlights: [
        "Integrasi alur pembayaran digital melalui payment gateway Midtrans.",
        "Penerapan sistem promo code dan potongan harga pada formulir checkout.",
        "Dashboard analitik khusus admin untuk memantau metrik transaksi dan booking.",
      ],
    },
  ],
  databaseDesign: {
    overview:
      "Struktur data dikelola terpusat di backend melalui Prisma ORM dan PostgreSQL dengan skema relasional antar entitas lapangan, user, dan reservasi.",
    entities: [
      {
        name: "Field / Venue",
        purpose: "Menyimpan data fasilitas lapangan, kategori olahraga, dan tarif per jam.",
        keyFields: ["id", "name", "type", "pricePerHour", "location", "isAvailable"],
      },
      {
        name: "Booking & Payment",
        purpose: "Mencatat transaksi sewa lapangan, tanggal, jam, metode pembayaran, dan status transaksi.",
        keyFields: ["id", "fieldId", "userId", "date", "timeSlot", "totalAmount", "paymentStatus"],
      },
      {
        name: "Promo Code",
        purpose: "Pengelolaan kupon potongan harga dan periode masa berlaku diskon.",
        keyFields: ["id", "code", "discountRate", "validUntil", "isActive"],
      },
    ],
  },
  keyDecisions: [
    {
      topic: "Pemisahan Client dan Server Repository",
      decision: "Frontend Lapangin dideploy terpisah di Vercel dan berkomunikasi via REST API ke backend di Railway.",
      rationale: "Memastikan arsitektur modular, independensi deployment, dan fokus tanggung jawab yang jelas antar sistem.",
    },
    {
      topic: "Autentikasi Google OAuth & JWT",
      decision: "Mendukung login cepat via Google OAuth dan verifikasi sesi berbasis JWT.",
      rationale: "Mempermudah proses onboarding pengguna baru sekaligus menjaga keamanan akses data reservasi.",
    },
  ],
  takeaways: [
    "Memahami integrasi client-server nyata dalam lingkungan production (Vercel ke Railway).",
    "Pentingnya sinkronisasi status ketersediaan slot waktu untuk mencegah double-booking.",
  ],
};

export const lapanginApiCaseStudy: CaseStudyData = {
  slug: "lapangin-api",
  projectName: "Lapangin API — Service Booking Lapangan",
  projectType: "Backend REST API Service",
  tagline: "Layanan backend utama berbasis NestJS, Prisma ORM, dan PostgreSQL dengan autentikasi JWT (RBAC) dan integrasi payment gateway.",
  role: "Backend Architect & API Developer",
  technologies: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Passport JWT", "Bcrypt", "Railway"],
  liveApiUrl: "https://lapangin-backend.up.railway.app/",
  githubUrl: "https://github.com/Ameer-28/Lapangin_backend",
  relatedCaseStudy: {
    slug: "lapangin-platform",
    name: "Lapangin Web App (Frontend Client)",
    type: "Web App",
  },
  overview: [
    "Lapangin API merupakan layanan backend inti yang bertanggung jawab mengelola seluruh logika bisnis pemesanan lapangan, validasi ketersediaan jadwal, autentikasi pengguna dengan Role-Based Access Control (RBAC), dan pemodelan database relasional.",
    "Dibangun menggunakan framework NestJS dengan arsitektur modular, layanan ini memisahkan layer HTTP Controller, Business Logic Service, dan Data Access Prisma ORM secara disiplin.",
  ],
  systemContext:
    "Layanan ini beroperasi sebagai REST API standalone yang di-deploy pada Railway, melayani permintaan HTTP dari antarmuka web client Lapangin dan aplikasi pengujian Postman.",
  architectureLayers: [
    {
      name: "HTTP / Routing Layer (Controllers)",
      tech: "NestJS Controllers & DTOs",
      description: "Menerima HTTP request, validasi payload input DTO, dan mengembalikan response JSON terstandar.",
    },
    {
      name: "Security & Guard Layer",
      tech: "Passport JWT & RBAC Guards",
      description: "Memproteksi endpoint sensitif dengan verifikasi token JWT dan pembatasan hak akses berbasis role (Admin / User).",
    },
    {
      name: "Business Logic Layer (Services)",
      tech: "NestJS Injectable Services",
      description: "Mengeksekusi logika pemesanan, verifikasi ketersediaan slot waktu, kalkulasi harga, dan integrasi webhook pembayaran.",
    },
    {
      name: "Data Access Layer (ORM)",
      tech: "Prisma ORM & PostgreSQL",
      description: "Menyediakan query type-safe, relasi foreign key, dan integritas transaksi basis data.",
    },
  ],
  backendImplementation: [
    {
      title: "Autentikasi JWT & Role-Based Access Control",
      description: "Pengamanan sistem otorisasi multi-role untuk memisahkan hak akses pelanggan dan administrator.",
      highlights: [
        "Hashing password menggunakan Bcrypt dengan salt rounds yang aman.",
        "Penerbitan token JWT stateless untuk autentikasi sesi pengguna.",
        "Custom Guards NestJS untuk proteksi rute admin (misal: manajemen promo, analitik, dan status lapangan).",
      ],
    },
    {
      title: "Type-Safe Data Access dengan Prisma ORM",
      description: "Menggunakan Prisma Client untuk interaksi database PostgreSQL yang aman dari runtime error.",
      highlights: [
        "Skema Prisma deklaratif yang memetakan entitas data dan relasi antar tabel.",
        "Auto-generated types yang memastikan tipe data pada query selalu selaras dengan skema database.",
        "Pencegahan SQL injection melalui parameterized queries bawaan Prisma.",
      ],
    },
    {
      title: "Validasi Jadwal & Webhook Pembayaran",
      description: "Penanganan transaksi sewa lapangan dan integrasi notifikasi status pembayaran.",
      highlights: [
        "Pengecekan overlap slot waktu pada database untuk mencegah duplikasi pesanan.",
        "Penanganan webhook payment gateway untuk update status pembayaran (Pending, Paid, Expired) secara otomatis.",
        "Standardisasi HTTP status codes dan response payload terstruktur.",
      ],
    },
  ],
  databaseDesign: {
    overview:
      "Database relasional PostgreSQL dirancang dengan pemodelan entitas pengguna, peran hak akses, lapangan, jadwal, dan riwayat transaksi.",
    entities: [
      {
        name: "User / Account",
        purpose: "Menyimpan data identitas, email, hashed password, dan role pengguna (ADMIN / USER).",
        keyFields: ["id", "email", "password", "name", "role", "createdAt"],
      },
      {
        name: "Field / Venue",
        purpose: "Entitas utama penyedia data fasilitas lapangan, jenis olahraga, dan tarif sewa.",
        keyFields: ["id", "name", "type", "pricePerHour", "description", "isAvailable"],
      },
      {
        name: "Booking / Reservation",
        purpose: "Menghubungkan pelanggan dengan lapangan pada slot waktu, tanggal, dan status pembayaran tertentu.",
        keyFields: ["id", "fieldId", "userId", "bookingDate", "startTime", "endTime", "status", "paymentId"],
      },
    ],
  },
  keyDecisions: [
    {
      topic: "Pemilihan Framework NestJS",
      decision: "Menggunakan NestJS berbasis TypeScript untuk arsitektur backend.",
      rationale: "Menyediakan struktur opiniated kelas industri dengan pola Dependency Injection yang rapi dan skalabel.",
    },
    {
      topic: "Adopsi Prisma ORM",
      decision: "Memilih Prisma ORM untuk interaksi dengan PostgreSQL.",
      rationale: "Memberikan type-safety penuh dari skema hingga kode service tanpa overhead SQL query manual.",
    },
    {
      topic: "Penerapan Passport JWT & RBAC",
      decision: "Menerapkan Passport JWT strategy dan custom decorator/guard untuk pembagian role.",
      rationale: "Menjamin pemisahan hak akses admin dan user secara deklaratif dan terpusat pada controller level.",
    },
  ],
  takeaways: [
    "Pentingnya pemisahan layer controller, guards, dan service dalam menjaga kebersihan arsitektur backend.",
    "Keunggulan type-safety end-to-end dari database hingga HTTP layer menggunakan TypeScript dan Prisma.",
  ],
};
