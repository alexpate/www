import styled from 'styled-components';

import {Box} from 'components/system';

const Markdown = styled(Box)`
  color: ${props => props.theme.colors.secondary};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  table {
    display: table;
    margin: 24px 0;
    width: 100%;

    th {
      padding: 8px 10px;
      background: rgba(0, 0, 0, 0.1);
      font-size: 16px;
      font-weight: 600;
      text-align: left;
    }

    tr {
      background: transparent;

      &:nth-child(even) {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    td {
      padding: 8px 10px;
    }

    em {
      font-style: normal;
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: 16px;

    &:first-of-type {
      font-size: 1.1em;
    }
  }

  p,
  li {
    font-size: 16px;
    line-height: 1.9em;
  }

  strong {
    font-weight: 500;
  }

  img {
    width: calc(100% + 200px);
    margin: 32px 0 23px -100px;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4em;
    margin: 16px 0;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4em;
    margin: 16px 0;
  }

  hr {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .gatsby-resp-image-wrapper {
    margin: 24px 0;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
      'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
      'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
      'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    tab-size: 4;
    -ms-hyphens: none;
    hyphens: none;
    background-color: ${props => props.theme.colors.syntax.background};
    color: ${props => props.theme.colors.syntax.text};
    border-radius: 4px;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #eee8d5;
  }
  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #eee8d5;
  }
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #839496;
  }
  .token.punctuation {
    color: #586e75;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.operator,
  .token.boolean,
  .token.number {
    color: #cb4b16;
  }
  .token.property {
    color: #b58900;
  }
  .token.tag {
    color: #268bd2;
  }
  .token.string {
    color: #2aa198;
  }
  .token.selector {
    color: #6c71c4;
  }
  .token.attr-name {
    color: #cb4b16;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #2aa198;
  }
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #859900;
  }
  .token.statement,
  .token.regex,
  .token.atrule {
    color: #2aa198;
  }
  .token.placeholder,
  .token.variable {
    color: #268bd2;
  }
  .token.deleted {
    text-decoration: line-through;
  }
  .token.inserted {
    border-bottom: 1px dotted #002b36;
    text-decoration: none;
  }
  .token.italic {
    font-style: italic;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.important {
    color: #dc322f;
  }
  .token.entity {
    cursor: help;
  }
  pre > code.highlight {
    outline: 0.4em solid #dc322f;
    outline-offset: 0.4em;
  }
`;

export default Markdown;
