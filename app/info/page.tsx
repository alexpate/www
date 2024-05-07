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
    company: 'MoonPay',
    role: 'Senior Front-End Engineer',
    date: 'April 2022 → Today',
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
          I&apos;m currently working with MoonPay to help build the future of
          payments. Before that, I was working with Monzo - the fastest growing
          bank in the UK. Originally joining as a product designer, I
          transitioned into a web engineer role where I worked with a variety of
          teams to build products to help millions of customers.
        </p>

        <p>
          Before, I was working with Kalo (which eventually became Polywork)
          where I was the first UI Engineering hire. My responsibilities
          included building out the design system as well as ensuring a high bar
          of design quality across the product.
        </p>

        <p>
          Aside I also enjoy building my own projects, mostly to scrath my own
          itch. I&apos;ve built products like{' '}
          <Link href="https://flagdb.com">FlagDB</Link> and{' '}
          <Link href="https://glow.as">Glow</Link>, and am currently building a
          tool to make the process of generating mobile wallet passes easier.
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
      </section>
    </main>
  );
}
