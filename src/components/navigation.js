import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {Flex, Box} from 'grid-styled';
import {Text} from 'components/typography';
import Toggle from 'components/toggle';

const Logo = styled('a')`
  display: block;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
`;

const StyledNav = Flex.extend`
  width: 100%;
  padding: 32px 0 16px;
  background-color: ${props => props.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${props => props.theme.colors.text};
`;

const Nav = Box.extend`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 0 8px;
    }
  }

  a {
    color: ${props => props.theme.colors.text};
  }
`;

const Navigation = ({onToggle, toggleIsOn}) => (
  <StyledNav justify="space-between">
    <Logo href="/">Alex Pate</Logo>
    <Nav>
      <ul>
        <li>
          <Toggle on={toggleIsOn} onToggle={onToggle} />
        </li>
        <li>
          <Link to="/profile">
            <Text margin={0} small>
              Profile
            </Text>
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/alexjpate">
            <Text margin={0} small>
              Twitter
            </Text>
          </Link>
        </li>
      </ul>
    </Nav>
  </StyledNav>
);

export default Navigation;
