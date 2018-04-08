import React from 'react';
import Helmet from 'react-helmet';

import Alert from 'components/alert';
import PageHeader from 'components/page-header';
import Markdown from 'components/markdown';
import FollowButton from 'components/follow-button';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  const meta = data.site.siteMetadata;

  const dateToday = new Date();
  const datePost = new Date(post.fields.date);

  const isOldPost = (dateToday - datePost) / (1000 * 3600 * 24 * 365) > 1;

  return (
    <main>
      <article>
        <Helmet title={`${post.frontmatter.title} - ${meta.defaultTitle}`}>
          <meta
            name="twitter:title"
            content={`${post.frontmatter.title} - ${meta.defaultTitle}`}
          />
          <meta name="twitter:description" content={post.excerpt} />
        </Helmet>
        <PageHeader
          title={post.frontmatter.title}
          subTitle={`By ${meta.author} on ${post.fields.date}`}
        />
        {isOldPost ? (
          <Alert type="warning">
            This post is over a year old. Some of the content may be out of
            date.
          </Alert>
        ) : null}
        <Markdown
          dangerouslySetInnerHTML={{__html: post.html}}
          id="top"
          className="content"
        />
        <FollowButton mt={1} />
      </article>
    </main>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        author
        defaultTitle
        defaultDescription
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      timeToRead
      fields {
        date(formatString: "MMMM DD, YYYY")
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
