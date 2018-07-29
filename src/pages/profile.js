import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from 'components/page-header';
import {Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

export default ({data}) => {
  const meta = data.site.siteMetadata;
  return (
    <main>
      <Helmet title={`Profile - ${meta.defaultTitle}`}>
        <meta name="twitter:title" content={`Profile - ${meta.defaultTitle}`} />
        <meta name="twitter:description" content={meta.defaultDescription} />
      </Helmet>
      <PageHeader title="Profile" />
      <Section>
        <P>
          I’m Alex, a digital product designer based in London. I work with
          startups and agencies, straddling the line between design and code.
        </P>
        <P>
          I have a particular focus on the internal role that UI engineering
          plays, in regards to design systems, and creating tooling and
          processes to help product teams scale. I’m currently working at{' '}
          <a
            href="https://kalohq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kalo
          </a>, leading the development of our internal design system.
        </P>
      </Section>
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <P fontWeight={500}>Kalo (2017 - present)</P>
        <P>
          Lead the development of the internal design system, which is used
          across the product team by designers and engineers.
        </P>
        <P fontWeight={500}>Pusher (2015 - 2017)</P>
        <P>
          Joined the marketing team as a front-end developer where I helped work
          on evolving the brand, building external marketing sites, and
          representing the company at tech conferences around the world.
        </P>
        <P>
          Also worked with the product team implementing a new client dashboard,
          and creating an internal pattern library to speed up the development
          of future features.
        </P>
      </Section>

      <Section>
        <SectionTitle>Projects</SectionTitle>
        <Text>
          <a href="https://github.com/alexpate/awesome-design-systems">
            Awesome Design Systems - A collection of design systems
          </a>
        </Text>
        <Text>
          <a href="https://inward.audio">
            Inward Audio - Realtime techno/giphy visualisation
          </a>
        </Text>
        <Text>
          <a href="https://github.com/alexpate/flymark">
            Flymark - On the fly markdown conversion microservice
          </a>
        </Text>
      </Section>

      <Section>
        <SectionTitle>Writing</SectionTitle>
        <Text>Net mag - side project of the month: JuniorJobs (2017)</Text>
        <Text>Net mag - How to get started with pattern libraries (2016)</Text>
        <Text>Net mag - Design Challenge (2014)</Text>
        <Text>WebDesignerMag - Spotlight Interview (2014)</Text>
      </Section>
      <Section>
        <SectionTitle>Resume</SectionTitle>
        <Text>
          <a href="https://alexpate.s3.amazonaws.com/resume.pdf">
            Download as PDF
          </a>
        </Text>
      </Section>
    </main>
  );
};

export const pageQuery = graphql`
  query ProfileQuery {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
      }
    }
  }
`;
