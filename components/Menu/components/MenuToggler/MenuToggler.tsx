'use client';

import type { MenuProps } from '@/types/menu';
import { cn } from '@/lib/utils';

export default function MenuToggler({
  open,
  setOpen,
}: MenuProps) {
  return (
    <button
      type='button'
      className={cn(
        'relative z-50 flex h-24 w-24 cursor-pointer items-center justify-center bg-background rounded-full -bottom-[32px] ',
        open ? 'border-none' : 'border border-default',
      )}
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <div className='relative flex h-8 w-8 -top-6'>
        <span
          className={cn(
            'absolute h-0.5 w-8 bg-foreground transition-all',
            open ? 'top-5 rotate-45' : 'top-3',
          )}
        />
        <span
          className={cn(
            'absolute top-5 h-0.5 w-8 bg-foreground transition-all',
            open && '-rotate-45',
          )}
        />
        <span
          className={cn(
            'absolute top-7 h-0.5 w-8 bg-foreground transition-all',
            open && 'opacity-0',
          )}
        />
      </div>
    </button>
  );
}
