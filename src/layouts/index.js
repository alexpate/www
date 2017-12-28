import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import PureComponent from 'react-pure-render/component';

import '../css/core.css';

if (typeof window === 'undefined') {
  global.window = {};
}

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

export default props => {
  const themes = {
    dark: {
      fontWeight: [300, 400, 500, 600],
      colors: {
        background: '#3336c7',
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
        toggleBackground: '#3336c7',
        toggleButton: '#fcfdff',
        border: '#e6e9ef',
        link: '#3336c7',
      },
    },
  };
  return (
    <ThemeProvider theme={themes.light}>
      <Page>
        <Inner>
          <Header />
          {props.children()}
          <Footer />
        </Inner>
      </Page>
    </ThemeProvider>
  );
};
