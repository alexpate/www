import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Site from 'components/site';
import {Box, Flex, Inner} from 'components/system';
import {H1, Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

const HomeFeature = styled(Flex)`
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.theme.colors.primary};
  position: relative;
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
        <HomeFeature py={[3, 4, 5]}>
          <Inner>
            <H1>Design &amp; code, at scale.</H1>
            <P>
              I’m Alex, a UI Engineer based in London. Although being an
              engineer by trade, I straddle the line between design and code.
            </P>
            <P>
              I have a particular focus on the internal role that UI engineering
              plays, in regards to design systems, and creating tooling and
              processes to help product teams scale.
            </P>
          </Inner>
        </HomeFeature>
        <Section>
          <Inner>
            <SectionTitle>Articles</SectionTitle>
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
