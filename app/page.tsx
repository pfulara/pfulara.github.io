import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Capabilities from '@/components/home/Capabilities';
import Experience from '@/components/home/Experience';
import ContactStrip from '@/components/home/ContactStrip';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: `Home | ${SITE.title}`,
  description: SITE.tagline,
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Capabilities />
      <Experience />
      <ContactStrip />
    </>
  );
}
