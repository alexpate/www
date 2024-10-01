import { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/articles';

const baseUrl = `https://alexpate.com`;

const baseSitemap = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${baseUrl}/info`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: 'never',
    priority: 0.5,
  },
  {
    url: `${baseUrl}/posts`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const flagsSitemap = await generateSitemap(baseUrl);

  return [...baseSitemap, ...flagsSitemap] as MetadataRoute.Sitemap;
}

export async function generateSitemap(
  baseUrl: string
): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts({
    includeDrafts: process.env.NODE_ENV === 'development',
  });

  const projects = await getAllPosts({
    isWork: true,
  });

  const filteredPosts = posts.filter((post) => {
    if (post.meta?.draft && process.env.NODE_ENV !== 'development') {
      return false;
    }
    return true;
  });

  const postsSitemap = filteredPosts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectsSitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...postsSitemap, ...projectsSitemap] as MetadataRoute.Sitemap;
}
