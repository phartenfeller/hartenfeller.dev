import PropTypes from 'prop-types';
import React from 'react';
import BlogGifGetter from './BlogGifGetter';
import Gist from './Gist';
import Codemirror from './Codemirror';

const CodeHandler = ({ className, children, header }) => {
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
        <figure className="mx-auto my-8 ">
          {header && (
            <figcaption className="font-mono px-2 py-1 lg:py-2 text-sm lg:text-md bg-zinc-900 text-zinc-200 font-semibold tracking-tight selection:bg-zinc-700 selection:text-zinc-100">
              {header}
            </figcaption>
          )}
          <div className="font-normal">
            <Codemirror code={children} lang={language} />
          </div>
        </figure>
      );
  }
};
CodeHandler.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  header: PropTypes.string,
};

CodeHandler.defaultProps = {
  header: null,
};

export default CodeHandler;
