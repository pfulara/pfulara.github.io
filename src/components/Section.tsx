'use client';
import { Element } from 'react-scroll';

export const Section = ({
  sectionName = '',
  children,
}: {
  sectionName: string;
  children: React.ReactNode;
}) => {
  return (
    <section className='relative w-full'>
      <Element name={sectionName}>
        <div className='container mt-32 z-2'>
          {children}
        </div>
      </Element>
    </section>
  );
};
