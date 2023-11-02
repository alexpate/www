import { queryBuilder } from '@/lib/planetscale';

const fetchViewCount = (slug: string) => {
  return queryBuilder
    .selectFrom('views')
    .where('slug', '=', slug)
    .select(['count'])
    .executeTakeFirst();
};

const incrementViewCount = (slug: string, currentViewCount: number) => {
  return queryBuilder
    .insertInto('views')
    .values({ slug, count: 1 })
    .onDuplicateKeyUpdate({ count: currentViewCount + 1 })
    .execute();
};

export async function GET(request: Request): Promise<number | null> {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return null;
  }

  const viewCount = await fetchViewCount(slug);

  return viewCount?.count ?? null;
}

export async function POST(request: Request): Promise<number | null> {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return null;
  }

  const viewCount = await fetchViewCount(slug);
  const currentViewCount = viewCount?.count ?? 0;
  await incrementViewCount(slug, currentViewCount);

  return currentViewCount + 1 ?? null;
}
