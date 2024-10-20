'use client';
import { useState } from 'react';
import { Button as LinkScroll } from 'react-scroll';
import cx from 'classnames';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ title }: { title: string }) => (
    <LinkScroll
      to={title}
      offset={-100}
      onClick={() => setIsOpen(false)}
      spy
      smooth
      activeClass='nav-active'
      className='font-bold text-p4 uppercase transition-colors duration-300 cursor-pointer hover:text-primary1 max-lg:my-4 max-lg:h5'
    >
      {title}
    </LinkScroll>
  );

  return (
    <header className='fixed top-0 left-0 w-full z-50 py-2 border-b transition-all bg-black-100 border-primary5'>
      <div className='container flex h-14 items-center max-lg:px-5 mx-auto'>
        <LinkScroll
          to='hero'
          offset={-250}
          spy
          smooth
          onClick={() => setIsOpen(false)}
          className='lg:hidden flex-1 cursor-pointer z-2 text-left leading-3 mt-2'
        >
          Paweł Fulara's
          <span className='block text-2xl uppercase font-mono font-bold text-primary3'>
            Portfolio
          </span>
        </LinkScroll>
        <div
          className={cx(
            'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-secondary2 max-lg:opacity-0 transition duration-200',
            {
              ['max-lg:opacity-100']: isOpen,
              ['max-lg:pointer-events-none']: !isOpen,
            }
          )}
        >
          <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
              <ul className='flex max-lg:block max-lg:px-12 gap-32 justify-between'>
                <li className='nav-logo'>
                  <LinkScroll
                    to='hero'
                    offset={-250}
                    spy
                    smooth
                    className={cx(
                      'max-lg:hidden cursor-pointer font-semibold text-xl text-white text-left leading-3 mt-2'
                    )}
                  >
                    Paweł Fulara's
                    <span className='block text-2xl uppercase font-mono font-bold text-primary3'>
                      Portfolio
                    </span>
                  </LinkScroll>
                </li>

                <li className='flex max-md:items-start md:items-center gap-8 max-md:flex-col'>
                  <NavLink title='skills' />
                  <div className='dot' />
                  <NavLink title='projects' />
                  <div className='dot' />
                  <NavLink title='contact' />
                </li>
              </ul>
            </nav>
            <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90'>
              <img
                src='/assets/images/bg-outlines.svg'
                width={960}
                height={380}
                alt='outline'
                className='relative z-2'
              />
              <img
                src='/assets/images/bg-outlines-fill.png'
                width={960}
                height={380}
                alt='outline'
                className='absolute inset-0 mix-blend-soft-light opacity-5'
              />
            </div>
          </div>
        </div>
        <button
          className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center'
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

export default Header;
