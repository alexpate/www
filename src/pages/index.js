import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Site from 'components/site';
import {Box, Inner} from 'components/system';
import {Text, H1} from 'components/typography';
import Section from 'components/section';

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  const meta = data.site.siteMetadata;
  return (
    <Site>
      <main>
        <Helmet title={meta.defaultTitle}>
          <meta name="twitter:title" content={meta.defaultTitle} />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <Section>
          <Inner>
            <H1>Journal</H1>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({node: post}) => (
                <Box mb={3} key={post.frontmatter.title}>
                  <Text fontWeight="500">
                    <Link
                      to={post.fields.slug}
                      style={{textDecoration: 'none'}}
                    >
                      {post.frontmatter.title}
                      <PostDate is="time" dateTime={post.fields.date}>
                        {post.fields.date}
                      </PostDate>
                      <Text is="span" fontSize={1}>
                        {post.excerpt}
                      </Text>
                    </Link>
                  </Text>
                </Box>
              ))}
          </Inner>
        </Section>
      </main>
    </Site>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
          }
        }
        allMarkdownRemark(sort: {fields: [fields___date], order: DESC}) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                date(formatString: "MMMM DD, YYYY")
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
);
