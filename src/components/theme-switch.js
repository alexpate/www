import styled from 'styled-components';

import {Box} from 'components/system';

import iconThemeDark from 'static-assets/icons/theme-dark.svg';
import iconThemeLight from 'static-assets/icons/theme-light.svg';

const StyledSwitch = styled(Box)`
  width: 24px;
  height: 24px;
  background: url(${props =>
      props.value === 'dark' ? iconThemeDark : iconThemeLight})
    no-repeat center center / cover;
  cursor: pointer;
`;

export default StyledSwitch;
