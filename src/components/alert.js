import React from 'react';
import {Box} from 'grid-styled';

const StyledAlert = Box.extend`
  width: 100%;
  border-radius: 4px;
  background-color: ${props =>
    props.type === 'warning' ? '#ffece1' : '#e9f7ff'};
  font-size: 14px;
  line-height: 1.6em;
  color: ${props => props.theme.colors.text};
`;

export default props => (
  <StyledAlert px={[8, 16]} py={[16, 24]} my={[8, 16]} type={props.type}>
    {props.children}
  </StyledAlert>
);
