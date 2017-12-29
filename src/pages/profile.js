import React from 'react';

import PageHeader from 'components/page-header';
import Header from 'components/header';
import {H3, Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

export default () => (
  <div>
    <Header />
    <PageHeader title="Profile" />
    <main>
      <Section>
        <P>
          I’m Alex, a UI engineer based in London. I work with startups and
          agencies, straddling the line between design and code.
        </P>
        <P>
          I have a particular focus on the internal role that UI engineering
          plays, in regards to design systems, and creating tooling and
          processes to help product teams scale. I’m currently working at{' '}
          <a href="https://kalohq.com">Kalo</a>, leading the development of our
          internal design system.
        </P>
      </Section>
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <P>
          As the first UI engineering hire at Kalo (2017 - present), I have been
          leading the development of our internal design system.
        </P>
        <P>
          Before that, I was a front-end developer at Pusher (2015 - 2017),
          where I helped work on the development of the new client dashboard,
          the new marketing website, as well as creating an internal pattern
          library.
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
        <SectionTitle>Education</SectionTitle>
        <H3>Southampton Solent University (2012 - 2015)</H3>
        <Text>Graduated with a first class honours degree in Web Design</Text>
      </Section>
    </main>
  </div>
);
