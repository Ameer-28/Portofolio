import { CaseStudyData } from "@/types/case-study";

export const ecommerceApiCaseStudy: CaseStudyData = {
  slug: "ecommerce-rest-api",
  projectName: "E-Commerce REST API Platform",
  projectType: "Backend REST API Architecture",
  tagline: "Arsitektur REST API untuk platform e-commerce mencakup katalog produk, autentikasi JWT (RBAC), alur keranjang belanja, dan manajemen pesanan.",
  role: "Backend Developer & Data Modeler",
  technologies: ["Node.js", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Passport JWT", "Bcrypt", "REST API"],
  githubUrl: "https://github.com/Ameer-28/ecommerce-backend",
  overview: [
    "E-Commerce REST API Platform adalah proyek arsitektur backend yang dirancang untuk mengelola siklus penuh operasional e-commerce, termasuk manajemen produk, pengelompokan kategori, alur keranjang belanja interaktif, manajemen pesanan, dan penyediaan data untuk Admin Dashboard analitik.",
    "Dibangun di atas fondasi Node.js dan NestJS, API ini menerapkan standardisasi endpoint RESTful, autentikasi JWT dengan Role-Based Access Control (RBAC), serta pengelolaan basis data relasional PostgreSQL dengan bantuan Prisma ORM.",
  ],
  systemContext:
    "Layanan ini beroperasi sebagai server REST API mandiri yang menyediakan endpoint JSON terstruktur untuk dikonsumsi oleh aplikasi frontend web e-commerce (Next.js) dan modul Admin Dashboard.",
  architectureLayers: [
    {
      name: "API Routing & Request Handling",
      tech: "NestJS Controllers & DTOs",
      description: "Menerima request HTTP untuk produk, kategori, keranjang, dan transaksi serta mengembalikan JSON response terstandar.",
    },
    {
      name: "Security & Role Protection",
      tech: "Passport JWT & RBAC Guards",
      description: "Otorisasi role berbasis token JWT untuk membedakan hak akses pelanggan umum dan administrator toko.",
    },
    {
      name: "Domain & Business Logic",
      tech: "NestJS Services",
      description: "Memproses logika bisnis seperti kalkulasi total harga, validasi ketersediaan stok, alur checkout, dan pembaruan status pesanan.",
    },
    {
      name: "Object-Relational Mapping & Database",
      tech: "Prisma ORM & PostgreSQL",
      description: "Menjembatani kode TypeScript dengan database relasional melalui skema Prisma yang strongly-typed dan relasi foreign key.",
    },
  ],
  backendImplementation: [
    {
      title: "Modular E-Commerce Architecture & RBAC",
      description: "Pemisahan fitur e-commerce ke dalam modul independen dengan pengamanan akses berbasis role.",
      highlights: [
        "Isolasi logika bisnis per domain fitur menggunakan NestJS Modules (Auth, Products, Categories, Orders, Cart).",
        "Penerapan autentikasi JWT dengan enkripsi Bcrypt dan guard otorisasi RBAC (Admin / Customer).",
        "Pemanfaatan DTO dengan class-validator untuk strukturisasi data input.",
      ],
    },
    {
      title: "Manajemen Keranjang, Pesanan & Admin Dashboard",
      description: "Mendesain alur transaksi data relasional dari keranjang hingga penyajian data visualisasi.",
      highlights: [
        "Pengelolaan state keranjang belanja dan kalkulasi diskon/harga dinamis.",
        "Pencatatan siklus status pesanan (Pending, Processing, Completed, Cancelled).",
        "Endpoint agregasi data transaksi untuk kebutuhan visualisasi grafik pada Admin Dashboard.",
      ],
    },
  ],
  databaseDesign: {
    overview:
      "Database relasional PostgreSQL dirancang untuk mencakup seluruh entitas e-commerce dengan integritas referensial yang ketat.",
    entities: [
      {
        name: "User & Role",
        purpose: "Menyimpan data pengguna, email, hashed password, dan hak akses (ADMIN / CUSTOMER).",
        keyFields: ["id", "email", "password", "name", "role", "createdAt"],
      },
      {
        name: "Product & Category",
        purpose: "Menyimpan data katalog produk, harga, stok, deskripsi, dan relasi kategori.",
        keyFields: ["id", "name", "price", "stock", "categoryId", "createdAt"],
      },
      {
        name: "Order & OrderItem",
        purpose: "Mencatat transaksi pembelian, kuantitas produk, total biaya, dan status pengiriman.",
        keyFields: ["id", "userId", "totalAmount", "status", "paymentMethod", "createdAt"],
      },
    ],
  },
  keyDecisions: [
    {
      topic: "Modular Entity Architecture",
      decision: "Memisahkan manajemen produk, kategori, cart, dan order ke dalam modul terpisah.",
      rationale: "Menghindari monolithic controller dan mempermudah pengujian alur bisnis tiap fitur.",
    },
    {
      topic: "Prisma Relational Queries",
      decision: "Menggunakan relasi Prisma `include` dan `select` untuk join query yang efisien.",
      rationale: "Mengurangi multiple round-trip query ke database saat mengambil data produk beserta kategorinya.",
    },
  ],
  takeaways: [
    "Memahami kompleksitas pemodelan data relasional untuk alur transaksi e-commerce dan agregasi dashboard.",
    "Menguasai best practices perancangan REST API terstruktur berbasis NestJS, JWT RBAC, dan TypeScript.",
  ],
};
