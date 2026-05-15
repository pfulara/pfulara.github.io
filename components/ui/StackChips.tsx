import { cn } from '@/lib/utils';

export function StackChips({
  items,
  limit,
  className,
}: {
  items: string[];
  limit?: number;
  className?: string;
}) {
  const visible = limit ? items.slice(0, limit) : items;
  const remaining = limit && items.length > limit ? items.length - limit : 0;

  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {visible.map((item) => (
        <li
          key={item}
          className='rounded-full border border-default bg-accent-muted px-2.5 py-0.5 font-mono text-xs text-accent'
        >
          {item}
        </li>
      ))}
      {remaining > 0 && (
        <li className='rounded-full border border-default px-2.5 py-0.5 font-mono text-xs text-muted'>
          +{remaining} more
        </li>
      )}
    </ul>
  );
}
