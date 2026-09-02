import { CaseStudyData } from "@/types/case-study";
import {
  lapanginPlatformCaseStudy,
  lapanginApiCaseStudy,
} from "./lapangin-ecosystem";
import { ecommerceApiCaseStudy } from "./ecommerce-api";

export const allCaseStudies: CaseStudyData[] = [
  lapanginPlatformCaseStudy,
  lapanginApiCaseStudy,
  ecommerceApiCaseStudy,
];

export function getAllCaseStudies(): CaseStudyData[] {
  return allCaseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return allCaseStudies.find((cs) => cs.slug === slug);
}
