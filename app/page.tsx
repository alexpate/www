import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import { ArticleLink } from './components/article-link';
import clsx from 'clsx';
import { getAllPosts } from '@/lib/articles';

const experience: {
  company: string;
  role: string;
  date: string;
  description: string;
}[] = [
  {
    company: 'MoonPay',
    role: 'Senior Front-end Engineer',
    date: '2022 - present',
    description:
      "Bringing web engineering fire-power to where it's needed in the company, from growth to product.",
  },
  {
    company: 'Monzo',
    role: 'Web Engineer / Product Designer',
    date: '2019 - 2021',
    description:
      'Joined as a Product Designer building design tooling, then moved into a Web Engineer role working on both internal web, and the customer business banking web app',
  },
  {
    company: 'Kalo',
    role: 'UI Engineer',
    date: '2017 - 2019',
    description: 'Various web things.',
  },
  {
    company: 'Pusher',
    role: 'Front-end Engineer',
    date: '2015 - 2017',
    description:
      'Built and maintained the Pusher website and introduced the first design system',
  },
];

const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Email',
    link: 'mailto:hey@alexjpate.com',
    label: 'hey@alexjpate.com',
  },
  {
    method: 'Twitter',
    link: 'https://twitter.com/alexjpate',
    label: '@alexjpate',
  },
  {
    method: 'GitHub',
    link: 'https://github.com/alexpate',
    label: 'git/alexpate',
  },
  {
    method: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alexjpate/',
    label: 'in/alexjpate',
  },
];

const projects: {
  href?: string;
  title: string;
  description: string;
  icon: ReactElement;
  isUnreleased?: boolean;
}[] = [
  {
    title: 'hyperdusk',
    description: 'Launching soon',
    isUnreleased: true,
    icon: (
      <Image
        src="/projects/duo-icon.png"
        width={40}
        height={40}
        alt=""
        className="rounded-lg"
      />
    ),
  },
  {
    title: 'FlagDB',
    href: 'https://flagdb.com',
    description:
      'A personal project to build a database of flags from around the world',
    isUnreleased: true,
    icon: (
      <Image
        src="/projects/dusk-ai-icon.png"
        width={40}
        height={40}
        alt=""
        className="rounded-lg"
      />
    ),
  },
  {
    href: 'https://duo.alexjpate.com',
    title: 'Duo',
    description: 'A collection of colour combinations',
    icon: (
      <Image
        src="/projects/duo-icon.png"
        width={40}
        height={40}
        alt=""
        className="rounded-lg"
      />
    ),
  },
  {
    href: 'https://github.com/alexpate/awesome-design-systems',
    title: 'Awesome Design Systems',
    description: 'A curated list of design systems',
    icon: (
      <Image
        src="/projects/awesome-design-systems-icon.png"
        width={40}
        height={40}
        alt=""
        className="rounded-lg"
      />
    ),
  },
];

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="px-4">
      <section className="pb-16">
        <h1 className="font-semibold text-4xl mb-4 text-white">
          Ciao, I’m Alex. <br />
          <span className="text-white/60">
            A product engineer from the UK based in Milan.
          </span>
        </h1>
        <p className="text-white/70 text-lg">
          I’m Alex, a product engineer and designer based in Milan, Italy. I
          work with leading-edge companies to create exceptional products. I’m
          currently working with MoonPay to help make web3 accessible. Before
          that, I built personal and business banking products for millions of
          customers at Monzo.
        </p>
      </section>

      <section className="pt-10 pb-16">
        <h2 className="font-semibold text-base mb-4 text-white/90">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                key={project.title}
                className={clsx(
                  'flex gap-4 items-center bg-slate-900 rounded-xl p-5',
                  isLink ? 'hover:bg-slate-800' : 'cursor-default opacity-50'
                )}
              >
                {project.icon}
                <span>
                  <h3 className="text-white font-medium text-base">
                    {project.title}
                  </h3>
                  <h3 className="text-white/70 text-sm">
                    {project.description}
                  </h3>
                </span>
              </WrappingComponent>
            );
          })}
        </div>
      </section>

      <section className="py-8">
        <h2 className="font-semibold text-base mb-4 text-white/90">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp) => {
            return (
              <div className="grid grid-cols-content gap-4" key={exp.date}>
                <span className="text-white/50">{exp.date}</span>
                <div className="flex flex-col">
                  <span className="text-white">{exp.company}</span>
                  <span className="text-white/40 text-sm">{exp.role}</span>
                  <p className="mt-2 text-white/70 text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pt-10 pb-16">
        <h2 className="font-semibold text-lg mb-4 text-white/90">
          Recent Writing
        </h2>
        <div className="flex flex-col gap-4">
          {posts.slice(0, 3).map((post) => {
            return (
              <ArticleLink
                key={post?.meta.title}
                href={post.href}
                title={post.meta.title}
                date={post?.date}
                summary={post.meta.summary}
              />
            );
          })}
        </div>
      </section>

      <section className="py-8" id="contact">
        <h2 className="font-semibold text-base mb-4 text-white/90">Contact</h2>
        <div className="space-y-4">
          {contact.map((contactMethod) => {
            return (
              <div
                className="grid grid-cols-content gap-4"
                key={contactMethod.method}
              >
                <span className="text-white/50">{contactMethod.method}</span>
                <Link href={contactMethod.link} className="text-white/70">
                  {contactMethod.label}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
