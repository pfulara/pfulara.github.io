import { Section, SkillItem } from '@/components';
import { skills } from '@/constants';

const Skills = () => {
  return (
    <Section sectionName='skills'>
      <div className='bg-gradient4 border-2 border-secondary3 rounded-7xl p-8'>
        <p className='caption'>My skills</p>
        <h2 className='h5 max-lg:text-center'>
          Technologies I've worked with
        </h2>
        <ul>
          {skills.map(({ section, items }) => (
            <li
              key={section}
              className='border-b border-secondary3 pb-4'
            >
              <h3 className='mt-8 text-primary1 text-lg'>
                {section}
              </h3>
              <ul className='mt-6 flex gap-4 flex-wrap max-lg:justify-center'>
                {items.map((item) => (
                  <SkillItem key={item.tech} skill={item} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Skills;
