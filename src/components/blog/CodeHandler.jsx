import PropTypes from 'prop-types';
import React from 'react';
import BlogGifGetter from './BlogGifGetter';
import Gist from './Gist';
import SyntaxH from './SyntaxHighlighter';

const CodeHandler = ({
  className = 'sh',
  children,
  header,
  source,
  sourceText,
}) => {
  const language = className.replace(/language-/, '');
  switch (language) {
    case 'gist':
      return (
        <div className="mx-auto my-12 xxl:w-3/4">
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
        <figure className="code-figure mx-auto my-8 ">
          {header && (
            <figcaption className="lg:text-md px-2 py-0.5 font-mono text-sm font-semibold tracking-tight text-zinc-800 selection:bg-zinc-700 selection:text-zinc-100 lg:py-1">
              {header.replaceAll('#', ' ')}
            </figcaption>
          )}
          <div className="font-normal">
            <SyntaxH code={children} lang={language} />
          </div>
          {source && (
            <a href={source} className="text-sm">
              {sourceText ?? 'Source'}
            </a>
          )}
        </figure>
      );
  }
};
CodeHandler.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  header: PropTypes.string,
  source: PropTypes.string,
  sourceText: PropTypes.string,
};

CodeHandler.defaultProps = {
  className: 'sh',
  header: null,
  source: null,
  sourceText: null,
};

export default CodeHandler;
