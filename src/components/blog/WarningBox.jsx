import PropTypes from 'prop-types';
import React from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';

const WarningBox = ({ children }) => (
  <div className="border border-zinc-200 rounded lg:flex text-center md:my-16">
    <div className="flex-shrink-0 bg-amber-100 p-2 lg:p-4 flex items-center">
      <ExclamationIcon
        className="h-5 w-5 md:h-8 md:w-8 text-amber-700 "
        aria-hidden="true"
      />
    </div>
    <div className="p-2 lg:p-4">
      <div className="font-bold text-lg">{children}</div>
    </div>
  </div>
);

WarningBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default WarningBox;
