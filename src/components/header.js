import React from 'react';
import styled from 'styled-components';
import {Box} from 'grid-styled';

import {H1} from 'components/typography';

const Header = ({children, ...otherProps}) => (
  <Box py={[20, 50, 100]} {...otherProps}>
    {children}
  </Box>
);

export default Header;
