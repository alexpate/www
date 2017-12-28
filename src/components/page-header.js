import React from 'react';
import {Box} from 'grid-styled';

import {H1, SubTitle} from 'components/typography';

const PageHeader = ({title, subTitle}) => (
  <Box pt={[24, 48]} pb={[8, 16]}>
    <H1>{title}</H1>
    <SubTitle>{subTitle}</SubTitle>
  </Box>
);
export default PageHeader;
