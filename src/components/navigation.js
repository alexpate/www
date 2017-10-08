import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import {Flex, Box} from 'grid-styled';

const Logo = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
`;

const StyledNav = Flex.extend`
  width: 100%;
  padding: 32px 0;
`;

const Nav = Box.extend`
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
    color: #fff;
  }
`;

const Navigation = () => (
  <StyledNav justify="space-between">
    <Logo href="/">Alex Pate</Logo>
    <Nav>
      <ul>
        <li>
          <GatsbyLink to="/profile">Profile</GatsbyLink>
        </li>
        <li>
          <a href="https://twitter.com/alexjpate">Twitter</a>
        </li>
      </ul>
    </Nav>
  </StyledNav>
);

export default Navigation;
