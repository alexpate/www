import React from 'react';
import styled from 'styled-components';
import {Box} from 'grid-styled';
import {H2} from 'components/typography';

const StyledSection = Box.extend`
  border-bottom: 2px solid ${props => props.theme.colors.flare};
`;

export default props => (
  <StyledSection mb={[2, 2, 3]} pb={[2, 2, 3]}>
    {props.children}
  </StyledSection>
);

const StyledSectionTitle = styled(H2)`
  color: ${props => props.theme.colors.flare};
`;

export const SectionTitle = props => (
  <StyledSectionTitle mb={[2, 2, 3]}>{props.children}</StyledSectionTitle>
);
