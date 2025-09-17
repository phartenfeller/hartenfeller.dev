import PropTypes from 'prop-types';
import React from 'react';
import escapeAnchorId from '../../util/escapeAnchorId';

const LinkedH2 = ({ children }) => {
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
        throw new Error(`Unknown Type of LinkedH2 fragnent:`, fragment);
      }
    });
  } else {
    throw new Error(`Unknown Type of LinkedH2 props:`, children);
  }

  const id = escapeAnchorId(titleText);

  return (
    <a
      href={`#${id}`}
      className="custom-link group mb-4 mt-16 flex font-merriweather text-2xl font-semibold md:text-2xl lg:mt-24 lg:text-3xl"
    >
      <h2
        id={id}
        className="scroll-mt-20 text-title-brown group-hover:underline group-hover:decoration-red-100"
      >
        {titleText}
      </h2>
      <span className="invisible ml-2 text-slate-400 group-hover:visible">
        #
      </span>
    </a>
  );
};

LinkedH2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default LinkedH2;
