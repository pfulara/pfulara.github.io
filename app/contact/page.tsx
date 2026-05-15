import { Metadata } from 'next';
import { SITE } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CopyEmailButton } from '@/components';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${SITE.name} — ${SITE.replyTime}`,
};

export default function ContactPage() {
  return (
    <div className='mx-auto max-w-lg'>
      <SectionHeading
        eyebrow='Contact'
        title='Get in touch'
        description={SITE.replyTime}
      />
      <div className='rounded-2xl border border-default bg-card p-8 shadow-lg shadow-black/20'>
        <h2 className='text-lg font-semibold'>Email</h2>
        <a
          href={`mailto:${SITE.email}`}
          className='mt-2 block text-lg text-accent ring-accent hover:underline'
        >
          {SITE.email}
        </a>
        <div className='mt-6 flex flex-wrap gap-3'>
          <CopyEmailButton />
          <Button
            href={SITE.github}
            variant='secondary'
            external
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
