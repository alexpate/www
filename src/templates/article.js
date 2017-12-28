import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Box} from 'grid-styled';

import Alert from '../components/alert';
import PageHeader from '../components/page-header';
import {H1, Text} from '../components/typography';

const Article = styled.div`
  padding: 40px 0;
`;

const StyledMain = Box.extend`
  color: ${props => props.theme.colors.text};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Main = ({children, ...otherProps}) => (
  <StyledMain as="main" {...otherProps}>
    {children}
  </StyledMain>
);

export default function Template({data, pathContext}) {
  const {markdownRemark: post} = data;
  const {next, prev} = pathContext;

  const dateToday = new Date();
  const datePost = new Date(post.frontmatter.date);

  const isOldPost = (dateToday - datePost) / (1000 * 3600 * 24 * 365) > 1;

  return (
    <Article>
      <Helmet title={post.frontmatter.title} />
      <PageHeader
        title={post.frontmatter.title}
        subTitle={`By Alex Pate on ${post.frontmatter.date}`}
      />
      {isOldPost ? (
        <Alert type="warning">
          Please note, that this post is over a year old. Some the content may
          be out of date.
        </Alert>
      ) : null}
      <Main className="md" dangerouslySetInnerHTML={{__html: post.html}} />
    </Article>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
