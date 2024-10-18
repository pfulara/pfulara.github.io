export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Contact</h2>
      <h3 className='font-bold text-lg mb-4'>
        You can hit me up by e-mail
      </h3>
      <p className='cursor-pointer margin-0'>
        <a href='mailto:fulara.pawel@gmail.com'>
          fulara.pawel@gmail.com
        </a>
      </p>
    </div>
  );
}
