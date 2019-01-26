import React from 'react';
import styled from 'styled-components';

import {Box} from 'components/system';
import {H2} from 'components/typography';

const StyledSection = styled(Box)`
  border-bottom: ${props =>
    !props.noBottomBorder && `2px solid ${props.theme.colors.line}`};
`;

export default ({children, noBottomBorder, ...otherProps}) => (
  <StyledSection
    as="section"
    mb={[2, 2, 3]}
    pb={[2, 2, 3]}
    noBottomBorder={noBottomBorder}
    {...otherProps}
  >
    {children}
  </StyledSection>
);

export const SectionTitle = ({children}) => <H2 mb={[2, 2, 2]}>{children}</H2>;
