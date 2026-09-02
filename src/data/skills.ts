import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    groupName: "Backend & Database",
    description: "Spesialisasi inti dalam perancangan arsitektur server, manajemen API, dan pemodelan basis data relasional.",
    skills: [
      { name: "PostgreSQL", isPrimary: true },
      { name: "Prisma ORM", isPrimary: true },
      { name: "MySQL", isSecondary: true },
      { name: "REST API", isSecondary: true },
      { name: "Swagger / OpenAPI", isSecondary: true },
      { name: "Passport JWT", isSecondary: true },
      { name: "Bcrypt", isSecondary: true },
    ],
  },
  {
    groupName: "Languages & Frameworks",
    description: "Bahasa pemrograman dan framework pengembangan backend utama serta kapabilitas integrasi client.",
    skills: [
      { name: "NestJS", isPrimary: true },
      { name: "TypeScript", isPrimary: true },
      { name: "Node.js", isSecondary: true },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Java" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    groupName: "Tools & DevOps",
    description: "Ekosistem alat kerja, containerization, pengujian API, version control, dan platform deployment.",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Visual Studio Code" },
      { name: "Railway" },
      { name: "Vercel" },
    ],
  },
];
