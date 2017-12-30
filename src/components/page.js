import styled, {injectGlobal} from 'styled-components';

import GraphikRegular from 'static-assets/fonts/graphik-regular.woff';
import GraphikRegular2 from 'static-assets/fonts/graphik-regular.woff2';
import GraphikMedium from 'static-assets/fonts/graphik-medium.woff';
import GraphikMedium2 from 'static-assets/fonts/graphik-medium.woff2';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikRegular2}) format('woff2'),
      url(${GraphikRegular}) format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Graphik Web';
    src: url(${GraphikMedium2}) format('woff2'),
      url(${GraphikMedium}) format('woff');
    font-weight: 500;
  }

  ::selection {
    background-color: #00f;
    color: #fff;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body {
    font-family: 'Graphik Web', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a {
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  p {
    margin: 0;
    padding: 0;
  }

  .content {
    a {
      border-bottom: 1px solid ${props => props.theme.colors.primary};

      &:visited {
        color: inherit;
      }

      &:active {
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
      }
    }
  }
`;

export default styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;
