import PropTypes from 'prop-types';
import React from 'react';
import escapeAnchorId from '../../util/escapeAnchorId';

const LinkedH4 = ({ children }) => {
  let titleText = '';
  if (typeof children === 'string') {
    titleText = children;
  } else if (children instanceof Array) {
    children.forEach((fragment) => {
      if (typeof fragment === 'string') {
        titleText += fragment;
      } else if (typeof fragment === 'object') {
        titleText += fragment.props.children;
      } else {
        throw new Error(`Unknown Type of LinkedH4 fragnent:`, fragment);
      }
    });
  } else {
    throw new Error(`Unknown Type of LinkedH4 props:`, children);
  }

  const id = escapeAnchorId(titleText);

  return (
    <a
      href={`#${id}`}
      className="custom-link group mb-1 mt-5 flex items-center"
    >
      <h4
        id={id}
        className="mb-1 scroll-mt-20 text-title-brown underline decoration-title-brown/50 group-hover:decoration-red-100 "
      >
        {titleText}
      </h4>
      <span className="invisible ml-2 text-slate-400 group-hover:visible">
        #
      </span>
    </a>
  );
};

LinkedH4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default LinkedH4;
