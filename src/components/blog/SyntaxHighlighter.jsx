import PropTypes from 'prop-types';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import waitMs from '../../util/waitMs';

const LoadingPre = ({ code }) => (
  <pre
    className="loading-code"
    style={{
      fontFamily: `"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace`,
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
);

LoadingPre.propTypes = {
  code: PropTypes.string.isRequired,
};

const SyntaxHighlighter = lazy(async () => {
  await waitMs(1.5 * 1000);
  const obj = import('react-syntax-highlighter');
  return { default: obj.Prism };
});

const SyntaxH = ({ lang, code }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Optional: disconnect observer if you only want to load once
          }
        });
      },
      {
        rootMargin: '0px', // Adjust this value to control how early the callback is executed as the element comes into view
        threshold: 0.1, // Adjust this value to control what portion of the target must be visible for the callback to be executed
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [componentRef]);
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

  if (!isVisible) {
    return (
      <div ref={componentRef}>
        <LoadingPre code={code} />
      </div>
    );
  }

  return (
    <Suspense fallback={LoadingPre}>
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
