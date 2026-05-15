import projects, { getAllStackTags } from '@/data/projects';
import { ProjectsGrid } from '@/components';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Case studies and selected work — React, Next.js, and full-stack applications.',
};

export default function ProjectsPage() {
  const stackTags = getAllStackTags();

  return (
    <div>
      <SectionHeading
        eyebrow='Portfolio'
        title='My projects'
        description='Explore case studies with stack details, highlights, and links to source code.'
      />
      <ProjectsGrid projects={projects} stackTags={stackTags} />
    </div>
  );
}
