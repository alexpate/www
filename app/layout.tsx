import './assets/globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import clsx from 'clsx';
import Script from 'next/script';

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alex Pate - Product Engineer',
  description:
    'Alex Pate is a product engineer based in Milan, working somewhere on the boundary between design and code.',
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
  metadataBase: new URL('https://alexpate.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alex Pate',
  image: 'https://alexpate.com/avatar.jpeg',
  url: 'https://alexpate.com',
  jobTitle: 'Product Engineer',
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
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="tgAseXOCr25EjtPoO0MNSw"
            defer={true}
          />
        )}
      </head>
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          'bg-slate-50'
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-mono font-semibold text-slate-950">
                ap
              </h1>
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/info"
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Information
              </Link>
              <Link
                href="/posts"
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Writing
              </Link>
              <Link
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
          <footer className="px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tight flex justify-between">
            <p>
              &copy; 2010 - {new Date().getFullYear()} {'/'} Alex Pate
            </p>
            <p>
              <Link href="https://github.com/alexpate/www">View Source</Link>
            </p>
          </footer>
        </div>
        <Analytics />
        <GoogleAnalytics gaId="G-NRKQPP7M9P" />
      </body>
    </html>
  );
}
