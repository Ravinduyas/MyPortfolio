export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'database';
  level: number; // percentage (0 - 100)
  experience: string;
  description: string;
  highlightProjects: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'systems' | 'web' | 'tools' | 'all';
  image: string;
  clientOrContext: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
  technologies: string[];
}
