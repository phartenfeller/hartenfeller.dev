import PropTypes from 'prop-types';
import React from 'react';
import BlogGifGetter from './BlogGifGetter';
import Gist from './Gist';
import Codemirror from './Codemirror';

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
        <div className="mx-auto my-8 font-normal">
          <Codemirror code={children} lang={language} />
        </div>
      );
  }
};
CodeHandler.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default CodeHandler;
