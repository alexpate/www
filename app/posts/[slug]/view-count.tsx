import { queryBuilder } from '@/lib/planetscale';
import clsx from 'clsx';

const fetchViewCount = (slug: string) => {
  return queryBuilder
    .selectFrom('views')
    .where('slug', '=', slug)
    .select(['count'])
    .executeTakeFirst();
};

interface Props {
  slug: string;
  className?: string;
}

export const ViewCount = async ({ slug, className }: Props) => {
  const viewCount = await fetchViewCount(slug);

  if (!viewCount) {
    return null;
  }

  return (
    <span className={clsx('text-white text-sm', className)}>
      {viewCount.count} views
    </span>
  );
};
