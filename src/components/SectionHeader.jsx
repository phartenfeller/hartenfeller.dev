import PropTypes from 'prop-types';
import React from 'react';
import slugify from 'slugify';

const SectionHeader = ({ section }) => (
  <div className="mb-8 md:mb-16">
    <div className="text-center font-mono text-2xl font-bold text-zinc-800 lg:text-4xl">
      <span>/&#42;</span>
      <span className="mx-2 hidden md:inline-block">------</span>
      <h2 className="mx-2 inline-block" id={slugify(section, { lower: true })}>
        {' '}
        {section}{' '}
      </h2>
      <span className="mx-2 hidden md:inline-block">------</span>
      <span>&#42;/</span>
    </div>
  </div>
);

SectionHeader.propTypes = {
  section: PropTypes.string.isRequired,
};

export default SectionHeader;
