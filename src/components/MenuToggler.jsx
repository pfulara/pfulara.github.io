import React from 'react';

export default function MenuToggler({ open, setOpen }) {
  return (
    <div
      className='w-16 h-16 flex justify-center cursor-pointer'
      onClick={() => setOpen(!open)}
    >
      <div
        className={`absolute bg-white w-8 h-0.5 transition-all ${
          open ? 'rotate-45 top-5' : 'top-3'
        }`}
      />
      <div
        className={`absolute top-5 bg-white w-8 h-0.5 transition-all ${
          open ? '-rotate-45' : ''
        }`}
      />
      <div
        className={`absolute top-7 bg-white w-8 h-0.5 transition-all ${
          open ? 'opacity-0' : ''
        }`}
      />
    </div>
  );
}
