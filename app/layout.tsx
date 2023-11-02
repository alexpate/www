import './globals.css';

import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alex Pate - Product Engineer',
  description:
    'Alex Pate is a product engineer based in Milan, currently building the future of payments at MoonPay. Working somewhere on the boundary between design and code',
  twitter: {
    card: 'summary_large_image',
    creator: '@alexjpate',
    images: ['https://alexjpate.com/og.png'],
    title: 'Alex Pate - Product Engineer',
  },
  metadataBase: new URL('https://alexjpate.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-slate-950">
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
                href="/profile"
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
