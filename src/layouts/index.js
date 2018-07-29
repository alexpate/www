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
      theme: 'light',
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
      syntax: {
        background: '#f4f7fd',
        text: '#586e75',
      },
    },
  },
  dark: {
    ...sharedTheme,
    colors: {
      theme: 'dark',
      background: '#121212',
      heading: '#fff',
      text: '#fff',
      textHover: '#3336c7',
      toggleBackground: '#3336c7',
      toggleButton: '#fcfdff',
      border: '#26282b',
      mutedBorder: '#292c33',
      link: '#757bff',
      primary: '#757bff',
      syntax: {
        background: '#1e1e1e',
        text: '#6f8186',
      },
    },
  },
};

const Inner = styled.div`
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
          <GlobalStyles />
          <Inner>
            <Header
              onThemeChange={this.onThemeChange}
              selectedTheme={selectedTheme}
            />
            {children()}
            <Footer />
          </Inner>
        </Page>
      </ThemeProvider>
    );
  }
}
