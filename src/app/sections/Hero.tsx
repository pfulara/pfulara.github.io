import Image from 'next/image';
import {
  Section,
  Button,
  ScrollButton,
} from '@/components/';
import { socials } from '@/constants';
import Link from 'next/link';

const Hero = () => {
  return (
    <Section sectionName='hero'>
      <div className='flex max-lg:flex-col w-full gap-4 pt-24'>
        <div className='lg:w-1/2 max-lg:order-2'>
          <h1 className='h2 max-lg:text-[48px] uppercase text-primary4 max-w-[360px]'>
            Hello there!
          </h1>
          <p className='max-w-440 mb-14 body-1 max-lg:mb-10 mt-6 max-lg:!leading-6'>
            You're here propably because You're looking for
            React developer. I'm Paweł and I am what You're
            looking for.
          </p>
          <ScrollButton target='projects'>
            <Button icon='/assets/icons/zap.svg'>
              Check my projects!
            </Button>
          </ScrollButton>
          <ul className='flex flex-1 gap-3 mt-12'>
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <Link
                  href={url}
                  className='social-icon'
                  target='_blank'
                >
                  <Image
                    src={icon}
                    alt={title}
                    className='size-10 object-contain'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-center lg:justify-end lg:w-1/2 max-lg:mb-12'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-44cf3.appspot.com/o/biznesowa-small.jpg?alt=media&token=85bd7bbb-bb5a-4bab-a9e0-715baeeda4eb'
            alt='Clock'
            width={300}
            height={300}
            className='lg:w-[400px] lg:h-[400px] rounded-full border-2'
            priority
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
