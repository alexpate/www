import { FC } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props {
  code: string;
}

export const Mdx: FC<Props> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-invert font-serif prose-xl text-white">
      <Component />
    </article>
  );
};
