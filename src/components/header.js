import React from 'react';
import PureComponent from 'react-pure-render/component';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {Flex, Box} from 'grid-styled';

import {Text} from 'components/typography';

const Logo = styled('a')`
  display: block;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  border-bottom: 0;
  font-weight: 500;
  font-size: 14px;
`;

const StyledNav = Flex.extend`
  width: 100%;
  padding: 32px 0 24px;
  background-color: ${props => props.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #e7eefd;
`;

const Nav = Box.extend`
  display: flex;
  align-items: center;
  flex-shrink: 0;

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
    border-bottom: 0;

    &:hover {
      color: ${props => props.theme.colors.textHover};
    }
  }
`;

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userHasScrolled: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.scrollTitle
      ? global.window.addEventListener('scroll', this.handleScroll)
      : null;
  }

  componentWillUnmount() {
    this.props.scrollTitle
      ? global.window.removeEventListener('scroll', this.handleScroll)
      : null;
  }

  handleScroll() {
    const scrollTop = global.window.scrollY;

    this.setState({
      userHasScrolled: scrollTop > 300,
    });
  }

  render() {
    const {userHasScrolled} = this.state;
    return (
      <StyledNav justify="space-between">
        {this.props.scrollTitle && userHasScrolled ? (
          <Logo href="#top">{this.props.scrollTitle}</Logo>
        ) : (
          <Logo href="/">Alex Pate</Logo>
        )}
        <Nav>
          <ul>
            <li>
              <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
                <Link to="/">Home</Link>
              </Text>
            </li>
            <li>
              <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
                <Link to="/profile">Profile</Link>
              </Text>
            </li>
            <li>
              <Text fontSize={[1, 2]} style={{lineHeight: '1em'}}>
                <a href="https://twitter.com/alexjpate" target="_blank">
                  Twitter
                </a>
              </Text>
            </li>
          </ul>
        </Nav>
      </StyledNav>
    );
  }
}
