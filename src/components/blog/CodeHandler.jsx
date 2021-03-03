import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BlogGifGetter from './BlogGifGetter';
import Gist from './Gist';

const CodeHandler = ({ className, children }) => {
  const language = className.replace(/language-/, '');
  switch (language) {
    case 'gist':
      return (
        <div className="my-12 mx-auto xxl:w-3/4">
          <Gist id={children} />
        </div>
      );
    case 'html-embed':
      return (
        // eslint-disable-next-line react/no-danger
        <div
          className="my-12"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: children }}
        />
      );
    case 'gif-name': {
      const { filename, alt } = JSON.parse(children);
      return (
        <BlogGifGetter
          filename={filename}
          alt={alt}
          classes="object-contain my-12 mx-auto shadow-md xxl:w-3/4"
        />
      );
    }
    default:
      return (
        <div className="mx-auto xxl:w-3/4">
          <SyntaxHighlighter language={language} style={coy}>
            {children}
          </SyntaxHighlighter>
        </div>
      );
  }
};
CodeHandler.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default CodeHandler;
