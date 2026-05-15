import Image from 'next/image';
import Link from 'next/link';
import headshot from '@/assets/pfulara.jpeg';
import { SITE, TECH_PILLS } from '@/data/site';
import { Button } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className='animate-fade-in-up flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12'>
      <div className='shrink-0'>
        <Image
          priority
          src={headshot}
          alt='Paweł Fulara'
          width={headshot.width}
          height={headshot.height}
          sizes='(max-width: 768px) 200px, 280px'
          className='aspect-square w-[200px] rounded-full border-2 border-accent/30 object-cover shadow-xl shadow-black/40 ring-4 ring-accent-muted md:w-[280px]'
        />
      </div>
      <div className='w-full max-w-2xl text-center md:text-left'>
        <p className='animate-fade-in-up-delay-1 font-mono text-sm uppercase tracking-widest text-accent'>
          Fullstack Developer
        </p>
        <h1 className='animate-fade-in-up-delay-1 mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl'>
          {SITE.tagline}
        </h1>
        <p className='animate-fade-in-up-delay-2 mt-5 text-base leading-relaxed text-muted md:text-lg'>
          I&apos;m a fullstack developer with{' '}
          <strong className='text-foreground'>
            7 years
          </strong>{' '}
          of experience building{' '}
          <strong className='text-foreground'>SaaS</strong>,{' '}
          <strong className='text-foreground'>
            e-commerce
          </strong>
          , and internal web applications. Specialized in
          <strong className='text-foreground'>
            {' '}
            React
          </strong>
          ,{' '}
          <strong className='text-foreground'>
            Next.js
          </strong>
          ,{' '}
          <strong className='text-foreground'>
            React Native
          </strong>
          , and{' '}
          <strong className='text-foreground'>
            TypeScript
          </strong>{' '}
          — from product development and design systems to
          migrations and pre-sales demos.
        </p>
        <ul className='animate-fade-in-up-delay-2 mt-6 flex flex-wrap justify-center gap-2 md:justify-start'>
          {TECH_PILLS.map((tech) => (
            <li
              key={tech}
              className='rounded-full border border-default bg-accent-muted px-3 py-1 font-mono text-xs text-accent'
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className='animate-fade-in-up-delay-3 mt-8 flex flex-wrap justify-center gap-3 md:justify-start'>
          <Button href='/projects'>View projects</Button>
          <Button
            href={SITE.github}
            variant='secondary'
            external
          >
            GitHub
          </Button>
          <Button href='/contact' variant='ghost'>
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
