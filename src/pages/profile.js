import React from 'react';
import styled from 'styled-components';

import PageHeader from 'components/page-header';
import Header from 'components/header';
import {H3, H2, Text, P} from 'components/typography';

const Section = styled.section`
  padding: 20px 0;
  border-bottom: 2px solid ${props => props.theme.colors.flare};
  margin-bottom: 36px;
  padding-bottom: 36px;
`;

const SectionTitle = styled(H2)`
  color: ${props => props.theme.colors.flare};
  margin-bottom: 16px;
`;

export default () => (
  <div>
    <Header />
    <PageHeader title="Profile" />
    <main>
      <Section>
        <P>
          I'm Alex, a design engineer in London, currently working at Kalo. As a
          design engineer, I help close the gaps between design and code,
          whether this be through writing code, or by creating processes and
          tooling to assist other developers.
        </P>
        <P>
          Although I spend most of my day working with the front-end and design,
          I always enjoy playing around with server-side tech. But most of all,
          I enjoy making tools. You can find me on Twitter, CodePen, GitHub, and
          Dribbble.
        </P>
      </Section>
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <Text>
          As the first UI engineering hire at Kalo (2017 - present), I am
          responsible for ensuring that the highest standards are kept in the
          platform. Before that, I worked in London for Pusher (2015 - 2017) as
          a front-end designer. Key projects include the redesign of the client
          dashboard, and building out the new marketing site. Was also fortunate
          enough to attend several international developer conferences in a
          developer relations capacity.
        </Text>
        <Text>
          Creative developer at Rareloop (2015) two days a week whilst finishing
          my degree. Worked on several live client briefs.
        </Text>
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
        <SectionTitle>Education</SectionTitle>
        <H3>Southampton Solent University (2012 - 2015)</H3>
        <Text>Graduated with a first class honours degree in Web Design</Text>
      </Section>
    </main>
  </div>
);
