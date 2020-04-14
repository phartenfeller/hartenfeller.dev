import PropTypes from 'prop-types';
import React from 'react';

const SectionHeader = ({ section }) => {
  return (
    <div className="my-32">
      <h2 className="text-center text-4xl text-gray-800 font-bold font-mono">
        <span>------ {section} ------</span>
      </h2>
    </div>
  );
};

SectionHeader.propTypes = {
  section: PropTypes.string.isRequired
};

export default SectionHeader;
