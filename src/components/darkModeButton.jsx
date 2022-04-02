import PropTypes from 'prop-types';
import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import useDarkMode from '../state/useDarkMode';

const DarkModeButton = ({ showText }) => {
  const { getMode, setMode } = useDarkMode();

  return (
    <button type="button" onClick={() => setMode(!getMode())}>
      {getMode() === true ? (
        <span className="flex items-center space-x-2">
          <SunIcon className="w-4 h-4" />
          {showText ? <span>Switch to Light Mode</span> : null}
        </span>
      ) : (
        <span className="flex items-center space-x-2">
          <MoonIcon className="w-4 h-4" />
          {showText ? <span>Switch to Dark Mode</span> : null}
        </span>
      )}
    </button>
  );
};

DarkModeButton.propTypes = {
  showText: PropTypes.bool,
};

DarkModeButton.defaultProps = {
  showText: false,
};

export default DarkModeButton;
