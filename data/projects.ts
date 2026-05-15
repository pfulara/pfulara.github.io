import type { Project } from '@/types/project';

const projects: Project[] = [
  {
    slug: 'mercurjs',
    title: 'Mercurjs',
    demoLink: 'https://www.mercurjs.com/',
    githubLink: 'https://github.com/mercurjs',
    tagline:
      'Open-source marketplace platform for multi-vendor commerce.',
    description:
      'Mercur is a marketplace product built on modern web tooling. I contributed to the frontend: product and vendor flows, reusable UI, and forms wired to a typed API layer so teams can ship marketplace features without rebuilding core screens from scratch.',
    role: 'Frontend development',
    highlights: [
      'Built marketplace UI flows in Next.js and TypeScript',
      'Integrated forms and validation against Express APIs backed by PostgreSQL',
      'Shipped accessible, reusable components with Shadcn UI and Tailwind CSS',
    ],
    stack: [
      'React',
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'Shadcn UI',
      'Express',
      'PostgreSQL',
      'React Hook Form',
      'TypeScript',
      'Zod',
      'Stripe Payments',
    ],
    images: [
      '/images/mercurjs/image01.avif',
      '/images/mercurjs/image02.avif',
      '/images/mercurjs/image03.avif',
      '/images/mercurjs/image04.avif',
    ],
    featured: true,
  },
  {
    slug: 'seodity',
    title: 'Seodity',
    demoLink: 'https://seodity.com',
    tagline:
      'SEO toolkit for auditing, tracking, and improving search visibility.',
    description:
      'Seodity is a SaaS product that helps teams work on SEO in one place—from analysis to ongoing optimization. On the frontend I focused on clear dashboards, data-heavy views, and a consistent component system so complex SEO workflows stay easy to scan and use.',
    role: 'Frontend development',
    highlights: [
      'Developed dashboard and workflow screens in React and TypeScript',
      'Structured UI with Shadcn UI for consistent patterns across the app',
      'Handled client-side validation and forms with React Hook Form and Zod',
    ],
    stack: [
      'React',
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'Shadcn UI',
      'Express',
      'PostgreSQL',
      'React Hook Form',
      'TypeScript',
      'Zod',
      'Stripe Payments',
    ],
    images: [
      '/images/seodity/seodity-1.webp',
      '/images/seodity/seodity-2.webp',
      '/images/seodity/seodity-3.webp',
      '/images/seodity/seodity-4.webp',
    ],
    featured: true,
  },
  {
    slug: 'imaginator',
    title: 'Imaginator',
    tagline:
      'AI image generator and editor for photo restoration and touch-ups.',
    description:
      'Imaginator lets users enhance photos with AI—restore pixelated images, remove unwanted objects, and adjust colors on selected areas. I built the full stack: authenticated accounts, paid plans via Stripe, and a guided editing flow backed by MongoDB for user and usage data.',
    role: 'Full-stack development',
    highlights: [
      'End-to-end Next.js app with TypeScript, React Hook Form, and Zod validation',
      'Subscription and payment flows integrated with Stripe',
      'Auth and user management with Clerk; UI built with Shadcn UI and Tailwind CSS',
    ],
    stack: [
      'React',
      'Next.js',
      'MongoDB',
      'Clerk',
      'Shadcn UI',
      'Tailwind CSS',
      'TypeScript',
      'React Hook Form',
      'Zod',
      'Stripe Payments',
    ],
    images: [
      '/images/imaginator/imaginator-1.jpg',
      '/images/imaginator/imaginator-2.jpg',
      '/images/imaginator/imaginator-3.jpg',
    ],
    featured: false,
  },
  {
    slug: 'landsbergon',
    title: 'Landsbergon',
    demoLink: 'https://landsbergon.pl',
    tagline:
      'Publisher site for fantasy comics rooted in Gorzów and historic Landsberg.',
    description:
      'Landsbergon is the online home for a local comic imprint—showcasing series, authors, and news for readers. The site pairs a fast Next.js frontend with WordPress as the CMS so editors can update content without touching application code.',
    role: 'Full-stack development',
    highlights: [
      'Marketing and catalog pages in Next.js with TypeScript',
      'Content managed in WordPress and rendered through the frontend',
      'Responsive layout and styling with SCSS',
    ],
    stack: ['React', 'Next.js', 'Wordpress'],
    images: ['/images/landsbergon/image-01.png'],
    featured: false,
  },
  {
    slug: 'carro',
    title: 'Carro',
    demoLink: 'https://carro.pl',
    tagline:
      'Website for a professional car chip-tuning and performance workshop.',
    description:
      'Carro promotes an automotive tuning business—services, results, and contact paths for customers booking chip tuning and related work. WordPress handles editable content; Next.js delivers a quick, mobile-friendly front end tailored to a local workshop brand.',
    role: 'Full-stack development',
    highlights: [
      'Service-focused pages and galleries built in Next.js with TypeScript',
      'WordPress CMS for easy updates to offers, copy, and media',
      'Tailwind CSS for a consistent, responsive layout across devices',
    ],
    stack: [
      'React',
      'Next.js',
      'Wordpress',
      'Tailwind CSS',
    ],
    images: [
      '/images/carro/image-01.png',
      '/images/carro/image-02.png',
      '/images/carro/image-03.png',
    ],
    featured: false,
  },
];

export default projects;

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllStackTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) =>
    p.stack.forEach((s) => tags.add(s)),
  );
  return Array.from(tags).sort();
}
