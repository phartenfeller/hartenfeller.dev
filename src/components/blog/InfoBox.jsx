import PropTypes from 'prop-types';
import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/solid';

const InfoBox = ({ source, children }) => (
  <div className="max-w-[90vw] rounded border border-zinc-200 text-center md:my-16 lg:flex">
    <div className="flex flex-shrink-0 items-center bg-sky-50 p-2 lg:p-4">
      <InformationCircleIcon
        className="h-5 w-5 text-sky-500 md:h-8 md:w-8 "
        aria-hidden="true"
      />
    </div>
    <div className="p-2 lg:p-4">
      <div className="font-normal">{children}</div>
      {source && (
        <div className="text-right text-base lg:text-lg">
          <a href={source}>Source</a>
        </div>
      )}
    </div>
  </div>
);

InfoBox.defaultProps = {
  source: null,
};

InfoBox.propTypes = {
  source: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default InfoBox;
