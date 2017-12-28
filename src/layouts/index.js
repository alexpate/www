import React from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import Header from 'components/header';
import Footer from 'components/footer';

import 'css/core.css';

import GraphikRegular from 'static-assets/fonts/graphik-regular.woff';
import GraphikRegular2 from 'static-assets/fonts/graphik-regular.woff2';
import GraphikMedium from 'static-assets/fonts/graphik-medium.woff';
import GraphikMedium2 from 'static-assets/fonts/graphik-medium.woff2';

const Page = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: 0 16px;
`;

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
`;

export default props => {
  const themes = {
    dark: {
      fontWeight: [300, 400, 500, 600],
      colors: {
        background: '#0b1023',
        heading: '#fff',
        text: '#fff',
        toggleBackground: '#fcfdff',
        toggleButton: '#3336c7',
        border: '#5657e0',
        link: '#fff',
      },
    },
    light: {
      fontWeight: [300, 400, 500, 600],
      colors: {
        background: '#fcfdff',
        heading: '#494E72',
        text: '#4E6087',
        textHover: '#3336c7',
        toggleBackground: '#3336c7',
        toggleButton: '#fcfdff',
        border: '#e6e9ef',
        link: '#3336c7',
        flare: '#00f',
      },
    },
  };
  return (
    <ThemeProvider theme={themes.light}>
      <Page>
        <Inner>
          {props.children()}
          <Footer />
        </Inner>
      </Page>
    </ThemeProvider>
  );
};
