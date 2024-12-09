'use client';
import { useState } from 'react';
import { Button } from 'react-scroll';
import cx from 'classnames';

import { NavLink } from './NavLink';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed bg-background w-full py-2 px-4 lg:px-20 z-20 border-b border-primary'>
      <div className='flex h-14 items-center max-lg:px-5 mx-auto'>
        <Button
          to='hero'
          offset={-250}
          spy
          smooth
          onClick={() => setIsOpen(false)}
          className='lg:hidden flex-1 cursor-pointer z-10 text-left leading-3 mt-2'
        >
          Paweł Fulara's
          <span className='block text-2xl uppercase font-mono font-bold text-primary'>
            Portfolio
          </span>
        </Button>
        <div
          className={cx(
            'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-background max-lg:opacity-0 transition duration-200',
            {
              ['max-lg:opacity-100']: isOpen,
              ['max-lg:pointer-events-none']: !isOpen,
            }
          )}
        >
          <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
              <ul className='relative z-10 flex max-lg:block max-lg:px-12 gap-32 justify-between'>
                <li className='relative flex items-center justify-center'>
                  <Button
                    to='hero'
                    offset={-250}
                    spy
                    smooth
                    className='max-lg:hidden cursor-pointer font-semibold text-xl text-white text-left leading-3 mt-2'
                  >
                    Paweł Fulara's
                    <span className='block text-2xl uppercase font-mono font-bold text-primary3'>
                      Portfolio
                    </span>
                  </Button>
                </li>

                <li className='flex max-md:items-start md:items-center gap-8 max-md:flex-col'>
                  <NavLink
                    title='skills'
                    setIsOpen={setIsOpen}
                  />
                  <div className='dot' />
                  <NavLink
                    title='projects'
                    setIsOpen={setIsOpen}
                  />
                  <div className='dot' />
                  <NavLink
                    title='contact'
                    setIsOpen={setIsOpen}
                  />
                </li>
              </ul>
            </nav>
            <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90'>
              <img
                src='/assets/images/bg-outlines.svg'
                width={960}
                height={380}
                alt='outline'
                className='relative z-0'
              />
            </div>
          </div>
        </div>
        <button
          className='lg:hidden z-10 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center'
          onClick={() =>
            setIsOpen((prevState) => !prevState)
          }
        >
          <img
            src={
              isOpen
                ? '/assets/icons/close.svg'
                : '/assets/icons/magic.svg'
            }
            alt='magic'
            className='size-1/2 object-contain'
          />
        </button>
      </div>
    </header>
  );
};
