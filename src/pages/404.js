import React from 'react';
import styled, {keyframes} from 'styled-components';

import Site from 'components/site';
import {Box, Inner} from 'components/system';
import {Text, H1} from 'components/typography';

const steps = [
  0,
  5,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
];

const keyframesGlitch = keyframes`
  ${steps.map(
    step =>
      `${step}% { clip:rect(${Math.floor(
        Math.random() * 100
      )}px, 9999px, ${Math.floor(Math.random() * 100)}px, 0)}`
  )}
`;

const Glitch = styled(H1)`
  color: ${props => props.theme.colors.secondary};
  position: relative;
  display: inline;

  &:after,
  &:before {
    width: 100%;
    text-align: center;
    background: ${props => props.theme.colors.background};
    clip: rect(0, 900px, 0, 0);
    color: ${props => props.theme.colors.secondary};
    content: "${props => props.children}";
    overflow: hidden;
    position: absolute;
    top: 0;
  }

  &:before {
    animation: ${keyframesGlitch} 3s infinite linear alternate-reverse;
    left: -2px;
    text-shadow: 1px 0 #00f;
  }

  &:after {
    animation: ${keyframesGlitch} 2s infinite linear alternate-reverse;
    left: 2px;
    text-shadow: -1px 0 #f00;
  }
}
`;

export default () => (
  <Site>
    <Box as="main" pt={[24, 48]}>
      <Inner>
        <Glitch>404 Page Not Found</Glitch>
        <Text>Sorry, nothing could be found</Text>
      </Inner>
    </Box>
  </Site>
);
