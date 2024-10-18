import Link from 'next/link';
import {
  FaHome,
  FaRegEnvelope,
  FaLaptopCode,
} from 'react-icons/fa';

export default function CircleMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed rounded-full border border-gray transition-all w-44 h-44 -bottom-[100px] bg-[#212529] ${
        open ? 'scale-150' : 'scale-0'
      }`}
    >
      <div
        className='absolute left-[15%] top-[25%]'
        onClick={() => setOpen(false)}
      >
        <Link href='/projects'>
          <FaLaptopCode />
          <span className='text-[8px] absolute -left-[14px] uppercase'>
            Projects
          </span>
        </Link>
      </div>
      <div
        className='absolute left-[45%] top-[10%]'
        onClick={() => setOpen(false)}
      >
        <Link href='/'>
          <FaHome />
          <span className='text-[8px] absolute -left-[6px] uppercase'>
            Home
          </span>
        </Link>
      </div>
      <div
        className='absolute left-[75%] top-[25%]'
        onClick={() => setOpen(false)}
      >
        <Link href='/contact'>
          <FaRegEnvelope />
          <span className='text-[8px] absolute -left-[14px] uppercase'>
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
}
