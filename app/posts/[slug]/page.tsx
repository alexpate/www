import fs from 'fs';
import path from 'path';

import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';

import '../../github-dark.css';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

interface Post {
  meta: {
    [key: string]: string;
  };
  content: string;
  slug: string;
}

async function getPost(slug: string): Promise<Post | null> {
  if (!slug) {
    return null;
  }

  const files = fs.readdirSync('posts');

  const filename = files.find((file) => {
    const regex = new RegExp(`^\\d{4}-\\d{2}-\\d{2}-${slug}.mdx$`);
    return regex.test(file);
  });

  if (!filename) {
    return null;
  }

  const postFile = fs.readFileSync(path.join('posts', filename), 'utf-8');

  const { data: meta, content } = matter(postFile);

  return {
    meta,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const post = await getPost(params.slug);

  return {
    title: post?.meta.title,
    description: post?.meta.description,
  };
}

type Params = {
  slug: string;
};

export default async function Post({ params }: { params: Params }) {
  const post = await getPost(params.slug);

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
