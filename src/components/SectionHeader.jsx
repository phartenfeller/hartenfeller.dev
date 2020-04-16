import PropTypes from 'prop-types';
import React from 'react';

const SectionHeader = ({ section }) => {
  return (
    <div className="mb-8 md:mb-16">
      <h2 className="text-center text-2xl lg:text-4xl text-gray-800 font-bold font-mono">
        <span>/* </span>
        <span className="hidden md:visible">------</span>
        <span> {section} </span>
        <span className="hidden md:visible">------</span>
        <span> */</span>
      </h2>
    </div>
  );
};

SectionHeader.propTypes = {
  section: PropTypes.string.isRequired
};

export default SectionHeader;
