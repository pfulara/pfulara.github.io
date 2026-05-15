'use client';

import { useMemo, useState } from 'react';
import type { Project } from '@/types/project';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { cn } from '@/lib/utils';

export default function ProjectsGrid({
  projects,
  stackTags,
}: {
  projects: Project[];
  stackTags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((p) => p.stack.includes(activeTag));
  }, [projects, activeTag]);

  return (
    <>
      {stackTags.length > 0 && (
        <div className='mb-8 flex flex-wrap gap-2' role='group' aria-label='Filter by technology'>
          <FilterChip
            label='All'
            active={activeTag === null}
            onClick={() => setActiveTag(null)}
          />
          {stackTags.map((tag) => (
            <FilterChip
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            />
          ))}
        </div>
      )}
      {filtered.length === 0 ? (
        <p className='text-muted'>No projects match this filter.</p>
      ) : (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'rounded-full border px-3 py-1 font-mono text-xs transition-colors ring-accent',
        active
          ? 'border-accent bg-accent-muted text-accent'
          : 'border-default text-muted hover:border-accent/40 hover:text-foreground',
      )}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
