import React from 'react';
import styled from 'styled-components';

import {Box} from 'components/system';

const StyledAlert = styled(Box)`
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  line-height: 1.6em;
  color: ${props => props.theme.colors.primary};
`;

export default ({children}) => (
  <StyledAlert px={[8, 16]} py={[16]} my={[8, 16]}>
    {children}
  </StyledAlert>
);
