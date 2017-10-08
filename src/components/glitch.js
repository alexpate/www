import React from 'react';
import styled from 'styled-components';

import Gradient from './glitch_gradient';

const Glitch = styled.div`
  width: 500px;
  height: 400px;
  -webkit-clip-path: polygon(41% 16%, 100% 0, 100% 100%, 4% 88%);
  clip-path: polygon(41% 16%, 100% 0, 100% 100%, 4% 88%);
  background-image: url(${Gradient});
  background-size: 200%;
  background-position: center;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

export default Glitch;
