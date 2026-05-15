import Link from 'next/link';
import type { Project } from '@/types/project';
import ProjectThumbnail from '@/components/ProjectThumbnail/ProjectThumbnail';
import { StackChips } from '@/components/ui/StackChips';
import { Button } from '@/components/ui/Button';

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className='group flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-default bg-card shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-xl hover:shadow-black/30'>
      <Link
        href={`/projects/${project.slug}`}
        className='block'
      >
        <ProjectThumbnail
          slug={project.slug}
          title={project.title}
          src={project.images[0]}
          className='rounded-none rounded-t-xl'
        />
      </Link>
      <div className='flex flex-1 flex-col p-5 justify-between'>
        <h3 className='mt-1 text-lg font-bold tracking-tight'>
          <Link
            href={`/projects/${project.slug}`}
            className='rounded-sm ring-accent hover:text-accent'
          >
            {project.title}
          </Link>
        </h3>
        <p className='mt-2 line-clamp-2 text-sm text-muted'>
          {project.tagline}
        </p>
        <StackChips
          items={project.stack}
          limit={4}
          className='mt-4'
        />
        <div className='mt-5'>
          <Button
            href={`/projects/${project.slug}`}
            variant='secondary'
            className='w-full'
          >
            View case study
          </Button>
        </div>
      </div>
    </article>
  );
}
