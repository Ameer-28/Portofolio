export interface ContributionArea {
  id: string;
  title: string;
  description: string;
  points: string[];
  technologies: string[];
}

export interface CareerFocusItem {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export interface GrowthAreaItem {
  id: string;
  title: string;
  description: string;
}

export interface CareerValueData {
  contributions: ContributionArea[];
  careerFocus: CareerFocusItem[];
  growthAreas: GrowthAreaItem[];
  internshipStatement: {
    message: string;
    actionLabel: string;
    actionHref: string;
  };
}
