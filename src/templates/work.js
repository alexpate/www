import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import styled from 'styled-components';

import Site from 'components/site';
import {Text} from 'components/typography';
import {Inner, Flex} from 'components/system';
import ProjectHeader from 'components/project-header';
import Markdown from 'components/markdown';
import FollowButton from 'components/follow-button';

const IconOpenInNew = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="currentColor"
    css={{verticalAlign: 'text-bottom', marginLeft: 4}}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

const ProjectMetaGrid = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 24px 0 16px;
  transition: border 0.2s ease-out;
`;

const StyledProjectMetaGridItem = styled(Flex)`
  flex-direction: column;
  position: relative;
  flex-basis: auto;

  @media screen and (min-width: 52em) {
    & + &:before {
      content: '';
      background-color: rgba(0, 0, 0, 0.2);
      left: 0;
      position: absolute;
      transition: background 0.2s ease-out;
      left: -22px;
      height: 60%;
      width: 1px;
      top: 20%;
    }
  }
`;

const ProjectMetaGridItem = ({title, children}) => (
  <StyledProjectMetaGridItem mb={[1, 0]} flex={1} py={[0, 1]}>
    <Text textTransform="uppercase" fontSize={0} fontWeight="500">
      {title}
    </Text>
    <Text fontSize={1}>{children}</Text>
  </StyledProjectMetaGridItem>
);

export default function WorkTemplate({data}) {
  const {markdownRemark: post} = data;
  const meta = data.site.siteMetadata;

  const {title, year, role, url, key: projectKey} = post.frontmatter;

  return (
    <Site>
      <main>
        <article>
          <Helmet title={`${title} - ${meta.defaultTitle}`}>
            <meta
              name="twitter:title"
              content={`${title} - ${meta.defaultTitle}`}
            />
            <meta name="twitter:description" content={post.excerpt} />
          </Helmet>
          <ProjectHeader title={title} projectKey={projectKey}>
            <ProjectMetaGrid py={[1, 0]}>
              <ProjectMetaGridItem title="Year">{year}</ProjectMetaGridItem>
              <ProjectMetaGridItem title="Role">{role}</ProjectMetaGridItem>
              <ProjectMetaGridItem title="Link">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: 'none'}}
                  >
                    View project <IconOpenInNew />
                  </a>
                ) : (
                  'No public link'
                )}
              </ProjectMetaGridItem>
            </ProjectMetaGrid>
          </ProjectHeader>
          <Inner>
            <Markdown
              dangerouslySetInnerHTML={{__html: post.html}}
              id="top"
              className="content"
            />
            <FollowButton mt={1} />
          </Inner>
        </article>
      </main>
    </Site>
  );
}

export const pageQuery = graphql`
  query WorkPostByPath($slug: String!) {
    site {
      siteMetadata {
        author
        defaultTitle
        defaultDescription
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        role
        year
        url
        key
      }
    }
  }
`;
