import React from 'react';
import styled from 'styled-components';
import {Text} from 'components/typography';

const StyledSpine = styled.div`
  width: 100vh;
  height: 4rem;
  position: fixed;
  top: -4rem;
  left: 0;
  z-index: 11;
  background-color: ${props => props.theme.colors.secondary};
  align-items: center;
  transform: rotateZ(90deg);
  transform-origin: bottom left;
  padding: 0 16px;
  display: none;

  @media screen and (min-width: 52em) {
    display: flex;
  }
`;

const Logo = styled(Text)`
  text-decoration: none;
  border-bottom: 0;
  color: ${props => props.theme.colors.primary};
`;

const Mo = styled(Text)`
  color: ${props => props.theme.colors.primary};
`;

const Flair = styled.span`
  margin-left: auto;
  transform: rotateZ(-90deg);
`;

export default () => (
  <StyledSpine>
    <a href="/">
      <Logo fontSize={1} fontWeight="500" mr={3} href="/">
        alexpate
      </Logo>
    </a>
    <Mo fontSize={1}>
      London Based UI/UX Engineer currently building design systems at Kalo
    </Mo>
    <Flair>
      <span role="img" aria-label="lion">
        🦁
      </span>
    </Flair>
  </StyledSpine>
);
