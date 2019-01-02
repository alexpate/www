import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Box, Flex} from 'grid-styled';
import styled, {css} from 'styled-components';

import {H1, Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';
import {Inner} from 'layouts';

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

const HomeFeature = styled(Flex)`
  align-items: center;
  overflow: hidden;
  min-height: 60vh;
  /* background-image: conic-gradient(#ed13eb, #efecec); */
  background: #d9d4d4;
  background-color: ${props => props.theme.colors.primary};
  /* box-shadow: 0 2px 0 3px rgba(197, 197, 197, 0.5); */
  position: relative;
`;

const Index = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  const meta = data.site.siteMetadata;
  return (
    <div>
      <main>
        <Helmet title={meta.defaultTitle}>
          <meta name="twitter:title" content={meta.defaultTitle} />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <HomeFeature>
          <Inner>
            <H1>Alex Pate is a London based UI/UX Engineer</H1>
            <P>
              I’m Alex, a UI/UX Engineer based in London. Although being an
              engineer by trade, I straddle the line between design and code.
            </P>
            <P>
              I have a particular focus on the internal role that UI engineering
              plays, in regards to design systems, and creating tooling and
              processes to help product teams scale. I’m currently working at
              Kalo, developing an internal design system.
            </P>
          </Inner>
        </HomeFeature>
        <Section pt={4}>
          <Inner>
            <SectionTitle>Articles</SectionTitle>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({node: post}) => (
                <Box mb={2} key={post.frontmatter.title}>
                  <Text fontWeight="500">
                    <Link
                      to={post.fields.slug}
                      style={{textDecoration: 'none'}}
                    >
                      {post.frontmatter.title}
                      <PostDate is="time" dateTime={post.fields.date}>
                        {post.fields.date}
                      </PostDate>
                    </Link>
                  </Text>
                </Box>
              ))}
          </Inner>
        </Section>
      </main>
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
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
          excerpt(pruneLength: 250)
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
`;
