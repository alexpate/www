import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Box} from 'grid-styled';
import styled from 'styled-components';

import {H3, Text, P} from 'components/typography';
import Header from 'components/header';
import Section, {SectionTitle} from 'components/section';

import coverPhoto from './index-cover.png';

const PostDate = styled(Text)`
  font-size: 0.8em;
`;

const Index = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <div>
      <main>
        <Helmet title="Alex Pate - UI Engineer" />
        <Header />
        <Section pt={[20, 40]}>
          <img
            src={coverPhoto}
            style={{width: '100%', marginBottom: 16}}
            alt="San Franciso Bay"
          />
          <P>
            <span role="img" aria-label="wave">
              👋
            </span>
            <br />
            I’m Alex, a UI engineer based in London. I work with startups and
            agencies, straddling the line between design and code.
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
                <Link to={post.frontmatter.path}>
                  <Text>{post.frontmatter.title}</Text>
                  <PostDate is="time" dateTime={post.frontmatter.date}>
                    {post.frontmatter.date}
                  </PostDate>
                </Link>
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
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
