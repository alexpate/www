/* @flow */
import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, {ThemeProvider} from 'styled-components';
import Navigation from 'components/navigation';
import Footer from 'components/footer';

import 'css/core.css';

const theme = {
  fontWeight: [300, 400, 500, 600],
  colors: {
    black: '#111',
    blue: '#07c',
  },
};

const Page = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Template = props => {
  const {location, children} = props;

  const isRoot = location.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Helmet
          title="HomePage"
          meta={[
            {name: 'description', content: 'Sample'},
            {name: 'keywords', content: 'sample, something'},
          ]}
        />
        <Navigation />
        {children()}
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default Template;
