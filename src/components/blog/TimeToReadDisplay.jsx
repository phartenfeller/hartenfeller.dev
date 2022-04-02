import PropTypes from 'prop-types';
import React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

const TimeToReadDisplay = ({ timeToRead }) => (
  <div className="inline-flex items-center">
    <ClockIcon className="h-4 w-4" />
    <span className="ml-2">
      {timeToRead === 1 ? '1 minute' : `${timeToRead} minutes`}
    </span>
  </div>
);

TimeToReadDisplay.propTypes = {
  timeToRead: PropTypes.number.isRequired,
};

export default TimeToReadDisplay;
