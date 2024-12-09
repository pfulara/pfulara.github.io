import { Button, Section } from '@/components';
import Link from 'next/link';

export const Contact = () => {
  return (
    <Section name='contact'>
      <div className='relative'>
        <p className='font-bold text-md uppercase text-active mb-5 max-md:mb-2.5'>
          Contact
        </p>
        <h3 className='font-bold text-2xl uppercase max-lg:text-center mb-16'>
          Intrested?
        </h3>
        <p className='font-bold text-lg mb-24'>
          You can hit me up by:
        </p>
        <div className='pb-32'>
          <Link
            href='mailto:fulara.pawel@gmail.com'
            className='block'
          >
            <Button icon='/assets/icons/zap.svg'>
              fulara.pawel@gmail.com
            </Button>
          </Link>
          <Link
            href='https://www.linkedin.com/in/pawel-fulara-35aa0b182/'
            target='_blank'
            className='block mt-8'
          >
            <Button icon='/assets/icons/linkedin.svg'>
              Linkedin
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
