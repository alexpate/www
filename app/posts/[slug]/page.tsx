import { MDXRemote } from 'next-mdx-remote/rsc';

import '../../assets/github-dark.css';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getAllPostPaths, getPostBySlug } from '@/lib/articles';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const paths = getAllPostPaths();

  return paths;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  return {
    title: post?.meta.title,
    description: post?.meta.description,
    publisher: 'Alex Pate',
    creator: 'Alex Pate',
  };
}

type Params = {
  slug: string;
};

export default async function Post({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  const { meta, content } = post;

  return (
    <main className="px-4 md:px-0">
      <section>
        <h1 className="font-semibold tracking-tight text-4xl text-slate-900">
          {meta.title}
        </h1>
        <span className="text-slate-500 text-sm tracking-tight font-mono block mt-4">
          Published on{' '}
          <time dateTime={post.date}>
            {new Intl.DateTimeFormat('en-GB', {
              dateStyle: 'medium',
            }).format(new Date(post.date))}
          </time>
        </span>
      </section>

      <section className="py-5">
        <article className="prose prose-lg">
          {/* @ts-expect-error Server Component*/}
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [[rehypeHighlight, { languages: true }]],
              },
            }}
          />
        </article>
      </section>
    </main>
  );
}
