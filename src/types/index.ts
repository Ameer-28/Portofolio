export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  instagram?: string;
}

export interface ProfileData {
  fullName: string;
  displayName: string;
  brandName: string;
  location: string;
  currentStatus: string;
  educationPeriod: string;
  institution: string;
  program: string;
  primaryRole: string;
  specialization: {
    framework: string;
    database: string;
  };
  tagline: string;
  aboutBio: string[];
  frontendApproach: string;
  profileImage: {
    src: string;
    isAvailable: boolean;
  };
  cv: {
    url: string;
    isAvailable: boolean;
  };
  social: SocialLinks;
}

export interface SkillItemDetail {
  name: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
}

export interface SkillGroup {
  groupName: string;
  description: string;
  skills: SkillItemDetail[];
}

export interface ProjectCaseStudyPlaceholder {
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string[];
  databaseDesign?: string[];
  challenges?: string[];
  myContribution?: string[];
  result?: string;
  lessonsLearned?: string[];
}

export type ProjectTier = "primary" | "backend-core" | "secondary-backend" | "boilerplate";

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  type: "Web App" | "Backend API" | "Architecture Boilerplate";
  tier: ProjectTier;
  role: string;
  technologies: string[];
  description: string;
  githubUrl: string;
  liveUrl?: string;
  relatedProjectId?: string;
  caseStudy?: ProjectCaseStudyPlaceholder;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Academic" | "Project Collaboration" | "Internship";
  responsibilities: string[];
  technologies?: string[];
}

export interface EducationData {
  institution: string;
  program: string;
  period: string;
  status: string;
  location: string;
  relevantLearning: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  periodOrYear: string;
  credentialUrl?: string;
}
