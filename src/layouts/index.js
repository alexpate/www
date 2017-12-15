import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from 'components/header';
import Footer from 'components/footer';
import PureComponent from 'react-pure-render/component';

import 'css/core.css';

const Page = styled.div`
  background-color: ${props => props.theme.colors.background};
`;

const Inner = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: 0 16px;
`;

export default class Template extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: JSON.parse(global.localStorage.getItem('theme')),
    };

    this.onThemeToggle = this.onThemeToggle.bind(this);
  }

  onThemeToggle() {
    const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({theme: nextTheme});
    global.localStorage.setItem('theme', JSON.stringify(nextTheme.toString()));
  }

  render() {
    const {location, children} = this.props;

    const isRoot = location.pathname === '/';

    const themes = {
      dark: {
        fontWeight: [300, 400, 500, 600],
        colors: {
          background: '#3336c7',
          heading: '#fff',
          text: '#fff',
          toggleBackground: '#fcfdff',
          toggleButton: '#3336c7',
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
        },
      },
    };
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <Page>
          <Inner>
            <Header
              toggleIsOn={this.state.theme === 'dark'}
              onToggle={this.onThemeToggle}
            />
            {children()}
            <Footer />
          </Inner>
        </Page>
      </ThemeProvider>
    );
  }
}
