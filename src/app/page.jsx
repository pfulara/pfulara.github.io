import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Image
        priority
        src='https://firebasestorage.googleapis.com/v0/b/portfolio-44cf3.appspot.com/o/biznesowa-small.jpg?alt=media&token=85bd7bbb-bb5a-4bab-a9e0-715baeeda4eb'
        alt='Paweł Fulara'
        width={300}
        height={300}
        className='rounded-full border-2 border-slate-100 mb-8 mx-auto shadow-lg shadow-slate-800'
      />
      <h2 className='font-bold text-2xl mb-4'>
        Hello there!
      </h2>
      <p>
        You're here propably because You're looking for
        React developer.
      </p>
      <p>I'm Paweł and I am what You're looking for.</p>
      <p>
        Take a look at my{' '}
        <a
          href='https://github.com/pfulara'
          target='_blank'
          rel='noopener noreferrer'
        >
          <b>Github</b>{' '}
        </a>
        or{' '}
        <Link href='/projects'>
          <b>Projects Page</b>
        </Link>
      </p>
    </div>
  );
}
