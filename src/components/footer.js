import React from 'react';
import styled from 'styled-components';
import {Flex} from 'grid-styled';

import {H1} from 'components/typography';

const StyledFooter = Flex.extend`
  width: 100%;
  padding: 32px 0;
  margin-top: 40px;
  border-top: 1px solid #3f4252;
  font-size: 14px;

  a {
    margin: 0 8px;
    color: #fff;
    text-decoration: none;
  }
`;

const currentYear = new Date().getFullYear();

const Footer = () => (
  <StyledFooter>
    <span itemScope="" itemType="http://schema.org/Organization">
      <link itemProp="url" href="https://alexpate.uk" />
      &copy; {currentYear} -
      <a href="https://twitter.com/alexjpate" rel="me" itemProp="sameAs">
        Twitter
      </a>
      -
      <a href="http://codepen.io/alexpate" rel="me" itemProp="sameAs">
        CodePen
      </a>
      -
      <a href="https://dribbble.com/alexpate" rel="me" itemProp="sameAs">
        Dribbble
      </a>
      -
      <a href="http://github.com/alexpate/alexpate.uk">View Source</a>
    </span>
  </StyledFooter>
);

export default Footer;
