import React from 'react';
import {ThemeProvider} from 'styled-components';

import Footer from 'components/footer';
import Header from 'components/header';
import Page from 'components/page';
import Spine from 'components/spine';
import {Inner} from 'components/system';
import GlobalStyles from 'components/global-styles';

import {theme} from '../constants';

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
