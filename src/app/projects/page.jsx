import { Suspense } from 'react';
import ProjectsPage from './ProjectsPage';
import Loading from '../loading';

export const metadata = {
  title: 'Projects',
};

export default async function Projects() {
  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>
        My projects
      </h2>
      <Suspense fallback={<Loading />}>
        <ProjectsPage />
      </Suspense>
    </div>
  );
}
