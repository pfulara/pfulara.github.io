import { Lato } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: {
    default: "Paweł Fulara's Portfolio",
    template: "%s | Paweł Fulara's Portfolio",
  },
  description: 'React Developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${lato.className} relative`}>
        <Header />
        <main className='px-8 py-32 lg:px-16 text-center flex justify-center w-full min-h-screen'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
