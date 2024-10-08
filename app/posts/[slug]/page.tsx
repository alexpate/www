import { MDXRemote } from 'next-mdx-remote/rsc';
import { Pluggable } from 'unified';
import '../../assets/github-dark.css';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getAllPostPaths, getPostBySlug } from '@/lib/articles';
import { Metadata, ResolvingMetadata } from 'next';
import { ScrollAnimationDemoOne } from '@/app/components/posts/2024-05-20-future-css-scroll-animations';
import {
  TextWrapHero,
  TextWrapPrettyVsBalance,
} from '@/app/components/posts/2024-05-21-future-css-text-wrap-pretty';
import {
  DebouncedSearchInput,
  SearchInput,
} from '@/app/components/posts/2024-06-27-debouncing-an-input-in-react';
import { ContainerQueryDemo } from '@/app/components/posts/2024-09-23-future-css-container-queries';
import Head from 'next/head';
import { createPostJsonLd } from '@/lib/jsonLd/post';

export async function generateStaticParams() {
  const paths = getAllPostPaths();

  return paths;
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  const parentMeta = await parent;

  return {
    title: post?.meta.title,
    description: post?.meta.summary,
    publisher: 'Alex Pate',
    creator: 'Alex Pate',
    twitter: {
      ...parentMeta?.twitter,
      siteId: undefined,
      site: undefined,
      creator: '@alexjpate',
      creatorId: '243263662',
      description:
        post?.meta?.summary || parentMeta?.twitter?.description || undefined,
      title: post?.meta?.title || parentMeta?.twitter?.title,
    },
    openGraph: {
      ...parentMeta?.openGraph,
      title: post?.meta?.title || parentMeta?.openGraph?.title,
      description: post?.meta?.summary || parentMeta?.openGraph?.description,
      url: `https://alexpate.com/posts/${params.slug}`,
    },
  };
}

type Params = {
  slug: string;
};

export default async function Post({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  if (post.meta.draft && process.env.NODE_ENV !== 'development') {
    return notFound();
  }

  const { meta, content } = post;

  const postJsonLd = createPostJsonLd(post);

  return (
    <>
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
            <MDXRemote
              source={content}
              components={{
                ScrollAnimationDemoOne,
                TextWrapHero,
                TextWrapPrettyVsBalance,
                SearchInput,
                DebouncedSearchInput,
                ContainerQueryDemo,
              }}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [[rehypeHighlight]] as unknown as Pluggable[],
                },
              }}
            />
          </article>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
    </>
  );
}
