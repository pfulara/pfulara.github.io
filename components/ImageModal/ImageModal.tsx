'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ImageModal({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='block w-full overflow-hidden rounded-lg ring-accent focus-visible:outline-none cursor-pointer'
        aria-label={`View larger: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={450}
          className='aspect-video w-full object-cover transition-transform hover:scale-[1.02]'
          unoptimized
        />
      </button>
      {open && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
          role='dialog'
          aria-modal='true'
          aria-label={alt}
          onClick={() => setOpen(false)}
          onKeyDown={(e) =>
            e.key === 'Escape' && setOpen(false)
          }
        >
          <button
            type='button'
            className='absolute right-4 top-4 rounded-lg bg-zinc-800 px-3 py-1 text-sm ring-accent'
            onClick={() => setOpen(false)}
            aria-label='Close'
          >
            Close
          </button>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={675}
            className='max-h-[90vh] max-w-full object-contain'
            onClick={(e) => e.stopPropagation()}
            unoptimized
          />
        </div>
      )}
    </>
  );
}
