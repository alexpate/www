import fs from 'fs/promises';
import path from 'path';

export async function getArticleSlugs(): Promise<string[]> {
  const files = await fs.readdir(
    path.join(process.cwd(), 'app/posts/content'),
    {
      withFileTypes: true,
    }
  );

  const articles = files
    .filter((file) => file.name.endsWith('.mdx'))
    .map((file) => file.name.replace('.mdx', ''));

  return articles;
}
