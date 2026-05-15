import Link from 'next/link';
import { SITE } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import CopyEmailButton from '@/components/CopyEmailButton/CopyEmailButton';

export default function ContactStrip() {
  return (
    <section
      className='mt-20 rounded-2xl border border-default bg-card p-8 md:mt-28 md:p-10'
      aria-labelledby='contact-strip-heading'
    >
      <SectionHeading
        eyebrow='Get in touch'
        title="Let's work together"
        description={SITE.replyTime}
      />
      <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center'>
        <a
          href={`mailto:${SITE.email}`}
          className='text-lg font-medium text-accent ring-accent hover:underline'
        >
          {SITE.email}
        </a>
        <CopyEmailButton />
        <Button href={SITE.github} variant='secondary' external>
          GitHub
        </Button>
        <Button href='/contact' variant='ghost'>
          Contact page
        </Button>
      </div>
    </section>
  );
}
