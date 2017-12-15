import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Flex, Box} from 'grid-styled';

import Header from 'components/header';
import {H1, H2, H3, Text} from 'components/typography';

const ContentMain = styled.main`
  padding: 20px 0;
`;

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
  padding: 40px 0;
`;

const Profile = ({data}) => (
  <div>
    <ContentHeader>
      <H1>Profile</H1>
      <Text large>
        I'm Alex, a design engineer in London, currently working at Kalo. As a
        design engineer, I help close the gaps between design and code, whether
        this be through writing code, or by creating processes and tooling to
        assist other developers.
      </Text>
    </ContentHeader>
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

      <Box ml="25%">
        <H3 my={[1, 3]}>Writing</H3>
      </Box>
      <ProfileCard
        title=".net mag 📔"
        subTitle="2017"
        description="Side project of the month: JuniorJobs"
      />
      <ProfileCard
        title=".net mag 📗"
        subTitle="2016"
        description="How to get started with pattern libraries"
      />
      <ProfileCard
        title=".net mag 📘"
        subTitle="2014"
        description="Design Challenge"
      />
      <ProfileCard
        title="WebDesignerMag 📙"
        subTitle="2014"
        description="Spotlight Interview"
      />
      <Box ml="25%">
        <H3 my={[1, 3]}>Education</H3>
      </Box>
      <ProfileCard
        title="Southampton Solent University 👨‍🎓"
        subTitle="2012 - 2015"
        description="Graduated with a first class honours degree in Web Design"
      />
    </main>
  </div>
);

export default Profile;
