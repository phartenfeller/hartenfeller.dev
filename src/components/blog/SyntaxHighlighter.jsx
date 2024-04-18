import PropTypes from 'prop-types';
import React, { Suspense, lazy } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import waitMs from '../../util/waitMs';

const SyntaxHighlighter = lazy(async () => {
  await waitMs(0.2 * 1000);
  return import('react-syntax-highlighter').then((module) => ({
    default: module.Prism,
  }));
});

// const SyntaxHighlighter = lazy(async () => {
//   await waitMs(1.5 * 1000);
//   const obj = import('react-syntax-highlighter');
//   return { default: obj.Prism };
// });

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
    <Suspense
      fallback={
        <pre
          className="loading-code"
          style={{
            fontSize: '14px',
            lineHeight: '22px',
            margin: '10px 0',
            backgroundColor: 'rgb(40, 44, 52)',
            color: 'rgb(171, 178, 191)',
            backgroundClip: 'border-box',
            padding: '12px',
          }}
        >
          {code}
        </pre>
      }
    >
      <SyntaxHighlighter
        language={l}
        style={oneDark}
        showLineNumbers
        // wrapLongLines
        // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
      >
        {code}
      </SyntaxHighlighter>
    </Suspense>
  );
};

SyntaxH.propTypes = {
  lang: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default SyntaxH;
