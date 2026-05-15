import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaCode, FaGithub } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import projects, {
  getProjectBySlug,
} from '@/data/projects';
import { StackChips } from '@/components/ui/StackChips';
import ProjectThumbnail from '@/components/ProjectThumbnail/ProjectThumbnail';
import { ImageModal } from '@/components';
import { Button } from '@/components/ui/Button';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectDetails({
  params,
}: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const links = [
    {
      href: project.githubLink,
      label: 'View on GitHub',
      icon: FaGithub,
    },
    {
      href: project.ghpLink,
      label: 'Live demo (GitHub Pages)',
      icon: GoBrowser,
    },
    {
      href: project.csbLink,
      label: 'View on CodeSandbox',
      icon: FaCode,
    },
    {
      href: project.demoLink,
      label: 'Live demo',
      icon: GoBrowser,
    },
  ].filter((l) => l.href);

  return (
    <article>
      <Link
        href='/projects'
        className='mb-6 inline-block text-sm text-muted ring-accent hover:text-accent'
      >
        ← Back to projects
      </Link>

      <ProjectThumbnail
        slug={project.slug}
        title={project.title}
        src={project.images[0]}
        className='mb-8'
      />

      <header className='mb-8'>
        <p className='font-mono text-sm text-muted-foreground'>
          {project.role}
        </p>
        <h1 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl'>
          {project.title}
        </h1>
        <p className='mt-3 text-lg text-muted'>
          {project.tagline}
        </p>
        <StackChips
          items={project.stack}
          className='mt-5'
        />
      </header>

      <div className='grid gap-10 lg:grid-cols-[1fr_minmax(0,280px)]'>
        <div className='space-y-10'>
          <section>
            <h2 className='mb-3 text-xl font-semibold'>
              Overview
            </h2>
            <p className='leading-relaxed text-muted'>
              {project.description}
            </p>
          </section>

          {project.highlights.length > 0 && (
            <section>
              <h2 className='mb-3 text-xl font-semibold'>
                Highlights
              </h2>
              <ul className='list-inside list-disc space-y-2 text-muted'>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {project.images.length > 0 && (
            <section>
              <h2 className='mb-4 text-xl font-semibold'>
                Screenshots
              </h2>
              <div className='grid gap-4 sm:grid-cols-2'>
                {project.images.map((src, i) => (
                  <ImageModal
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className='h-fit rounded-xl border border-default bg-card p-6 lg:sticky lg:top-24'>
          <h2 className='mb-4 font-semibold'>Links</h2>
          {links.length > 0 ? (
            <ul className='space-y-3'>
              {links.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 text-accent ring-accent hover:underline'
                    aria-label={label}
                  >
                    <Icon className='text-xl' aria-hidden />
                    <span className='text-sm'>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-sm text-muted'>
              No public links yet.
            </p>
          )}
          <div className='mt-6'>
            <Button
              href='/projects'
              variant='secondary'
              className='w-full'
            >
              All projects
            </Button>
          </div>
        </aside>
      </div>
    </article>
  );
}
