import React from 'react';
import styled from 'styled-components';

import {Box} from 'components/system';
import {H2} from 'components/typography';

const StyledSection = styled(Box)`
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`;

export default ({children, ...otherProps}) => (
  <StyledSection as="section" mb={[2, 2, 3]} pb={[2, 2, 3]} {...otherProps}>
    {children}
  </StyledSection>
);

export const SectionTitle = ({children}) => <H2 mb={[2, 2, 2]}>{children}</H2>;
