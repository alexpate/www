import React from 'react';
import styled from 'styled-components';
import {fontSize, fontWeight} from 'styled-system';
import {Box} from 'grid-styled';

const Title = Box.extend`
  ${fontSize};
  ${fontWeight};
  margin: 0;
`;

const H1 = ({children, ...otherProps}) => (
  <Title is="h1" fontWeight="300" fontSize={[4, 5, 7]} {...otherProps}>
    {children}
  </Title>
);

const H2 = ({children, ...otherProps}) => (
  <Title is="h2" fontWeight="400" fontSize={[2, 4, 5]} {...otherProps}>
    {children}
  </Title>
);

const H3 = ({children, ...otherProps}) => (
  <Title is="h3" fontWeight="400" fontSize={[1, 2, 3]} {...otherProps}>
    {children}
  </Title>
);

const H4 = ({children, ...otherProps}) => (
  <Title is="h4" fontWeight="400" fontSize={[1, 2]} {...otherProps}>
    {children}
  </Title>
);

const Text = styled.p`
  margin: 0;
  font-weight: 400;
  line-height: 1.6em;
  color: ${props => (props.small ? '#abadbb' : 'unset')};
  font-size: ${props => (props.small ? '14px' : '18px')};
`;

export {H1, H2, H3, H4, Title, Text};
