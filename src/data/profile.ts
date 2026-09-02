import { ProfileData } from "@/types";

export const profileData: ProfileData = {
  fullName: "Muhammad Amin Murtadho",
  displayName: "Amin",
  brandName: "ameer.dev",
  location: "Malang, Indonesia",
  currentStatus: "Siswa Rekayasa Perangkat Lunak (RPL) SMK Telkom Malang",
  educationPeriod: "2024 — 2027",
  institution: "SMK Telkom Malang",
  program: "Rekayasa Perangkat Lunak (RPL)",
  primaryRole: "Backend Developer",
  specialization: {
    framework: "NestJS & TypeScript",
    database: "Prisma & PostgreSQL",
  },
  tagline:
    "Fokus merancang arsitektur backend yang handal, performa API tinggi, dan sistem database modern.",
  aboutBio: [
    "Saya adalah siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK Telkom Malang (2024–2027) dengan fokus spesialisasi penuh pada Backend Development dan Rekayasa Perangkat Lunak.",
    "Fokus pembelajaran dan eksplorasi teknis saya berpusat pada perancangan arsitektur server modular berbasis Dependency Injection, pembuatan RESTful API terstruktur, serta pemodelan database relasional menggunakan ekosistem NestJS, TypeScript, Prisma ORM, dan PostgreSQL.",
    "Saya mendalami standardisasi endpoint API, otentikasi berbasis token JWT (Role-Based Access Control), dokumentasi Swagger/OpenAPI, serta pengujian logika bisnis dan query database untuk memastikan reliabilitas sistem backend.",
  ],
  frontendApproach:
    "Fokus penuh pada rekayasa sistem backend modular, type-safe API, dan pemodelan database relasional.",
  profileImage: {
    src: "/images/profile.jpg",
    isAvailable: true,
  },
  cv: {
    url: "/CV_Muhammad_Amin_Murtadho.pdf",
    isAvailable: true,
  },
  social: {
    email: "muhammadaminmurtadho12@gmail.com",
    github: "https://github.com/Ameer-28",
    linkedin: "https://www.linkedin.com/in/muhammad-amin-murtadho-65ba40424/",
    instagram: "https://www.instagram.com/aameeerr__/",
  },
};
