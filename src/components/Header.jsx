import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='absolute top-0 left-0 m-4'>
      <Link href='/'>
        <h1>Paweł Fulara's Portfolio</h1>
      </Link>
    </header>
  );
}
