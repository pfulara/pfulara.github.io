'use client';
import React, { useState } from 'react';
import MenuToggler from './MenuToggler';
import CircleMenu from './CircleMenu';

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className='fixed -bottom-4 w-full flex justify-center'>
      <CircleMenu open={open} setOpen={setOpen} />
      <MenuToggler open={open} setOpen={setOpen} />
    </footer>
  );
}
