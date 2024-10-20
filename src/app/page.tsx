import {
  Hero,
  Projects,
  Contact,
  Skills,
} from '@/app/sections';

export default function Home() {
  return (
    <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start min-h-screen overflow-hidden'>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
