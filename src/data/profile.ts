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
    "Membangun sistem backend yang andal, scalable, dan terdokumentasi dengan baik.",
  aboutBio: [
    "Saya adalah siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK Telkom Malang (2024–2027) yang memilih untuk mendalami jalur Backend Development secara serius sejak tahun pertama.",
    "Fokus utama saya ada pada membangun RESTful API yang terstruktur, mengelola relasi data secara efisien, dan menerapkan standar keamanan seperti autentikasi JWT dengan Role-Based Access Control.",
    "Di luar kurikulum sekolah, saya secara mandiri mengeksplorasi pola arsitektur modular, containerization, serta praktik dokumentasi API menggunakan Swagger/OpenAPI untuk mempersiapkan diri menghadapi lingkungan kerja profesional.",
  ],
  frontendApproach:
    "Fokus penuh pada rekayasa sistem backend yang type-safe, scalable, dan terdokumentasi.",
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
