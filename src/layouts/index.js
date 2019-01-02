import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Footer from 'components/footer';
import Header from 'components/header';
import Page from 'components/page';
import Spine from 'components/spine';
import GlobalStyles from 'components/global-styles';

const sharedTheme = {
  fontWeight: [300, 400, 500, 600],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  space: [4, 8, 16, 32, 64, 128],
};

const theme = {
  light: {
    ...sharedTheme,
    colors: {
      theme: 'light',
      primary: '#d9d4d4',
      secondary: '#121212',

      background: '#efecec',
      spine: '#121212',
      heading: '#121212',
      text: '#121212',
      textHover: '#3336c7',
      toggleBackground: '#3336c7',
      toggleButton: '#fcfdff',
      border: '#e6e9ef',
      mutedBorder: '#e7eefd',
      link: '#2B32FD',
      syntax: {
        background: '#ccc5c5',
        text: '#586e75',
      },
    },
  },
  dark: {
    ...sharedTheme,
    colors: {
      theme: 'dark',
      primary: '#121212',
      secondary: '#d9d4d4',

      background: '#121212',
      spine: '#efecec',
      heading: '#fff',
      text: '#fff',
      textHover: '#3336c7',
      toggleBackground: '#3336c7',
      toggleButton: '#fcfdff',
      border: '#26282b',
      mutedBorder: '#292c33',
      link: '#8C13ED',
      // primary: '#ed13eb',
      syntax: {
        background: '#1e1e1e',
        text: '#6f8186',
      },
    },
  },
};

export const Inner = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: 0 16px;
`;

export default class Index extends React.Component {
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
        selectedTheme: 'dark',
      };
    }

    this.onThemeChange = this.onThemeChange.bind(this);
  }

  onThemeChange() {
    const newSelectedTheme =
      this.state.selectedTheme === 'dark' ? 'light' : 'dark';
    this.setState({
      selectedTheme: newSelectedTheme,
    });

    if (global.window && global.window.localStorage) {
      global.window.localStorage.setItem(
        'theme',
        JSON.stringify(newSelectedTheme)
      );
    }
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
          {children()}
          <Inner>
            <Footer />
          </Inner>
        </Page>
      </ThemeProvider>
    );
  }
}
