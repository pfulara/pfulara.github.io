'use client';
import { Button } from 'react-scroll';

export const ScrollButton = ({
  target,
  children,
}: {
  target: string;
  children: React.ReactNode;
}) => {
  return (
    <Button to={target} offset={-100} spy smooth>
      {children}
    </Button>
  );
};
