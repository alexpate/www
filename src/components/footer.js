import React from 'react';
import styled from 'styled-components';

import {Flex} from 'components/system';

const CURRENT_YEAR = new Date().getFullYear();

const StyledFooter = styled(Flex)`
  width: 100%;
  padding: 16px 0 32px;
  margin-top: 40px;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};

  a {
    margin: 0 8px;
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    border-bottom: 0;
  }
`;

const Footer = () => (
  <StyledFooter as="footer">
    <Flex
      justifyContent="space-between"
      width="100%"
      itemScope=""
      itemType="http://schema.org/Organization"
    >
      <link itemProp="url" href="https://alexpate.uk" />
      &copy; 2014 - {CURRENT_YEAR}
      <span>
        <a
          target="_blank"
          rel="noopener noreferrer me"
          href="https://twitter.com/alexjpate"
          itemProp="sameAs"
        >
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer me"
          href="http://github.com/alexpate"
          itemProp="sameAs"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://github.com/alexpate/alexpate.uk"
        >
          View Source
        </a>
      </span>
    </Flex>
  </StyledFooter>
);

export default Footer;
