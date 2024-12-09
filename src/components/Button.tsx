import Image from 'next/image';

export const Button = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: string;
}) => {
  return (
    <div className='relative bg-background px-2 rounded-2xl min-h-[60px] pr-4 font-bold text-text uppercase border-2 border-transparent inline-flex cursor-pointer hover:border-primary transition-all duration-300 shadow-xl shadow-primary/20'>
      <span className='relative z-10 flex items-center'>
        {icon && (
          <Image
            src={icon}
            alt='Icon'
            className='size-10 mr-5 z-10 object-contain'
            width={24}
            height={24}
          />
        )}
        {children}
      </span>
    </div>
  );
};
