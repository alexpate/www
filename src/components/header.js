import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import {Flex, Box, Inner} from 'components/system';
import {Text} from 'components/typography';

import StyledSwitch from './theme-switch';

const StyledNav = styled(Flex)`
  width: 100%;
  padding: 32px 0 24px;
  background-color: ${props => props.theme.colors.primary};
  z-index: 10;
`;

const Nav = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 0 8px;

      &:first-of-type {
        padding-left: 0;
      }
    }
  }

  a {
    color: ${props => props.theme.colors.text};
    border-bottom: 0;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.link};
    }
  }
`;

export default ({onThemeChange, selectedTheme}) => (
  <StyledNav as="header" justify="space-between">
    <Inner>
      <Nav as="nav">
        <ul>
          <li>
            <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
              <Link to="/">Home</Link>
            </Text>
          </li>
          <li>
            <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
              <Link to="/profile/">Profile</Link>
            </Text>
          </li>
          <li>
            <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
              <a
                href="https://twitter.com/alexjpate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Text>
          </li>
        </ul>
        <StyledSwitch value={selectedTheme} onClick={onThemeChange} />
      </Nav>
    </Inner>
  </StyledNav>
);
