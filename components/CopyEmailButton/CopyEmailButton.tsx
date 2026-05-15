'use client';

import { useState } from 'react';
import { SITE } from '@/data/site';
import { cn } from '@/lib/utils';

export default function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  }

  return (
    <button
      type='button'
      onClick={handleCopy}
      className={cn(
        'rounded-lg border border-default bg-card px-4 py-2 text-sm font-medium transition-colors ring-accent hover:bg-card-hover',
        className,
      )}
      aria-live='polite'
    >
      {copied ? 'Copied!' : 'Copy email'}
    </button>
  );
}
