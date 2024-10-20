import { ProjectCard, Section } from '@/components';
import { projects } from '@/constants';

const Pricing = () => {
  return (
    <Section sectionName='projects'>
      <div className='max-w-960 pricing-head_before relative mx-auto bg-secondary1/50 pb-20'>
        <h3 className='h5 z-3 relative mx-auto text-center max-w-sm'>
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

export default Pricing;
