'use client';

import { Button } from 'react-scroll';

export const ScrollButton = ({
  children,
  target,
}: {
  children: React.ReactNode;
  target: string;
}) => {
  return (
    <Button to={target} offset={0} spy smooth>
      <div className='relative bg-background group rounded-xl shadow-xl shadow-primary/20 hover:bg-transparent transition-all duration-300'>
        <div className='relative z-10 p-4 text-text rounded-xl font-bold uppercase text-sm cursor-pointer border-2 border-transparent hover:border-primary transition-all duration-300'>
          {children}
        </div>
      </div>
    </Button>
  );
};
