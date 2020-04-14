import PropTypes from 'prop-types';
import React from 'react';
import svg from '../images/svg';

const types = {
  github: {
    icon: svg.github,
    text: 'Code',
    ariaLabel: 'Code on GitHub',
    textColor: 'text-gray-200',
    iconColor: 'text-gray-500',
    bg: 'bg-gray-900',
    bgHover: 'hover:bg-gray-800',
    bgActive: 'active:bg-black',
    focusBorder: 'focus:border-gray-600'
  },
  open: {
    icon: svg.compass,
    text: 'Open',
    ariaLabel: 'Open page',
    textColor: 'text-gray-200',
    iconColor: 'text-purple-400',
    bg: 'bg-purple-700',
    bgHover: 'hover:bg-purple-600',
    bgActive: 'active:bg-purple-800',
    focusBorder: 'focus:border-purple-500'
  }
};

const LinkButton = ({ type, link }) => {
  const options = types[type];
  if (!options) throw new Error('Type does not exist for component LinkButton');

  return (
    <>
      <a href={link} className="inline-flex rounded-md mr-3">
        <button
          type="button"
          aria-label={options.ariaLabel}
          className={`inline-flex items-center px-4 py-2 border-2 border-transparent text-sm ${options.iconColor} leading-5 font-medium rounded-md ${options.bg} ${options.bgHover} focus:outline-none ${options.focusBorder} ${options.bgActive} transition ease-in-out duration-150`}
        >
          <svg
            className="-ml-1 md:mr-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path fillRule="evenodd" d={options.icon} clipRule="evenodd" />
          </svg>
          <span className={`hidden md:visible md:block ${options.textColor}`}>
            {options.text}
          </span>
        </button>
      </a>
    </>
  );
};

LinkButton.propTypes = {
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default LinkButton;
