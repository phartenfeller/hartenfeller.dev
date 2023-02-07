import PropTypes from 'prop-types';
import React from 'react';
import escapeAnchorId from '../../util/escapeAnchorId';

const LinkedH3 = ({ children }) => {
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
        throw new Error(`Unknown Type of LinkedH3 fragnent:`, fragment);
      }
    });
  } else {
    throw new Error(`Unknown Type of LinkedH3 props:`, children);
  }

  const id = escapeAnchorId(titleText);

  return (
    <a
      href={`#${id}`}
      className="custom-link group mt-5 mb-3 flex items-center font-merriweather"
    >
      <h3
        id={id}
        className="scroll-mt-20 text-2xl text-title-brown group-hover:underline group-hover:decoration-red-100 "
      >
        {titleText}
      </h3>
      <span className="invisible ml-2 text-slate-400 group-hover:visible">
        #
      </span>
    </a>
  );
};

LinkedH3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default LinkedH3;
