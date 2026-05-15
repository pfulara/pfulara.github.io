import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className='mt-20 md:mt-28' aria-labelledby='featured-heading'>
      <SectionHeading
        eyebrow='Work'
        title='Featured projects'
        description='Selected builds that reflect how I ship products — from personal sites to full-stack applications.'
      />
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className='mt-8 text-center md:text-left'>
        <Button href='/projects' variant='ghost'>
          View all projects →
        </Button>
      </div>
    </section>
  );
}
