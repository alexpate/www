import React from 'react';
import {Box} from 'grid-styled';

import {H1, SubTitle} from 'components/typography';

const PageHeader = ({title, subTitle}) => (
  <Box py={[24, 48]}>
    <H1>{title}</H1>
    <SubTitle>{subTitle}</SubTitle>
  </Box>
);
export default PageHeader;
