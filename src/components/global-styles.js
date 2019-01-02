import {createGlobalStyle} from 'styled-components';

import GraphikRegular from 'static-assets/fonts/graphik-regular.woff';
import GraphikRegular2 from 'static-assets/fonts/graphik-regular.woff2';
import GraphikMedium from 'static-assets/fonts/graphik-medium.woff';
import GraphikMedium2 from 'static-assets/fonts/graphik-medium.woff2';
import GraphikBold from 'static-assets/fonts/graphik-bold.woff';
import GraphikBold2 from 'static-assets/fonts/graphik-bold.woff2';

export default createGlobalStyle`
    @font-face {
      font-family: 'graphik-001-web';
      src: url(${GraphikRegular2}) format('woff2'),
        url(${GraphikRegular}) format('woff');
      font-weight: 400;
    }

    @font-face {
      font-family: 'graphik-001-web';
      src: url(${GraphikMedium2}) format('woff2'),
        url(${GraphikMedium}) format('woff');
      font-weight: 500;
    }

    @font-face {
      font-family: 'graphik-001-web';
      src: url(${GraphikBold2}) format('woff2'),
        url(${GraphikBold}) format('woff');
      font-weight: 700;
    }

    ::selection {
      background-color: ${props => props.theme.colors.secondary};
      color: #fff;
    }

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }

    html {
      background-color: ${props => props.theme.colors.primary};
    }

    body {
      font-family: 'graphik-001-web', system-ui, sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }

    a {
      text-decoration: none;
      color: inherit;
      text-decoration: underline;
    }

    p {
      margin: 0;
      padding: 0;
    }

  `;
