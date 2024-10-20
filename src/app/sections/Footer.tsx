import { socials } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='container py-10'>
        <div className='grid md:grid-cols-3'>
          <div className='md:col-start-2 text-[12px] font-semibold leading-[18px] tracking-[0.03em] flex flex-1 flex-wrap items-center justify-center gap-5 max-md:order-2'>
            <p className='opacity-70 text-center'>
              Copyright 2024, pfulara.github.io
            </p>
          </div>
          <ul className='flex flex-1 justify-center gap-3 max-md:mb-12 md:justify-end'>
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <Link href={url} className='social-icon'>
                  <img
                    src={icon}
                    alt={title}
                    className='size-6 object-contain'
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
