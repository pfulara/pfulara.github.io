export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className='mb-8 md:mb-10'>
      {eyebrow && (
        <p className='mb-2 font-mono text-sm uppercase tracking-widest text-accent'>
          {eyebrow}
        </p>
      )}
      <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>{title}</h2>
      {description && (
        <p className='mt-3 max-w-2xl text-base text-muted md:text-lg'>
          {description}
        </p>
      )}
    </header>
  );
}
