import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import {Box} from 'grid-styled';

import {H3, Text} from 'components/typography';

const Section = Box.extend`
  padding: 40px 0;
`;

const Index = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <main>
      <Helmet title="Alex Pate - UI Engineer" />
      <Section pt={[20, 40, 100]}>
        <Text>
          <span role="img" aria-label="wave">
            👋
          </span>
          <br />
          I’m Alex, a design engineer in London, currently working at{' '}
          <a href="https://kalohq.com">Kalo</a>. As a design engineer, I help
          close the gaps between design and code, whether this be through
          writing code, or by creating processes and tooling to assist other
          developers.
        </Text>
        <Text>
          Although I spend most of my day working with the front-end and design,
          I always enjoy playing around with server-side tech. But most of all,
          I enjoy making tools. You can find me on Twitter, CodePen, GitHub, and
          Dribbble.
        </Text>
      </Section>
      <Section>
        <H3 mb={[1, 3]}> Writing </H3>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({node: post}) => (
            <Box mb={2}>
              <GatsbyLink
                to={post.frontmatter.path}
                key={post.frontmatter.title}
              >
                <Text>{post.frontmatter.title}</Text>
                <Text small>{post.frontmatter.date} </Text>
              </GatsbyLink>
            </Box>
          ))}
      </Section>
    </main>
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
