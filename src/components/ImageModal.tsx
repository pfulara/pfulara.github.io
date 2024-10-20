'use client';

import { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

export const ImageModal = ({
  image,
}: {
  image: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        priority
        src={image}
        alt={image}
        width={640}
        height={640}
        className='mb-8 transition-all duration-300 cursor-pointer w-full h-auto hover:scale-105'
        onClick={() => setOpen(true)}
      />

      <div
        className={cx(
          'fixed top-0 left-0 w-full h-full z-100 bg-secondary1/90 transition-all duration-200',
          {
            [' opacity-1']: open,
            [' opacity-0 pointer-events-none']: !open,
          }
        )}
        onClick={() => setOpen(false)}
      >
        <div className='px-32 py-16 h-full'>
          <Image
            priority
            src={image}
            alt={image}
            width={640}
            height={640}
            className='w-auto h-full mx-auto'
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};
