import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Flex, Box} from 'grid-styled';

import PageHeader from '../components/page-header';
import {H1, H2, H3, Text} from '../components/typography';

const StyledProfileCard = styled.section`
  padding: 8px 0;
`;

const StyledProfileCardTitle = Box.extend`
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  opacity: 0.6;

  h2 {
    margin: 0;
  }
`;

const StyledProfileCardDescription = Box.extend`
  color: inherit;
`;

const ProfileCard = ({title, subTitle, description}) => {
  return (
    <StyledProfileCard>
      <Flex>
        <StyledProfileCardTitle width={1 / 4} pr={4}>
          <H3>{title}</H3>
          <Text small>{subTitle}</Text>
        </StyledProfileCardTitle>
        <StyledProfileCardDescription width={3 / 4}>
          <Text>{description}</Text>
        </StyledProfileCardDescription>
      </Flex>
    </StyledProfileCard>
  );
};

const Section = styled.section`
  padding: 20px 0;
`;

const Profile = ({data}) => (
  <div>
    <PageHeader title="Profile" />
    <main>
      <Box>
        <H3>Experience</H3>
      </Box>
      <Section>
        <H3>Kalo (2017 - present)</H3>
        <Text>Closing the seams between design and engineering.</Text>
      </Section>
      <Section>
        <H3>Pusher (2015 - 2017)</H3>
        <Text>
          Worked in London for Pusher as a front-end designer. Key projects
          include the redesign of the client dashboard, and building out the new
          marketing site. Was also fortunate enough to attend several
          international developer conferences in a developer relations capacity.
        </Text>
      </Section>
      <Section>
        <H3>Rareloop ∞ (2015)</H3>
        <Text>
          Creative developer at Rareloop two days a week whilst finishing my
          degree. Worked on several live client briefs.
        </Text>
      </Section>
      <Section>
        <H3>Writing</H3>
        <ul>
          <li>
            <Text>.net mag - side project of the month: JuniorJobs (2017)</Text>
          </li>
          <li>
            <Text>
              .net mag - How to get started with pattern libraries (2016)
            </Text>
          </li>
          <li>
            <Text>.net mag - Design Challenge (2014)</Text>
          </li>
          <li>
            <Text>WebDesignerMag - Spotlight Interview (2014)</Text>
          </li>
        </ul>
      </Section>
      <Box>
        <H3>Education</H3>
      </Box>
      <H3>Southampton Solent University</H3>
      <Text>Graduated with a first class honours degree in Web Design</Text>
    </main>
  </div>
);

export default Profile;
