'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageModal({ image }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image
        priority
        src={image}
        alt='Project screen'
        width={600}
        height={300}
        className='rounded-xl border border-slate-600 cursor-pointer'
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className='absolute top-0 left-0 w-full h-full bg-black/50 z-10 pt-8 margin-auto'
          onClick={() => setOpen(false)}
        >
          <div className='absolute top-0 left-[5%] w-[90%] h-screen flex items-center justify-center px-2'>
            <Image
              src={image}
              alt='Project screen'
              width={1200}
              height={600}
              className='w-auto h-auto max-h-[90%]'
            />
          </div>
        </div>
      )}
    </>
  );
}
