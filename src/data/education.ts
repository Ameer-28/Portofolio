import { EducationData, CertificationItem } from "@/types";

export const educationData: EducationData = {
  institution: "SMK Telkom Malang",
  program: "Rekayasa Perangkat Lunak (RPL)",
  period: "2024 — 2027",
  status: "Current Student (Siswa Aktif)",
  location: "Malang, Indonesia",
  relevantLearning: [
    "Software Engineering Principles",
    "NestJS & TypeScript Backend Architecture",
    "Relational Database Modeling (PostgreSQL & Prisma ORM)",
    "Node.js & REST API Design",
    "Java Programming",
    "Web Client Integration (HTML, CSS, JavaScript, Next.js)",
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-nextjs-nestjs",
    name: "Website Development using Next.js & Nest.js",
    issuer: "SMK Telkom Malang",
  },
];
