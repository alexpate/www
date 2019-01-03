import React from 'react';

import {Box, Inner} from 'components/system';
import {H1, Text} from 'components/typography';

const PageHeader = ({title, subTitle}) => (
  <Inner>
    <Box pt={[24, 48]} pb={[8, 16]}>
      <H1>{title}</H1>
      {subTitle ? <Text fontSize={[0, 1, 2]}>{subTitle}</Text> : null}
    </Box>
  </Inner>
);
export default PageHeader;
