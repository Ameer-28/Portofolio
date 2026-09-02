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
    "Saya adalah siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK Telkom Malang (2024–2027) dengan fokus utama pada backend development dan rekayasa perangkat lunak.",
    "Fokus pembelajaran dan eksplorasi saya berpusat pada perancangan arsitektur server modular, pembuatan REST API terstruktur, serta pemodelan database relasional menggunakan ekosistem NestJS, TypeScript, Prisma ORM, dan PostgreSQL.",
    "Selain spesialisasi backend, saya juga memiliki kapabilitas pendukung dalam mengintegrasikan antarmuka web client modern menggunakan Next.js dan Tailwind CSS untuk menghasilkan sistem aplikasi digital yang utuh dan fungsional.",
  ],
  frontendApproach:
    "Menggunakan teknik vibe coding modern untuk mengintegrasikan antarmuka web client sebagai supporting capability.",
  profileImage: {
    src: "/images/profile.jpg",
    isAvailable: true,
  },
  cv: {
    url: "/CV_Muhammad_Amin_Murtadho.pdf",
    isAvailable: false, // Set to true once PDF file is placed in public/
  },
  social: {
    email: "muhammadaminmurtadho12@gmail.com",
    github: "https://github.com/Ameer-28",
    linkedin: "https://www.linkedin.com/in/muhammad-amin-murtadho-65ba40424/",
    instagram: "https://www.instagram.com/aameeerr__/",
  },
};
