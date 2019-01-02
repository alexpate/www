import React from 'react';
import styled from 'styled-components';

import {Box} from 'components/system';

const StyledButton = styled(Box)`
  display: inline-block;
  padding: 8px 16px;
  background-color: #1da1f2;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
`;

export default props => (
  <StyledButton
    as="a"
    href="https://twitter.com/alexjpate"
    target="_blank"
    {...props}
  >
    @alexjpate on Twitter
  </StyledButton>
);
