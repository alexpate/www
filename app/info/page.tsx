import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: 'Mainframe',
    role: 'Design Engineer',
    date: 'November 2024 → Present',
    logo: '/mainframe-logo.jpg',
  },
  {
    company: 'MoonPay',
    role: 'Senior Front-End Engineer',
    date: 'April 2022 → August 2024',
    logo: '/moonpay-logo.jpg',
  },
  {
    company: 'Monzo',
    role: 'Web Engineer / Product Designer',
    date: 'May 2019 → November 2021',
    logo: '/monzo-logo.png',
  },
  {
    company: 'Kalo',
    role: 'UI Engineer',
    date: 'February 2017 → May 2019',
    logo: '/kalo-logo.jpg',
  },
  {
    company: 'Pusher',
    role: 'Front-end Developer',
    date: 'September 2015 → January 2017',
    logo: '/pusher-logo.jpg',
  },
];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          Hi there, I&apos;m Alex. I build my own products, along side working
          with some amazing companies to help them build theirs.
        </p>
        <p>
          Most recently, I was working with MoonPay to help build the future of
          payments. Before that, I was working with Monzo - the fastest growing
          bank in the UK. Originally joining as a product designer, I
          transitioned into a web engineer role where I worked with a variety of
          teams to help rethink modern day banking for their millions of
          customers.
        </p>

        <p>
          I also worked with Kalo (which eventually became Polywork) where I was
          the first UI Engineering hire. My responsibilities included building
          out the design system as well as ensuring a high bar of design quality
          across the product.
        </p>

        <p>
          I&apos;ve always bounced somewhere between design and engineering,
          however the common thread has always been my love for building things
          that people love to use.
        </p>

        <p>
          If you&apos;re interested in working together, feel free to reach out
          to me here:{' '}
          <Link href="mailto:hey@alexpate.com">hey@alexpate.com</Link>.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="block my-8 text-slate-500 text-sm font-medium"
        >
          Download resume →
        </Link>
      </section>
    </main>
  );
}
