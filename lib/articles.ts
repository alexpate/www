import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Post {
  meta: {
    [key: string]: string;
  };
  slug: string;
  date: string;
  href: string;
  content: string;
}

export const getRegexForSlug = (slug: string): RegExp => {
  return new RegExp(`^\\d{4}-\\d{2}-\\d{2}-${slug}.mdx$`);
};

interface DateAndSlug {
  date: string;
  slug: string;
}

export const getDateAndSlugFromFilename = (
  filename: string
): DateAndSlug | null => {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.*).mdx$/);
  if (match) {
    return {
      date: match[1],
      slug: match[2],
    };
  }
  return null;
};

export const getAllPosts = async (): Promise<Post[]> => {
  const files = fs.readdirSync(path.join('posts'));

  const posts: Post[] = files
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      );

      const { data: frontMatter } = matter(fileContent);

      const dateAndSlug = getDateAndSlugFromFilename(filename);

      if (!dateAndSlug) {
        return null;
      }

      const { date, slug } = dateAndSlug;

      return {
        meta: frontMatter,
        slug,
        date,
        href: `/posts/${slug}`,
      };
    })
    .filter((post): post is Post => post !== null);

  const filteredAndSortedPosts = posts.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    }
    return 1;
  });

  return filteredAndSortedPosts;
};

export const getPost = async (requestedSlug: string): Promise<Post | null> => {
  if (!requestedSlug) {
    return null;
  }

  const files = fs.readdirSync('posts');

  const filename = files.find((file) => {
    const regex = new RegExp(`^\\d{4}-\\d{2}-\\d{2}-${requestedSlug}.mdx$`);
    return regex.test(file);
  });

  if (!filename) {
    return null;
  }

  const dateAndSlug = getDateAndSlugFromFilename(filename);

  if (!dateAndSlug) {
    return null;
  }

  const { date, slug } = dateAndSlug;

  const postFile = fs.readFileSync(path.join('posts', filename), 'utf-8');

  const { data: meta, content } = matter(postFile);

  return {
    meta,
    slug,
    content,
    date,
    href: `/posts/${slug}`,
  };
};
