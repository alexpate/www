import dynamic from 'next/dynamic';
import Link from 'next/link';
import {getArticleSlugs} from '../../lib/get-articles-slugs';

async function getSlugs() {
  const ARTICLES_PER_PAGE = 10;
  const slugs = getArticleSlugs();

  const results = await Promise.allSettled(
    slugs.map((slug) => {
      return import(`./content/${slug}.mdx`);
    })
  );

  const filteredResults = results
    .filter((res) => res.status === 'fulfilled')
    .map((res) => {
      if (res.status === 'fulfilled') {
        return {
          value: res.value,
          slug: slugs.find((slug) => slug === res.value.meta.slug),
        };
      }
    })
    .filter((res) => res !== undefined);

  const recents = slugs.slice(0, 10).map((item) => item);

  return filteredResults;
}

export default async function Page() {
  const slugs = await getSlugs();

  // @ts-ignore
  const articles = slugs.map(({slug}) => {
    return dynamic(() => import(`./content/${slug}.mdx`));
  });

  console.log(articles);

  return (
    <div>
      <h1 className="text-white text-2xl">Writing</h1>
      {slugs.map((article) => {
        return (
          <Link
            key={article?.value.meta.title}
            href={`/posts/${article?.slug}`}
          >
            <div className="py-4">
              <h3 className="text-white text-lg">
                {article?.value.meta.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
