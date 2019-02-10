import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql, Link} from 'gatsby';
import styled from 'styled-components';

import PageHeader from 'components/page-header';
import {Text, H3} from 'components/typography';
import Section from 'components/section';
import Site from 'components/site';
import {Inner, Box, Flex} from 'components/system';

import {PROJECT_HERO_MAP} from '../constants';

const PortfolioPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  const meta = data.site.siteMetadata;
  return (
    <Site>
      <main>
        <Helmet title={`Portfolio - ${meta.defaultTitle}`}>
          <meta
            name="twitter:title"
            content={`Portfolio - ${meta.defaultTitle}`}
          />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader
          title="Portfolio"
          subTitle="A selection of design and development projects"
        />
        <Section noBottomBorder>
          <Inner>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({node: post}) => (
                <Box mb={3} key={post.frontmatter.title}>
                  <Link to={post.fields.slug} style={{textDecoration: 'none'}}>
                    <PortfolioLinkItem
                      title={post.frontmatter.title}
                      subtitle={post.frontmatter.role}
                      projectKey={post.frontmatter.key}
                    />
                  </Link>
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
      query PortfolioPageQuery {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
          }
        }
        allMarkdownRemark(
          sort: {fields: [fields___date], order: DESC}
          filter: {fileAbsolutePath: {regex: "/work/.*\\.md$/"}}
        ) {
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
                role
                key
              }
            }
          }
        }
      }
    `}
    render={data => <PortfolioPage data={data} />}
  />
);

const StyledPortfolioLinkItem = styled(Flex)`
  flex-direction: column;
  border-radius: 4px;
  transition: all 0.3s ease-out;
  transform: scale(1);
  background-color: ${props => props.theme.colors.portfolioHeroBackground};
  background-image: url(${props => PROJECT_HERO_MAP[props.projectKey]});
  background-position: calc(100% + 240px) 24px;
  background-size: 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 52em) {
    background-position: calc(100% + 80px) 20px;
    background-size: 480px;
    transform: scale(1.02);
  }

  &:hover {
    transform: scale(1.04);
    background-position: calc(100% + 80px) 15px;
    box-shadow: 0 8px 13px 0 rgba(45, 47, 51, 0.03);
  }
`;

const PortfolioLinkItem = ({title, subtitle, projectKey}) => (
  <StyledPortfolioLinkItem px={3} pb={[3]} pt={[3, 4]} projectKey={projectKey}>
    <H3 m={0}>{title}</H3>
    <Text fontSize={1}>{subtitle}</Text>
  </StyledPortfolioLinkItem>
);
