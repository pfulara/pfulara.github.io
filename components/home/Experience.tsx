import { STATS } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function Experience() {
  return (
    <section
      className='mt-20 md:mt-28'
      aria-labelledby='experience-heading'
    >
      <SectionHeading
        eyebrow='Background'
        title='Experience at a glance'
        description='A quick snapshot of my professional focus.'
      />
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {STATS.map(({ label, value }) => (
          <li
            key={label}
            className='rounded-xl border border-default bg-card px-6 py-8 text-center'
          >
            <p className='text-2xl font-bold text-accent'>
              {value}
            </p>
            <p className='mt-2 text-sm text-muted'>
              {label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
