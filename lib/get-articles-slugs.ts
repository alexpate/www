import fs from 'fs';
import path from 'path';

const MDX_DIR = 'content';

export function getArticleSlugs() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/posts', MDX_DIR), {
    withFileTypes: true,
  });
  const articles = files
    .map((file) => {
      if (!file.name.endsWith('.mdx')) {
        return null;
      }
      return file.name.replace('.mdx', '');
    })
    .filter((article) => article);

  return articles;
}
