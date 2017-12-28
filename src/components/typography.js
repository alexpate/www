import React from 'react';
import styled from 'styled-components';
import {fontSize, fontWeight} from 'styled-system';
import {Box} from 'grid-styled';

const BaseType = Box.extend`
  ${fontSize};
  ${fontWeight};
  line-height: 1.2em;
  color: ${props => props.theme.colors.heading};
`;

export const H1 = ({children, ...otherProps}) => (
  <BaseType is="h1" fontWeight="400" fontSize={[5, 6, 7]} {...otherProps}>
    {children}
  </BaseType>
);

export const H2 = ({children, ...otherProps}) => (
  <BaseType is="h2" fontWeight="500" fontSize={[1, 2, 3]} {...otherProps}>
    {children}
  </BaseType>
);

export const H3 = ({children, ...otherProps}) => (
  <BaseType is="h3" fontWeight="500" fontSize={[1, 2]} {...otherProps}>
    {children}
  </BaseType>
);

export const H4 = ({children, ...otherProps}) => (
  <BaseType is="h4" fontWeight="400" fontSize={[1, 2]} {...otherProps}>
    {children}
  </BaseType>
);

export const Text = ({children, ...otherProps}) => (
  <BaseType
    is="p"
    fontWeight="400"
    fontSize={[1, 2, 3]}
    style={{lineHeight: '1.8em'}}
    {...otherProps}
  >
    {children}
  </BaseType>
);

export const P = styled(Text)`
  margin-bottom: 0.4em;
`;
