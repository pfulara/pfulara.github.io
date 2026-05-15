'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE } from '@/data/site';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-40 hidden border-b border-default bg-background/80 backdrop-blur-md md:block'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-8 lg:px-16'>
        <Link
          href='/'
          className='rounded-sm text-lg font-bold tracking-tight ring-accent'
        >
          {SITE.name}
        </Link>
        <nav aria-label='Main navigation'>
          <ul className='flex items-center gap-1'>
            {NAV_LINKS.map(({ href, label }) => {
              const active =
                href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'rounded-lg px-4 py-2 text-sm font-medium transition-colors ring-accent',
                      active
                        ? 'bg-accent-muted text-accent'
                        : 'text-muted hover:bg-card hover:text-foreground',
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
