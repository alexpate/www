import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Flex, Box} from 'grid-styled';

import Header from 'components/header';
import {H1, H2, H3, Text} from 'components/typography';

const Main = styled.main`
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

const Profile = ({data}) => (
  <div>
    <Header>
      <Box width={1 / 2}>
        <H1>Profile</H1>
        <Text large>
          I'm Alex, a design engineer in London, currently working at Kalo. As a
          design engineer, I help close the gaps between design and code,
          whether this be through writing code, or by creating processes and
          tooling to assist other developers.
        </Text>
      </Box>
    </Header>
    <Main>
      <Box ml="25%">
        <H3 mb={[1, 3]}>Experience</H3>
      </Box>
      <ProfileCard
        title="Kalo 🙆‍♂️"
        subTitle="2015"
        description="Closing the seams between design and engineering."
      />
      <ProfileCard
        title="Pusher 📲"
        subTitle="2015 - 2017"
        description="Worked in London for Pusher as a front-end designer. Key projects include the redesign of the client dashboard, and building out the new marketing site. Was also fortunate enough to attend several international developer conferences in a developer relations capacity."
      />
      <ProfileCard
        title="Rareloop ∞"
        subTitle="2015"
        description="Creative developer at Rareloop two days a week whilst finishing my degree. Worked on several live client briefs."
      />
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
    </Main>
  </div>
);

export default Profile;
