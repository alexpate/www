import React from 'react';
import styled from 'styled-components';
import {Box} from 'grid-styled';
import {H2} from 'components/typography';

const StyledSection = Box.extend`
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`;

export default ({children, ...otherProps}) => (
  <StyledSection is="section" mb={[2, 2, 3]} pb={[2, 2, 3]} {...otherProps}>
    {children}
  </StyledSection>
);

const StyledSectionTitle = styled(H2)`
  color: ${props => props.theme.colors.primary};
`;

export const SectionTitle = props => (
  <StyledSectionTitle mb={[2, 2, 2]}>{props.children}</StyledSectionTitle>
);
