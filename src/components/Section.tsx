'use client';
import { Element } from 'react-scroll';

export const Section = ({
  name = '',
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <section className='min-h-screen py-28 lg:py-40 px-4 lg:px-20 flex items-center'>
      <Element name={name}>{children}</Element>
    </section>
  );
};
