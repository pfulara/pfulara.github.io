export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

const GRADIENTS = [
  'from-emerald-600/40 via-teal-700/30 to-zinc-900',
  'from-violet-600/40 via-indigo-700/30 to-zinc-900',
  'from-amber-600/40 via-orange-700/30 to-zinc-900',
  'from-cyan-600/40 via-blue-700/30 to-zinc-900',
];

export function gradientForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  return GRADIENTS[Math.abs(hash) % GRADIENTS.length];
}
