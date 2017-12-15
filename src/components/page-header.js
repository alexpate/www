import React from 'react';
import {Box} from 'grid-styled';

import {H1} from 'components/typography';

const PageHeader = ({title, subTitle}) => (
  <Box pt={[24, 48]}>
    <H1>{title}</H1>
    <h4>{subTitle}</h4>
  </Box>
);
export default PageHeader;
