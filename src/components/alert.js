import React from 'react';
import {Box} from 'grid-styled';

const StyledAlert = Box.extend`
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  line-height: 1.6em;
  color: ${props => props.theme.colors.primary};
`;

export default props => (
  <StyledAlert px={[8, 16]} py={[16]} my={[8, 16]}>
    {props.children}
  </StyledAlert>
);
