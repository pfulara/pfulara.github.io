import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-auto border-t border-default'>
      <div className='mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16'>
        <div>
          <p className='font-semibold'>{SITE.name}</p>
          <p className='mt-1 text-sm text-muted'>
            Fullstack developer · React & Next.js
          </p>
          <p className='mt-3 text-xs text-muted-foreground'>
            © {year} {SITE.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
        <nav aria-label='Footer navigation'>
          <ul className='flex flex-wrap gap-4 text-sm'>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className='rounded-sm text-muted ring-accent transition-colors hover:text-accent'
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SITE.github}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-sm text-muted ring-accent transition-colors hover:text-accent'
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
