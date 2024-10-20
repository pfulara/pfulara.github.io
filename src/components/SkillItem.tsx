import Image from 'next/image';

export const SkillItem = ({
  skill: { icon, tech },
}: {
  skill: {
    tech: string;
    icon: string;
  };
}) => {
  return (
    <li className='w-28 text-center'>
      <div className='flex items-center justify-center mx-auto mb-3 border-2 border-secondary2 rounded-full hover:border-secondary4 transition-all duration-300 shadow-500 size-20'>
        <Image
          src={icon}
          alt={tech}
          width={24}
          height={24}
          className='w-6 h-6'
        />
      </div>
      <h4 className='uppercase text-sm font-semibold'>
        {tech}
      </h4>
    </li>
  );
};
