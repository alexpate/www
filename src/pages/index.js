import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Box} from 'grid-styled';
import styled, {css} from 'styled-components';

import {Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

const BARS = ['#ebbb3b', '#e5410d', '#c51b1b', '#97143a', '#6a1842'];

const HomeFeature = styled(Box)`
  overflow: hidden;
  min-height: 320px;

  div {
    width: 600px;
    height: 36px;

    ${BARS.map(
      (barColor, i) => css`
        &:nth-of-type(${i + 1}) {
          background-color: ${barColor};
          transform: rotate(-45deg) translateX(${25 * i + 60}px)
            translateY(${10 * i}px);
        }
      `
    )};
  }
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
        <Section>
          <HomeFeature>
            <div />
            <div />
            <div />
            <div />
            <div />
          </HomeFeature>
          <P>
            <span role="img" aria-label="wave">
              👋
            </span>
            <br />
            I’m Alex, a digital product designer based in London. I work with
            startups and agencies, straddling the line between design and code.
          </P>
          <P>
            I have a particular focus on the internal role that UI engineering
            plays, in regards to design systems, and creating tooling and
            processes to help product teams scale. I’m currently working at
            Kalo, leading the development of our internal design system.
          </P>
        </Section>
        <Section>
          <SectionTitle>Recent articles</SectionTitle>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({node: post}) => (
              <Box mb={2} key={post.frontmatter.title}>
                <Text>
                  <Link to={post.fields.slug} style={{textDecoration: 'none'}}>
                    {post.frontmatter.title}
                    <PostDate is="time" dateTime={post.fields.date}>
                      {post.fields.date}
                    </PostDate>
                  </Link>
                </Text>
              </Box>
            ))}
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
