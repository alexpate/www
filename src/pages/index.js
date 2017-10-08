import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, {keyframes} from 'styled-components';
import {Flex, Box} from 'grid-styled';

import Link from 'components/Link';
import Header from 'components/header';
import {H1, H2, H3, H4, Title, Text} from 'components/typography';
import Glitch from 'components/glitch';

const projects = [
  {
    title: 'Awesome Design Systems',
    description:
      'A curated list of design systems, pattern libraries, and everything inbetween',
    link: 'https://github.com/alexpate/awesome-design-systems',
  },
  {
    title: 'Flymark',
    description:
      'A microservice to convert Github hosted markdown files to html',
    link: 'https://github.com/alexpate/flymark',
  },
  {
    title: 'juniorjobs',
    description: 'Curated entry-level jobs in the UK tech industry',
    link: 'https://github.com/alexpate/juniorjobs',
  },
  {
    title: 'Inward',
    description: 'A real-time gif visualisation of online radio techno mixes',
    link: 'https://github.com/alexpate/inward',
  },
  {
    title: 'Chameleon',
    description: 'A collection of front-end UI components used across Pusher',
    link: 'https://github.com/pusher/chameleon',
  },
];

const animationTada = keyframes`
  from {
    transform: rotate3d(0, 0, 1, 0);
  }

  10%,
  20% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: rotate3d(0, 0, 1, 2deg);
  }

  40%,
  60%,
  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }
`;
const IndexTitle = styled.span`
  &:before {
    content: '👋 ';
    transform-origin: bottom right;
    animation: ${animationTada} 800ms 1000ms linear;
    display: inline-block;
    padding-right: 20px;
  }
`;
const BlogPostLink = styled.section`
  padding: 4px 8px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin: 0 0 32px;
  padding: 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Index = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <div>
      <Header>
        <H1>
          <IndexTitle />
          — I'm a London based user interface engineer with a core focus on
          building design systems.
        </H1>
        <Glitch />
      </Header>
      <Flex direction={['column', 'row']}>
        <Box width={[1, 1 / 6]} px={[0, 2]}>
          <H3 mb={[1, 3]}>Contact</H3>
          <List>
            <ListItem>
              <H4>Twitter</H4>
              <Text small>@alexjpate</Text>
            </ListItem>
            <ListItem>
              <H4>CodePen</H4>
              <Text small>@alexpate</Text>
            </ListItem>
            <ListItem>
              <H4>GitHub</H4>
              <Text small>@alexpate</Text>
            </ListItem>
          </List>
        </Box>
        <Box width={[1, 1 / 3]} px={[0, 2]}>
          <H3 mb={[1, 3]}>Projects</H3>
          <List>
            {projects.map((project, index) => (
              <ListItem key={index}>
                <a href={project.link}>
                  <H4>{project.title}</H4>
                  <Text small>{project.description}</Text>
                </a>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box width={[1, 3 / 6]} px={[0, 2]}>
          <H3 mb={[1, 3]}>Writing</H3>
          <List>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({node: post}) => {
                return (
                  <ListItem key={post.id}>
                    <GatsbyLink to={post.frontmatter.path}>
                      <H4>{post.frontmatter.title}</H4>
                      <Text small>{post.frontmatter.date}</Text>
                    </GatsbyLink>
                  </ListItem>
                );
              })}
          </List>
        </Box>
      </Flex>
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt(pruneLength: 150)
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
