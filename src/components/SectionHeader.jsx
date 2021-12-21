import PropTypes from 'prop-types';
import React from 'react';

const SectionHeader = ({ section }) => (
  <div className="mb-8 md:mb-16">
    <div className="text-center text-2xl lg:text-4xl text-zinc-800 font-bold font-mono">
      <span>/&#42;</span>
      <span className="hidden md:inline-block mx-2">------</span>
      <h2 className="inline-block mx-2"> {section} </h2>
      <span className="hidden md:inline-block mx-2">------</span>
      <span>&#42;/</span>
    </div>
  </div>
);

SectionHeader.propTypes = {
  section: PropTypes.string.isRequired,
};

export default SectionHeader;
