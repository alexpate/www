import Link from 'next/link';
import { FC } from 'react';
import { ViewCount } from '../posts/[slug]/view-count';

interface Props {
  title: string;
  date: string;
  summary: string;
  href: string;
}

export const ArticleLink: FC<Props> = ({ title, date, summary, href }) => {
  return (
    <Link href={href} className="grid grid-cols-content gap-4">
      <span className="text-white/50">{date}</span>
      <div className="flex flex-col">
        <span className="text-white">{title}</span>

        <p className="mt-2 font-serif text-white/70 text-base">{summary}</p>
      </div>
    </Link>
  );
};
