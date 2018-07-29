import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Footer from 'components/footer';
import Header from 'components/header';
import Page from 'components/page';
import GlobalStyles from 'components/global-styles';

const sharedTheme = {
  fontWeight: [300, 400, 500, 600],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
};

const theme = {
  light: {
    ...sharedTheme,
    colors: {
      background: '#fcfdff',
      heading: '#494E72',
      text: '#4E6087',
      textHover: '#3336c7',
      toggleBackground: '#3336c7',
      toggleButton: '#fcfdff',
      border: '#e6e9ef',
      mutedBorder: '#e7eefd',
      link: '#3336c7',
      primary: '#00f',
    },
  },
  dark: {
    ...sharedTheme,
    colors: {
      background: '#121212',
      heading: '#fff',
      text: '#fff',
      textHover: '#3336c7',
      toggleBackground: '#3336c7',
      toggleButton: '#fcfdff',
      border: '#26282b',
      mutedBorder: '#292c33',
      link: '#766cf9',
      primary: '#766cf9',
    },
  },
};

const Inner = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: 0 16px;
`;

export default props => (
  <ThemeProvider theme={theme.dark}>
    <Page>
      <GlobalStyles />
      <Inner>
        <Header />
        {props.children()}
        <Footer />
      </Inner>
    </Page>
  </ThemeProvider>
);
