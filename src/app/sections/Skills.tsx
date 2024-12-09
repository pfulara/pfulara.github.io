import { Section, SkillItem } from '@/components';
import { skills } from '@/contants';

export const Skills = () => {
  return (
    <Section name='skills'>
      <div className='bg-gradient4 rounded-7xl'>
        <p className='font-bold text-md uppercase text-active'>
          My skills
        </p>
        <h2 className='font-bold text-2xl uppercase max-lg:text-center'>
          Technologies I've worked with
        </h2>
        <ul>
          {skills.map(({ section, items }) => (
            <li key={section} className='border-b pb-4'>
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
