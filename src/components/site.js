import React from 'react';
import {ThemeProvider} from 'styled-components';

import Footer from 'components/footer';
import Header from 'components/header';
import Page from 'components/page';
import Spine from 'components/spine';
import {Inner} from 'components/system';
import GlobalStyles from 'components/global-styles';

const sharedTheme = {
  fontWeight: [300, 400, 500, 600],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  space: [0, 8, 16, 32, 64, 128],
};

const theme = {
  light: {
    ...sharedTheme,
    colors: {
      theme: 'light',
      primary: '#e7e2e2',
      secondary: '#121212',
      link: '#2b32fd',
      syntax: {
        background: '#e1d7d7',
        text: '#394244',
      },
    },
  },
  dark: {
    ...sharedTheme,
    colors: {
      theme: 'dark',
      primary: '#121212',
      secondary: '#e7e2e2',
      link: '#2b32fd',
      syntax: {
        background: '#1e1e1e',
        text: '#6f8186',
      },
    },
  },
};

export default class Site extends React.Component {
  constructor(props) {
    super(props);

    if (
      global.window &&
      global.window.localStorage &&
      global.window.localStorage.getItem('theme')
    ) {
      this.state = {
        selectedTheme: JSON.parse(global.window.localStorage.getItem('theme')),
      };
    } else {
      this.state = {
        selectedTheme: 'light',
      };
    }

    this.onThemeChange = this.onThemeChange.bind(this);
  }

  onThemeChange() {
    this.setState(
      prevState => ({
        selectedTheme: prevState.selectedTheme === 'dark' ? 'light' : 'dark',
      }),
      () => {
        if (global.window && global.window.localStorage) {
          global.window.localStorage.setItem(
            'theme',
            JSON.stringify(this.state.selectedTheme)
          );
        }
      }
    );
  }

  render() {
    const {children} = this.props;
    const {selectedTheme} = this.state;
    return (
      <ThemeProvider theme={theme[selectedTheme]}>
        <Page>
          <Spine />
          <GlobalStyles />
          <Header
            onThemeChange={this.onThemeChange}
            selectedTheme={selectedTheme}
          />
          {children}
          <Inner>
            <Footer />
          </Inner>
        </Page>
      </ThemeProvider>
    );
  }
}
