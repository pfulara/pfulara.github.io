export const SITE = {
  name: 'Paweł Fulara',
  title: "Paweł Fulara's Portfolio",
  email: 'fulara.pawel@gmail.com',
  github: 'https://github.com/pfulara',
  tagline: 'Building SaaS & product UIs with React & Next.js',
  replyTime: 'Usually reply within 48 hours',
} as const;

export const STATS = [
  { label: 'Years experience', value: '7+' },
  { label: 'Focus', value: 'SaaS & E-commerce' },
  { label: 'Stack', value: 'React · Next.js · TS' },
] as const;

export const CAPABILITIES = [
  {
    title: 'Product development',
    description:
      'End-to-end feature delivery from discovery through production, with maintainable architecture.',
  },
  {
    title: 'Design systems',
    description:
      'Reusable component libraries, tokens, and documentation that scale across teams.',
  },
  {
    title: 'Migrations & modernization',
    description:
      'Incremental upgrades from legacy stacks to React, Next.js, and TypeScript.',
  },
  {
    title: 'Pre-sales demos',
    description:
      'Polished prototypes and demos that communicate product value to stakeholders.',
  },
  {
    title: 'React Native',
    description:
      'Cross-platform mobile experiences sharing logic with web codebases.',
  },
  {
    title: 'E-commerce',
    description:
      'High-traffic storefronts, checkout flows, and integrations with commerce APIs.',
  },
] as const;

export const TECH_PILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'React Native',
  'Node.js',
  'Tailwind CSS',
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const;
