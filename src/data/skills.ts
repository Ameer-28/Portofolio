import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    groupName: "Backend & Database",
    description: "Spesialisasi inti dalam perancangan arsitektur server, manajemen API, dan pemodelan basis data relasional.",
    skills: [
      { name: "PostgreSQL", isPrimary: true },
      { name: "Prisma ORM", isPrimary: true },
      { name: "NestJS", isPrimary: true },
      { name: "REST API", isPrimary: true },
      { name: "MySQL", isSecondary: true },
      { name: "Swagger / OpenAPI", isSecondary: true },
      { name: "Passport JWT (RBAC)", isSecondary: true },
      { name: "Bcrypt", isSecondary: true },
    ],
  },
  {
    groupName: "Languages & Runtime",
    description: "Bahasa pemrograman dan runtime environment utama untuk rekayasa sistem server backend.",
    skills: [
      { name: "TypeScript", isPrimary: true },
      { name: "Node.js", isPrimary: true },
      { name: "JavaScript", isSecondary: true },
      { name: "Java", isSecondary: true },
    ],
  },
  {
    groupName: "Tools & DevOps",
    description: "Ekosistem alat kerja pengujian API, containerization, version control, dan platform deployment.",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Railway" },
      { name: "Vercel" },
      { name: "Visual Studio Code" },
    ],
  },
];
