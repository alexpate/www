import { ArticleLink } from '../components/article-link';
import { getAllPosts } from '@/lib/articles';

export default async function WorkPage() {
  const posts = await getAllPosts(true);

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-4 text-white/90">
        Past Projects
      </h1>
      <section className="py-5">
        {posts.map((post) => {
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
    </div>
  );
}
