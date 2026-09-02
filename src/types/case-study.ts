export interface ArchitectureLayer {
  name: string;
  description: string;
  tech: string;
}

export interface DatabaseEntity {
  name: string;
  purpose: string;
  keyFields: string[];
}

export interface BackendFeature {
  title: string;
  description: string;
  highlights: string[];
}

export interface EngineeringDecision {
  topic: string;
  decision: string;
  rationale: string;
}

export interface CaseStudyData {
  slug: string;
  projectName: string;
  projectType: string;
  tagline: string;
  role: string;
  technologies: string[];
  liveUrl?: string;
  liveApiUrl?: string;
  githubUrl: string;
  relatedCaseStudy?: {
    slug: string;
    name: string;
    type: string;
  };
  overview: string[];
  systemContext: string;
  architectureLayers: ArchitectureLayer[];
  backendImplementation: BackendFeature[];
  databaseDesign: {
    overview: string;
    entities: DatabaseEntity[];
  };
  keyDecisions: EngineeringDecision[];
  takeaways: string[];
}
