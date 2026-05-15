import Image from 'next/image';
import { cn, gradientForSlug } from '@/lib/utils';

export default function ProjectThumbnail({
  slug,
  title,
  src,
  className,
}: {
  slug: string;
  title: string;
  src?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={cn(
          'relative aspect-video w-full overflow-hidden rounded-lg',
          className,
        )}
      >
        <Image
          src={src}
          alt={title}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 100vw, 384px'
          unoptimized
        />
        <div className='absolute inset-0 bg-linear-to-t from-zinc-950/40 to-transparent' />
      </div>
    );
  }

  const gradient = gradientForSlug(slug);
  const initials = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className={cn(
        'relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-linear-to-br',
        gradient,
        className,
      )}
      aria-hidden
    >
      <span className='font-mono text-3xl font-bold text-white/20 md:text-4xl'>
        {initials}
      </span>
      <div className='absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent' />
    </div>
  );
}
