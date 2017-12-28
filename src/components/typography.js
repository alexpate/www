import React from 'react';
import styled from 'styled-components';
import {fontSize, fontWeight} from 'styled-system';
import {Box} from 'grid-styled';

const Title = Box.extend`
  ${fontSize};
  ${fontWeight};
  margin: 0;
  line-height: 1.2em;
  color: ${props => props.theme.colors.heading};
`;

export const H1 = ({children, ...otherProps}) => (
  <Title is="h1" fontWeight="400" fontSize={[4, 5, 7]} {...otherProps}>
    {children}
  </Title>
);

export const H2 = ({children, ...otherProps}) => (
  <Title is="h2" fontWeight="500" fontSize={[2, 2, 3]} {...otherProps}>
    {children}
  </Title>
);

export const H3 = ({children, ...otherProps}) => (
  <Title is="h3" fontWeight="500" fontSize={[1, 2]} {...otherProps}>
    {children}
  </Title>
);

export const H4 = ({children, ...otherProps}) => (
  <Title is="h4" fontWeight="400" fontSize={[1, 2]} {...otherProps}>
    {children}
  </Title>
);

export const Text = styled.p`
  font-weight: 400;
  line-height: 1.8em;
  color: ${props => props.theme.colors.text};
  font-size: ${props => (props.small ? '14px' : '18px')};

  a {
    color: ${props => props.theme.colors.link};
  }
`;

export const P = styled(Text)`
  margin-bottom: 0.4em;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;
