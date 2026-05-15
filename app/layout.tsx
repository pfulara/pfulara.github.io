import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header, Menu, Footer } from '@/components';
import { SITE } from '@/data/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE.title}`,
    default: SITE.title,
  },
  description:
    'Fullstack developer specializing in React, Next.js, and TypeScript — SaaS, e-commerce, and product development.',
  openGraph: {
    title: SITE.title,
    description: SITE.tagline,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col bg-background text-foreground'>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-zinc-950'
        >
          Skip to content
        </a>
        <Header />
        <main
          id='main-content'
          className='mx-auto w-full max-w-5xl flex-1 px-4 py-10 pb-24 sm:px-8 sm:py-14 md:pb-14 lg:px-16'
        >
          {children}
        </main>
        <Footer />
        <Menu />
      </body>
    </html>
  );
}
