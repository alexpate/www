import './assets/globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';

import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Alex Pate - Product Engineer',
  description:
    'Alex Pate is a product engineer based in Milan, currently building the future of payments at MoonPay. Working somewhere on the boundary between design and code',
  twitter: {
    card: 'summary_large_image',
    creator: '@alexjpate',
    images: ['/og.png'],
    title: 'Alex Pate - Product Engineer',
  },
  openGraph: {
    title: 'Alex Pate - Product Engineer',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Alex Pate - Product Engineer',
      },
    ],
    siteName: 'Alex Pate - Product Engineer',
  },
  metadataBase: new URL('https://alexjpate.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alex Pate',
  image: 'https://alexjpate.com/avatar.jpeg',
  url: 'https://alexjpate.com',
  sameAs: [
    'https://twitter.com/alexjpate',
    'https://www.github.com/alexpate',
    'https://www.linkedin.com/in/alexjpate/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={clsx(GeistSans.className, 'bg-slate-950')}>
        <main className="max-w-xl mx-auto">
          <header className="pt-16 pb-16 px-4 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-semibold text-white">ap</h1>
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/posts"
                className="text-white text-base font-semibold"
              >
                Writing
              </Link>
              <Link
                className="text-white text-base font-semibold"
                href="/#contact"
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
