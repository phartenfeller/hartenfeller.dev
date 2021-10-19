import PropTypes from 'prop-types';
import React from 'react';

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

  const id = titleText.toLowerCase().replace(/ /g, '-');

  return (
    <a
      href={`#${id}`}
      className="custom-link flex mt-16 mb-4 text-xl md:text-2x lg:text-3xl font-semibold font-merriweather group"
    >
      <h2
        id={id}
        className="text-title-brown group-hover:underline group-hover:decoration-red-100"
      >
        {titleText}
      </h2>
      <span className="invisible group-hover:visible ml-2 text-blueGray-400">
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
