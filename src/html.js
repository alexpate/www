import React from 'react';

import favicon from 'static-assets/favicon.png';

export default function HTML(props) {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        dangerouslySetInnerHTML={{
          __html: require('!raw!../public/styles.css'),
        }}
      />
    );
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        <meta name="theme-color" content="#00f" />
        <meta name="author" content="Alex Pate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alexjpate" />
        <meta name="twitter:creator" content="@alexjpate" />
        <meta
          name="twitter:image"
          content="https://alexpate.uk/static/twitter-card.png"
        />

        {props.headComponents}
        {css}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: props.body}} />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('Built at ${Date(new Date().getTime())}')`,
          }}
        />
      </body>
    </html>
  );
}
