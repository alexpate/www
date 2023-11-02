import fs from 'fs';
import path from 'path';

import { MDXRemote } from 'next-mdx-remote/rsc';

import '../../github-dark.css';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getAllPostPaths, getPostBySlug } from '@/lib/articles';

export async function generateStaticParams() {
  const paths = getAllPostPaths();

  return paths;
}

export async function generateMetadata({ params }: any) {
  const post = getPostBySlug(params.slug);

  return {
    title: post?.meta.title,
    description: post?.meta.description,
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
    <div className="px-4">
      <section className="pb-10 max-w-2xl">
        <h1 className="font-medium text-5xl text-white">{meta.title}</h1>
      </section>

      <section className="py-5">
        <article className="prose prose-xl prose-invert">
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
    </div>
  );
}
