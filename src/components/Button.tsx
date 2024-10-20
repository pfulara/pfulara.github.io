'use client';
import Image from 'next/image';
import Marker from './Marker';

export const Button = ({
  children,
  icon,
  onClick = () => null,
}: {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className='relative bg-gradient p-0.5 group rounded-2xl shadow-500 min-h-[60px] pr-4 font-bold text-primary1 uppercase border-2 border-secondary3 inline-flex cursor-pointer'
    >
      <span className='relative z-2 flex items-center -ml-1'>
        <Marker />
        {icon && (
          <Image
            src={icon}
            alt='Icon'
            className='size-10 mr-5 z-10 object-contain'
            width={24}
            height={24}
          />
        )}
        <span>{children}</span>
      </span>
      <span className='absolute bg-gradient4 group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full top-0 left-0 rounded-2xl' />
      <span className='glow-before' />
      <span className='glow-after' />
    </div>
  );
};
