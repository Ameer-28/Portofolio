import { CareerValueData } from "@/types/career";

export const careerValueData: CareerValueData = {
  contributions: [
    {
      id: "backend-dev",
      title: "Backend Service & API Modules",
      description:
        "Membantu membangun, mengembangkan, dan memelihara modul backend menggunakan NestJS dan TypeScript dengan struktur arsitektur modular yang terorganisir.",
      points: [
        "Implementasi controller HTTP dan service logika bisnis yang terisolasi secara disiplin.",
        "Penulisan kode backend strongly-typed dengan TypeScript dan validasi DTO.",
        "Penyediaan endpoint REST API terstruktur yang siap dikonsumsi oleh antarmuka web client.",
      ],
      technologies: ["NestJS", "TypeScript", "Node.js", "REST API"],
    },
    {
      id: "data-modeling",
      title: "Data Modeling & ORM Integration",
      description:
        "Berkontribusi dalam perancangan skema data relasional dan implementasi manipulasi database menggunakan Prisma ORM serta PostgreSQL.",
      points: [
        "Perancangan skema relasional (One-to-Many, Many-to-Many) yang konsisten.",
        "Pembuatan query data type-safe menggunakan Prisma Client tanpa risiko SQL injection.",
        "Penerapan integritas foreign key dan indeks untuk menjaga kebersihan data.",
      ],
      technologies: ["PostgreSQL", "Prisma ORM", "MySQL", "Relational Modeling"],
    },
    {
      id: "workflow-collab",
      title: "Engineering Workflow & Collaboration",
      description:
        "Terbiasa bekerja dengan version control, pengujian API, dan dokumentasi terstruktur untuk mendukung proses integrasi tim pengembang.",
      points: [
        "Pemanfaatan Git dan GitHub dalam manajemen branch dan kolaborasi source code.",
        "Pengujian fungsionalitas dan validasi payload endpoint API menggunakan Postman.",
        "Kemampuan menjembatani integrasi antara antarmuka web client (Next.js) dan backend.",
      ],
      technologies: ["Git", "GitHub", "Postman", "Next.js", "Docker"],
    },
  ],
  careerFocus: [
    {
      id: "backend-arch",
      title: "Backend Engineering & API Design",
      description:
        "Fokus utama saya terarah pada perancangan arsitektur server, standardisasi RESTful API, dan pemodelan database relasional menggunakan ekosistem TypeScript dan NestJS.",
      points: [
        "Struktur kode modular berbasis Dependency Injection.",
        "Standardisasi kontrak request dan response JSON.",
        "Efisiensi query basis data relasional.",
      ],
    },
    {
      id: "system-maintainability",
      title: "Clean Code & System Maintainability",
      description:
        "Tertarik mendalami prinsip clean code, type-safety menyeluruh, penanganan error terpusat, dan perancangan sistem backend yang mudah dipelihara oleh tim.",
      points: [
        "Pemisahan tanggung jawab (Separation of Concerns).",
        "Pencegahan inkonsistensi tipe runtime.",
        "Dokumentasi API yang jelas dan terstandarisasi.",
      ],
    },
  ],
  growthAreas: [
    {
      id: "testing",
      title: "Automated API Testing",
      description:
        "Memperdalam unit testing dan integration testing untuk memastikan keandalan endpoint API secara otomatis sebelum proses rilis.",
    },
    {
      id: "auth-security",
      title: "API Security & RBAC",
      description:
        "Mendalami best practices autentikasi, otorisasi berbasis peran (Role-Based Access Control), dan sanitasi input tingkat lanjut.",
    },
    {
      id: "containerization",
      title: "Docker & Container Workflows",
      description:
        "Meningkatkan kapabilitas containerization untuk memastikan konsistensi environment antara pengembangan lokal dan staging.",
    },
    {
      id: "production-practices",
      title: "Production Engineering Practices",
      description:
        "Mempelajari standar logging terstruktur, error monitoring, dan pemeliharaan aplikasi di lingkungan cloud production.",
    },
  ],
  internshipStatement: {
    message:
      "Saya terbuka untuk kesempatan internship yang memungkinkan saya berkontribusi nyata dalam pengembangan backend sekaligus belajar dari codebase, workflow, dan standar engineering di lingkungan tim profesional.",
    actionLabel: "Hubungi via Email",
    actionHref: "mailto:muhammadaminmurtadho12@gmail.com",
  },
};
