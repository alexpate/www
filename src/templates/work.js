import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';

import Site from 'components/site';
import {Inner} from 'components/system';
import PageHeader from 'components/page-header';
import Markdown from 'components/markdown';
import FollowButton from 'components/follow-button';

export default function WorkTemplate({data}) {
  const {markdownRemark: post} = data;
  const meta = data.site.siteMetadata;

  return (
    <Site>
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
            subTitle={`By ${meta.author}`}
          />
          <Inner>
            <Markdown
              dangerouslySetInnerHTML={{__html: post.html}}
              id="top"
              className="content"
            />
            <FollowButton mt={1} />
          </Inner>
        </article>
      </main>
    </Site>
  );
}

export const pageQuery = graphql`
  query WorkPostByPath($slug: String!) {
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
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
