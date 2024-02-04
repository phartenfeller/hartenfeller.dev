import PropTypes from 'prop-types';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntaxH = ({ lang, code }) => {
  let l;

  switch (lang) {
    case 'txt':
    case 'sh':
      l = 'bash';
      break;
    case 'ts':
      l = 'typescript';
      break;
    case 'js':
    case 'jsx':
    case 'svelte':
      l = 'javascript';
      break;
    case 'yml':
      l = 'yaml';
      break;
    default:
      l = lang;
      break;
  }

  return (
    <SyntaxHighlighter
      language={l}
      style={oneDark}
      showLineNumbers
      // wrapLongLines
      // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

SyntaxH.propTypes = {
  lang: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default SyntaxH;
