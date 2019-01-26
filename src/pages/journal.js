import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql, Link} from 'gatsby';

import PageHeader from 'components/page-header';
import {Text} from 'components/typography';
import Section from 'components/section';
import Site from 'components/site';
import {Inner, Box} from 'components/system';

import {PostDate} from 'pages/index';

const PortfolioPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  const meta = data.site.siteMetadata;
  return (
    <Site>
      <main>
        <Helmet title={`Journal - ${meta.defaultTitle}`}>
          <meta
            name="twitter:title"
            content={`Journal - ${meta.defaultTitle}`}
          />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader
          title="Journal"
          subTitle="Musings on design, development, and startups"
        />
        <Section noBottomBorder>
          <Inner>
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
      query JournalPageQuery {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
          }
        }
        allMarkdownRemark(
          sort: {fields: [fields___date], order: DESC}
          filter: {fileAbsolutePath: {regex: "/journal/.*\\.md$/"}}
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
              }
            }
          }
        }
      }
    `}
    render={data => <PortfolioPage data={data} />}
  />
);
