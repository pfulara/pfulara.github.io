import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Oops...</h2>
      <p className='mb-4'>
        It looks like this page doesn't exist
      </p>
      <p className='font-bold'>
        <Link href='/'>Get back to Homepage</Link>
      </p>
    </div>
  );
}
