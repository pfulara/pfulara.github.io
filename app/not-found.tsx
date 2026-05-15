import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className='py-16 text-center'>
      <p className='font-mono text-sm uppercase tracking-widest text-accent'>404</p>
      <h1 className='mt-4 text-3xl font-bold'>Page not found</h1>
      <p className='mt-3 text-muted'>
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <div className='mt-8 flex justify-center gap-3'>
        <Button href='/'>Go home</Button>
        <Button href='/projects' variant='secondary'>
          View projects
        </Button>
      </div>
    </div>
  );
}
