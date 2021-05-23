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
    classes: 'bg-gray-900 hover:bg-gray-700 focus:bg-black focus:ring-gray-500',
    iconColor: 'text-gray-500',
  },
  purple: {
    icon: svg.compass,
    text: 'Open',
    textColor: 'text-gray-200',
    classes:
      'bg-purple-700 hover:bg-purple-500 focus:bg-purple-800 focus:ring-purple-300',
    iconColor: 'text-purple-400',
  },
  green: {
    icon: svg.compass,
    text: 'Open',
    textColor: 'text-white',
    classes:
      'bg-emerald-600 hover:bg-emerald-500 focus: bg-emerald-700 focus:ring-emerald-300',
    iconColor: 'text-emerald-400',
  },
  twitter: {
    icon: svg.twitter,
    text: 'Twitter',
    textColor: 'text-white',
    classes:
      'bg-lightBlue-700 hover:bg-lightBlue-600 focus:bg-lightBlue-800 focus:ring-lightBlue-300',
    iconColor: 'text-lightBlue-400',
  },
  email: {
    icon: svg.mail,
    text: 'contact@hartenfeller.dev',
    textColor: 'text-white',
    classes:
      'bg-indigo-700 hover:bg-indigo-600 focus:bg-indigo-800 focus:ring-indigo-300',
    iconColor: 'text-indigo-400',
    additionStyles: null,
  },
  comment: {
    icon: svg.externalLink,
    text: 'Comment on GitHub',
    textColor: 'text-gray-600',
    classes:
      'shadow bg-blueGray-50 hover:bg-blueGray-100 focus:bg-white focus:ring-blueGray-200',
    iconColor: 'text-gray-400',
  },
  rss: {
    icon: svg.rss,
    text: 'RSS',
    textColor: 'text-gray-700',
    classes:
      'shadow bg-blueGray-50 hover:bg-blueGray-100 focus:bg-white focus:ring-blueGray-200',
    iconColor: 'text-orange-600',
    strokeWidth: '2',
  },
};

const LinkButton = ({ type, link, text = undefined, newWindow = false }) => {
  const options = types[type];
  if (!options) throw new Error('Type does not exist for component LinkButton');

  return (
    <ButtonLink
      link={link}
      newWindow={newWindow}
      styles={`inline-flex mr-3 rounded-md select-none ${options.classes} focus:outline-none focus:ring-2 transform duration-150 ease-in-out hover:scale-105 motion-reduce:transition-none motion-reduce:transition-none motion-reduce:translate-z-0`}
    >
      <div
        className={`inline-flex items-center px-4 py-2 text-sm ${options.iconColor} leading-5 font-medium`}
      >
        <svg
          className="-ml-1 mr-2 h-5 w-5"
          fill={options.icon.fill ? 'currentColor' : 'none'}
          stroke={options.icon.stroke ? 'currentColor' : null}
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d={options.icon.path}
            strokeWidth={options.strokeWidth}
            clipRule="evenodd"
          />
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

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
  />
</svg>;
