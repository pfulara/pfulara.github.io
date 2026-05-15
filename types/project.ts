export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  highlights: string[];
  githubLink?: string;
  ghpLink?: string;
  csbLink?: string;
  demoLink?: string;
  stack: string[];
  images: string[];
  featured?: boolean;
};
