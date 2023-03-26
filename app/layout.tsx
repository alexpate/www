import './globals.css';
import {Inter} from 'next/font/google';
import Link from 'next/link';
import {clsx} from 'clsx';
import {Metadata} from 'next';

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
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head></head>
      <body className={clsx(inter.variable, 'bg-slate-900')}>
        <main className="max-w-xl mx-auto bg-slate-900">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer className="flex justify-between border-t border-gray-200 mt-10 py-4">
      <nav className="flex gap-4 font-medium text-md text-white/60">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/posts">Writing</Link>
      </nav>
      <div className="flex gap-4 font-medium text-md text-white/60">
        <Link href="https://twitter.com/alexjpate">Twitter</Link>
        <Link href="https://www.linkedin.com/in/alexjpate">LinkedIn</Link>
      </div>
    </footer>
  );
};
