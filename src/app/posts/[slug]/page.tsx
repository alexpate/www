import glob from 'glob';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {FC} from 'react';
import {get} from '@vercel/edge-config';

import '../../syntax.css';

interface PostMeta {
  title: string;
  description: string;
}

export async function generateStaticParams() {
  const allPostPaths = await glob('src/app/posts/content/*.mdx');

  const filteredPostPaths = allPostPaths.map((path) => {
    return path.replace('src/app/posts/content/', '').replace('.mdx', '');
  });

  return filteredPostPaths.map((path) => ({
    slug: path,
  }));
}

async function readPost(slug: string): Promise<{
  render: FC;
  meta: PostMeta;
} | null> {
  const allPostPaths = await glob('src/app/posts/content/*.mdx');

  const postPath = allPostPaths.find((path) => path.endsWith(`${slug}.mdx`));

  if (!postPath) {
    return null;
  }

  const cleanedPostPath = postPath.replace('src/app/posts/content/', '');

  const post = await import(`../content/${cleanedPostPath}`);

  return {
    render: post.default,
    meta: post.meta,
  };
}

async function getViewCount(slug: string) {
  const viewCount = await get(slug);

  if (!viewCount) {
    return 0;
  }

  return viewCount as number;
}

export default async function Post({
  params: {slug},
}: {
  params: {
    slug: string;
  };
}) {
  const post = await readPost(slug);
  const viewCount = await getViewCount(slug);

  if (!post || post == null) {
    notFound();
  }

  const {render: MDXPost, meta} = post;

  return (
    <main>
      <section className="pt-20 pb-10 max-w-2xl">
        <h1 className="font-medium text-5xl text-white tracking-tighter">
          {meta.title}
        </h1>
        <span className="text-white text-sm">{viewCount} views</span>
      </section>

      <section className="py-5 max-w-lg prose text-white">
        <MDXPost />
      </section>
    </main>
  );
}
