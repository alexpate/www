import { PageHeader } from '@/app/components/page-header';
import { ArticleLink } from '../components/article-link';
import { getAllPosts } from '@/lib/articles';

export default async function Page() {
  const posts = await getAllPosts({
    includeDrafts: process.env.NODE_ENV === 'development',
  });

  const filteredPosts = posts.filter((post) => {
    if (post.meta?.draft && process.env.NODE_ENV !== 'development') {
      return false;
    }
    return true;
  });

  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Writing" />
      <section className="divide-y">
        {filteredPosts.map((post) => {
          return (
            <ArticleLink
              key={post.meta.title}
              href={post.href}
              title={post.meta.title}
              summary={post.meta.summary}
              date={post.date}
            />
          );
        })}
      </section>
    </main>
  );
}
