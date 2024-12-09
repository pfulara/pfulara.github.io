import { useState } from 'react';
import { Button } from 'react-scroll';

export const NavLink = ({
  title,
  setIsOpen,
}: {
  title: string;
  setIsOpen: (state: boolean) => void;
}) => (
  <Button
    to={title}
    offset={-100}
    onClick={() => setIsOpen(false)}
    spy
    smooth
    activeClass='text-active'
    className='font-bold text-p4 uppercase transition-colors duration-200 cursor-pointer hover:text-primary1 max-lg:my-4 max-lg:h5'
  >
    {title}
  </Button>
);
