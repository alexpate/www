import {Box} from 'grid-styled';

const Markdown = Box.extend`
  color: ${props => props.theme.colors.text};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  table {
    display: table;
    margin: 24px 0;
    width: 100%;

    th {
      padding: 8px 10px;
      background: #f4f7fd;
      font-size: 16px;
      font-weight: 600;
      text-align: left;
    }

    tr {
      background: #fff;

      &:nth-child(even) {
        background: #f4f7fd;
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

  p,
  li {
    font-size: 16px;
    line-height: 1.9em;
  }

  p:first-of-type {
    font-size: 19px;
    line-height: 1.8em;
  }

  img {
    width: calc(100% + 200px);
    margin: 32px 0 23px -100px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  hr {
    border-color: rgba(255, 255, 255, 0.2);
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
    background-color: #f4f7fd;
    color: #c0c5ce;
    border-radius: 4px;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #a7adba;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #a7adba;
  }

  pre[class*='language-'] {
    padding: 1em;
    margin: 16px 0;
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
    color: #65737e;
  }
  .token.punctuation {
    color: #c0c5ce;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.operator,
  .token.boolean,
  .token.number {
    color: #d08770;
  }
  .token.property {
    color: #ebcb8b;
  }
  .token.tag {
    color: #8fa1b3;
  }
  .token.string {
    color: #96b5b4;
  }
  .token.selector {
    color: #b48ead;
  }
  .token.attr-name {
    color: #d08770;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #96b5b4;
  }
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #a3be8c;
  }
  .token.statement,
  .token.regex,
  .token.atrule {
    color: #96b5b4;
  }
  .token.placeholder,
  .token.variable {
    color: #8fa1b3;
  }
  .token.deleted {
    text-decoration: line-through;
  }
  .token.inserted {
    border-bottom: 1px dotted #eff1f5;
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
    color: #bf616a;
  }
  .token.entity {
    cursor: help;
  }
  pre > code.highlight {
    outline: 0.4em solid #bf616a;
    outline-offset: 0.4em;
  }
`;

export default Markdown;
