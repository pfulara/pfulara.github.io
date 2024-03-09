'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageModal({ image }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image
        src={image}
        alt='Project screen'
        width={600}
        height={300}
        className='rounded-xl border border-slate-600 cursor-pointer'
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className='absolute top-0 left-0 w-full h-full bg-black/50 z-10 pt-8'
          onClick={() => setOpen(false)}
        >
          <div className='absolute top-0 left-0 w-full h-screen flex items-center justify-center'>
            <Image
              src={image}
              alt='Project screen'
              width={1200}
              height={600}
            />
          </div>
        </div>
      )}
    </>
  );
}
