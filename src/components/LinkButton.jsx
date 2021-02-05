import PropTypes from 'prop-types';
import React from 'react';
import svg from '../images/svg';

const ButtonLink = ({ link, newWindow, styles, children }) => {
  if (newWindow) {
    return (
      <a href={link} className={styles} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a href={link} className={styles}>
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  newWindow: PropTypes.bool.isRequired,
  styles: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const types = {
  github: {
    icon: svg.github,
    text: 'Code',
    textColor: 'text-gray-200',
    iconColor: 'text-gray-500',
    bg: 'bg-gray-900',
    bgHover: 'bg-gray-800',
    bgActive: 'bg-black',
    focusRing: 'ring-gray-500',
    additionStyles: null,
  },
  purple: {
    icon: svg.compass,
    text: 'Open',
    textColor: 'text-gray-200',
    iconColor: 'text-purple-400',
    bg: 'bg-purple-700',
    bgHover: 'bg-purple-600',
    bgActive: 'bg-purple-800',
    focusRing: 'ring-purple-300',
    additionStyles: null,
  },
  green: {
    icon: svg.compass,
    text: 'Open',
    textColor: 'text-white',
    iconColor: 'text-emerald-400',
    bg: 'bg-emerald-600',
    bgHover: 'bg-emerald-500',
    bgActive: 'bg-emerald-700',
    focusRing: 'ring-emerald-300',
    additionStyles: null,
  },
  twitter: {
    icon: svg.twitter,
    text: 'Twitter',
    textColor: 'text-white',
    iconColor: 'text-lightBlue-400',
    bg: 'bg-lightBlue-600',
    bgHover: 'bg-lightBlue-500',
    bgActive: 'bg-lightBlue-700',
    focusRing: 'ring-lightBlue-300',
    additionStyles: null,
  },
  email: {
    icon: svg.mail,
    text: 'contact@hartenfeller.dev',
    textColor: 'text-white',
    iconColor: 'text-indigo-400',
    bg: 'bg-indigo-700',
    bgHover: 'bg-indigo-600',
    bgActive: 'bg-indigo-800',
    focusRing: 'ring-indigo-300',
    additionStyles: null,
  },
  comment: {
    icon: svg.github,
    text: 'Comment on GitHub',
    textColor: 'text-gray-800',
    iconColor: 'text-gry-700',
    bg: 'bg-white',
    bgHover: 'bg-gray-100',
    bgActive: 'bg-gray-200',
    focusRing: 'ring-gray-300',
    additionStyles: 'shadow',
  },
};

const LinkButton = ({ type, link, text = undefined, newWindow = false }) => {
  const options = types[type];
  if (!options) throw new Error('Type does not exist for component LinkButton');

  return (
    <ButtonLink
      link={link}
      newWindow={newWindow}
      styles={`inline-flex mr-3 rounded-md select-none ${options.bg} hover:${options.bgHover} focus:outline-none focus:ring-2 focus:${options.focusRing} focus:${options.bgActive} transform duration-150 ease-in-out hover:scale-105 motion-reduce:transition-none motion-reduce:transition-none motion-reduce:translate-z-0 ${options.additionStyles}`}
    >
      <div
        className={`inline-flex items-center px-4 py-2 text-sm ${options.iconColor} leading-5 font-medium`}
      >
        <svg
          className="-ml-1 mr-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path fillRule="evenodd" d={options.icon} clipRule="evenodd" />
        </svg>
        <span className={`${options.textColor}`}>{text || options.text}</span>
      </div>
    </ButtonLink>
  );
};

LinkButton.propTypes = {
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
  newWindow: PropTypes.bool,
};

LinkButton.defaultProps = {
  text: undefined,
  newWindow: false,
};

export default LinkButton;
