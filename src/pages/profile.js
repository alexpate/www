import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

import PageHeader from 'components/page-header';
import {Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';
import Site from 'components/site';
import {Inner} from 'components/system';

const ProfilePage = ({data}) => {
  const meta = data.site.siteMetadata;
  return (
    <Site>
      <main>
        <Helmet title={`Profile - ${meta.defaultTitle}`}>
          <meta
            name="twitter:title"
            content={`Profile - ${meta.defaultTitle}`}
          />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader title="Profile" />
        <Inner>
          <Section>
            <P>
              I’m Alex, a UI Engineer based in London currently at{' '}
              <a
                href="https://monzo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Monzo
              </a>
              . Although being an engineer by trade, I straddle the line between
              design and code.
            </P>
            <P>
              I have a particular focus on scaling design teams building
              tooling, design systems, and processes.
            </P>
          </Section>
          <Section>
            <SectionTitle>Experience</SectionTitle>
            <P fontWeight={500}>Monzo (2019 - Present)</P>
            <P>
              Working in the design platform team, building tools to help the
              design discipline scale.
            </P>
            <P fontWeight={500}>Kalo (2017 - 2019)</P>
            <P>
              Lead the development of the internal design system, which is used
              across the product team by designers and engineers.
            </P>
            <P fontWeight={500}>Pusher (2015 - 2017)</P>
            <P>
              Joined the marketing team as a front-end developer where I helped
              work on evolving the brand, building external marketing sites, and
              representing the company at tech conferences around the world.
            </P>
            <P>
              Also worked with the product team implementing a new client
              dashboard, and creating an internal pattern library to speed up
              the development of future features.
            </P>
          </Section>

          <Section>
            <SectionTitle>Personal projects</SectionTitle>
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
            <Text>
              Net mag - How to get started with pattern libraries (2016)
            </Text>
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
        </Inner>
      </main>
    </Site>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProfileQuery {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
          }
        }
      }
    `}
    render={data => <ProfilePage data={data} />}
  />
);
