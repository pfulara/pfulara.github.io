import Loading from '@/app/loading';
import React, { Suspense } from 'react';
import SingleProjectPage from './SingleProjectPage';

export default function SingleProject({ params }) {
  const { id } = params;
  return (
    <Suspense fallback={<Loading />}>
      <SingleProjectPage id={id} />
    </Suspense>
  );
}
