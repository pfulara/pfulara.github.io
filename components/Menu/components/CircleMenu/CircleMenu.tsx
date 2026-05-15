'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaLaptopCode,
  FaRegEnvelope,
} from 'react-icons/fa';
import { cn } from '@/lib/utils';
import type { MenuProps } from '@/types/menu';

const ITEMS = [
  {
    href: '/projects',
    label: 'Projects',
    icon: FaLaptopCode,
    position: 'left-[15%] top-[25%]',
    labelOffset: '-left-[14px]',
  },
  {
    href: '/',
    label: 'Home',
    icon: FaHome,
    position: 'left-[45%] top-[6%]',
    labelOffset: '-left-[4px]',
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: FaRegEnvelope,
    position: 'left-[75%] top-[25%]',
    labelOffset: '-left-[10px]',
  },
] as const;

export default function CircleMenu({
  open,
  setOpen,
}: MenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'fixed h-44 w-44 rounded-full border border-default bg-background transition-all',
        '-bottom-[100px]',
        open ? 'scale-150' : 'scale-0',
      )}
      aria-hidden={!open}
    >
      {ITEMS.map(
        ({
          href,
          label,
          icon: Icon,
          position,
          labelOffset,
        }) => {
          const active =
            href === '/'
              ? pathname === '/'
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              <div
                className={cn(
                  'absolute text-foreground transition-colors',
                  position,
                  active && 'text-accent',
                )}
              >
                <Icon className='text-lg' aria-hidden />
                <span
                  className={cn(
                    'absolute text-[8px] uppercase',
                    labelOffset,
                  )}
                >
                  {label}
                </span>
              </div>
            </Link>
          );
        },
      )}
    </div>
  );
}
