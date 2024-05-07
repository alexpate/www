import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

import { ArticleLink } from './components/article-link';
import clsx from 'clsx';
import { getAllPosts } from '@/lib/articles';
import { Title } from '@/app/components/title';

const projects: {
  href?: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: 'Glow',
    href: 'https://glow.as',
    description:
      'A dynamic link-in-bio tool to help creators and brands drive traffic',
    image: '/glow.png',
  },
  {
    title: 'FlagDB',
    href: 'https://flagdb.com',
    description:
      'A personal project to build a database of flags from around the world',
    image: '/flagdb.png',
  },
  {
    href: 'https://duo.alexjpate.com',
    title: 'Duo',
    description: 'A collection of colour combinations',
    image: '/duo.png',
  },
  {
    href: 'https://github.com/alexpate/awesome-design-systems',
    title: 'Awesome Design Systems',
    description: 'A curated list of design systems',
    image: '/awesome-design-systems.png',
  },
];

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-14">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Ciao, I’m Alex.
          <span className="block text-slate-500 font-normal text-2xl">
            A product engineer from the UK based in Milan.
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">
          I work with leading-edge companies to create exceptional products. I’m
          currently working with MoonPay to help make web3 accessible. Before
          that, I built personal and business banking products for millions of
          customers at Monzo.
        </p>
        <Link
          href="/info"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          More Information{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className="pb-16">
        <Title as="h2" variant="secondary" className="mb-4">
          Personal Projects
        </Title>

        <p className="text-slate-700 text-lg">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
        <div className="md:w-[170%] md:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          {projects.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                key={project.title}
                className={clsx(
                  'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
                )}
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    width={450}
                    height={240}
                    quality={90}
                    src={project.image}
                    alt=""
                    className="rounded-xl bg-cover"
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>
              </WrappingComponent>
            );
          })}
        </div>
      </section>

      <section className="pt-10 pb-16">
        <Title as="h2" variant="secondary" className="mb-8">
          Recent Writing
        </Title>
        <div className="divide-y">
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
        <Link
          href="/posts"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          View More Posts{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
