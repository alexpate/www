import React from 'react';
import {Flex} from 'grid-styled';

const CURRENT_YEAR = new Date().getFullYear();

const StyledFooter = Flex.extend`
  width: 100%;
  padding: 16px 0 32px;
  margin-top: 40px;
  border-top: 1px solid ${props => props.theme.colors.mutedBorder};
  font-size: 14px;
  color: ${props => props.theme.colors.text};

  a {
    margin: 0 8px;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    border-bottom: 0;
  }
`;

const Footer = () => (
  <StyledFooter is="footer">
    <span itemScope="" itemType="http://schema.org/Organization">
      <link itemProp="url" href="https://alexpate.uk" />
      &copy; {CURRENT_YEAR} -
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
  </StyledFooter>
);

export default Footer;
