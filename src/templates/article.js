import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Box} from 'grid-styled';

import Alert from 'components/alert';
import PageHeader from 'components/page-header';
import Header from 'components/header';
import Markdown from 'components/markdown';

const Article = styled.div`
  padding: 40px 0;
`;

export default function Template({data}) {
  const {markdownRemark: post} = data;

  const dateToday = new Date();
  const datePost = new Date(post.frontmatter.date);

  const isOldPost = (dateToday - datePost) / (1000 * 3600 * 24 * 365) > 1;

  return (
    <div>
      <Header scrollTitle={post.frontmatter.title} />
      <Article>
        <Helmet title={`${post.frontmatter.title} - Alex Pate - UI Engineer`}>
          <meta
            name="twitter:title"
            content={`${post.frontmatter.title} - Alex Pate - UI Engineer`}
          />
          <meta name="twitter:description" content={post.excerpt} />
        </Helmet>
        <PageHeader
          title={post.frontmatter.title}
          subTitle={`By Alex Pate on ${post.frontmatter.date}`}
        />
        {isOldPost ? (
          <Alert type="warning">
            This post is over a year old. Some of the content may be out of
            date.
          </Alert>
        ) : null}
        <Markdown dangerouslySetInnerHTML={{__html: post.html}} id="top" />
      </Article>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
