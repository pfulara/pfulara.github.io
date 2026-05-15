import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-zinc-950 hover:bg-accent-hover font-semibold',
  secondary:
    'border border-default bg-card text-foreground hover:bg-card-hover',
  ghost: 'text-accent hover:text-accent-hover hover:bg-accent-muted',
};

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps>;

type LinkProps = SharedProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonProps): React.ReactElement;
export function Button(props: LinkProps): React.ReactElement;
export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps | LinkProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-colors ring-accent',
    variantClasses[variant],
    className,
  );

  if ('href' in props && props.href) {
    const { href, external, ...rest } = props as LinkProps;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target='_blank'
          rel='noopener noreferrer'
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonProps;
  return (
    <button type='button' className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
