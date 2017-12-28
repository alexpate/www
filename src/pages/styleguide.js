import React from 'react';
import styled from 'styled-components';

import PageHeader from 'components/page-header';
import {H1, H2, H3, Text} from 'components/typography';
import Toggle from 'components/toggle';

const Section = styled.section`
  padding: 20px 0;
`;

const Profile = ({data}) => (
  <div>
    <PageHeader title="Components" />
    <main>
      <Section>
        <H1>Primary title</H1>
        <H2>Secondary title</H2>
        <H3>Tertiary title</H3>
        <Text>Standard paragraph copy</Text>
      </Section>
      <Section>
        <Toggle on={true} onToggle={() => console.log('toggle')} />
      </Section>
    </main>
  </div>
);

export default Profile;
