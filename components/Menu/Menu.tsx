'use client';

import { useState } from 'react';
import CircleMenu from './components/CircleMenu/CircleMenu';
import MenuToggler from './components/MenuToggler/MenuToggler';

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className='fixed -bottom-4 left-0 right-0 z-50 flex w-full justify-center pb-[env(safe-area-inset-bottom)] md:hidden'
      aria-label='Mobile navigation'
    >
      <CircleMenu open={open} setOpen={setOpen} />
      <MenuToggler open={open} setOpen={setOpen} />
    </nav>
  );
}
