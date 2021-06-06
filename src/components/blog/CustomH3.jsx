import PropTypes from 'prop-types';
import React from 'react';

const CustomH3 = ({ children }) => {
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
        throw new Error(`Unknown Type of CustomH3 fragnent:`, fragment);
      }
    });
  } else {
    throw new Error(`Unknown Type of CustomH3 props:`, children);
  }

  const id = titleText.toLowerCase().replace(/ /g, '-');

  return (
    <h3
      id={id}
      className="mt-5 mb-2 text-xl font-merriweather text-title-brown"
    >
      {titleText}
    </h3>
  );
};

CustomH3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default CustomH3;
