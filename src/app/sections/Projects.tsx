import { ProjectCard, Section } from '@/components';
import { projects } from '@/contants';

export const Projects = () => {
  return (
    <Section name='projects'>
      <div className='max-w-960 pricing-head_before relative mx-auto pb-20'>
        <h3 className='text-2xl uppercase font-bold mx-auto text-center max-w-sm'>
          Sample of my projects
        </h3>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
};
