import PropTypes from 'prop-types';
import React from 'react';

const Details = ({ title, children }) => (
  <details>
    <summary>{title}</summary>
    <section>{children}</section>
  </details>
);

Details.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};

export default Details;
