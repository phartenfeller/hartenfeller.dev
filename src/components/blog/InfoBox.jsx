import PropTypes from 'prop-types';
import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/solid';

const InfoBox = ({ source, children }) => (
  <div className="border border-gray-200 rounded flex">
    <div className="flex-shrink-0 bg-sky-50 p-2 lg:p-4 flex items-center">
      <InformationCircleIcon
        className="h-5 w-5 md:h-8 md:w-8 text-sky-500 "
        aria-hidden="true"
      />
    </div>
    <div className="p-2 lg:p-4">
      <div>{children}</div>
      <div>
        <a href={source}>Source</a>
      </div>
    </div>
  </div>
);

InfoBox.propTypes = {
  source: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default InfoBox;
