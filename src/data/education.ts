import { EducationData, CertificationItem } from "@/types";

export const educationData: EducationData = {
  institution: "SMK Telkom Malang",
  program: "Rekayasa Perangkat Lunak (RPL)",
  period: "2024 — 2027",
  status: "Current Student (Siswa Aktif)",
  location: "Malang, Indonesia",
  relevantLearning: [
    "Prinsip Rekayasa Perangkat Lunak & SDLC",
    "Algoritma, Struktur Data & Pemrograman Berorientasi Objek (OOP)",
    "Perancangan Basis Data Relasional & Normalisasi SQL",
    "Pengembangan Web & Arsitektur Client-Server",
    "Dasar Pemrograman Java & Ekosistem Web Modern",
    "Version Control & Kolaborasi Rekayasa Perangkat Lunak (Git)",
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-nextjs-nestjs",
    name: "Website Development using Next.js & Nest.js",
    issuer: "SMK Telkom Malang",
  },
];
