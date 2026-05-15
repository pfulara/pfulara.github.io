import { CAPABILITIES } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function Capabilities() {
  return (
    <section className='mt-20 md:mt-28' aria-labelledby='capabilities-heading'>
      <SectionHeading
        eyebrow='Expertise'
        title='What I do'
        description='Areas where I add the most value across product teams and delivery.'
      />
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {CAPABILITIES.map(({ title, description }) => (
          <li
            key={title}
            className='rounded-xl border border-default bg-card p-5 transition-colors hover:border-accent/30 hover:bg-card-hover'
          >
            <h3 className='font-semibold text-foreground'>{title}</h3>
            <p className='mt-2 text-sm leading-relaxed text-muted'>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
