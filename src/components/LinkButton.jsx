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
    textColor: 'text-zinc-200',
    classes: 'bg-zinc-900 hover:bg-zinc-700 focus:bg-black focus:ring-zinc-500',
    iconColor: 'text-zinc-500',
  },
  purple: {
    icon: svg.compass,
    text: 'Open',
    textColor: 'text-zinc-200',
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
  red: {
    icon: svg.compass,
    text: 'Open',
    textColor: 'text-white',
    classes: 'bg-red-500 hover:bg-red-600 focus:ring-red-300',
    iconColor: 'text-red-300',
  },
  cyan: {
    icon: svg.compass,
    text: 'Open',
    textColor: 'text-cyan-900',
    classes: 'bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-300',
    iconColor: 'text-cyan-300',
  },
  twitter: {
    icon: svg.twitter,
    text: 'Twitter',
    textColor: 'text-white',
    classes: 'bg-sky-700 hover:bg-sky-600 focus:bg-sky-800 focus:ring-sky-300',
    iconColor: 'text-sky-400',
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
    textColor: 'text-zinc-600',
    classes:
      'shadow bg-slate-50 hover:bg-slate-100 focus:bg-white focus:ring-slate-200',
    iconColor: 'text-zinc-400',
  },
  rss: {
    icon: svg.rss,
    text: 'RSS',
    textColor: 'text-zinc-700',
    classes:
      'shadow bg-slate-50 hover:bg-slate-100 focus:bg-white focus:ring-slate-200',
    iconColor: 'text-orange-600',
  },
  slides: {
    icon: svg.slides,
    text: 'Slides',
    textColor: 'text-black',
    classes:
      'shadow bg-sky-400 hover:bg-sky-600 focus:ring-sky-500 ring-offset-2',
    iconColor: 'text-sky-700',
  },
  video: {
    icon: svg.video,
    text: 'Video',
    textColor: 'text-black',
    classes:
      'shadow bg-emerald-400 hover:bg-emerald-600 focus:ring-emerald-500 ring-offset-2',
    iconColor: 'text-emerald-700',
  },
  talks: {
    icon: svg.microphone,
    text: 'Talks',
    textColor: 'text-zinc-700',
    classes: 'shadow bg-white hover:bg-zinc-100 focus:ring-slate-400',
    iconColor: 'text-zinc-400',
  },
  projects: {
    icon: svg.pencil,
    text: 'Projects',
    textColor: 'text-zinc-700',
    classes: 'shadow bg-white hover:bg-zinc-100 focus:ring-slate-400',
    iconColor: 'text-zinc-400',
  },
  readBlogpost: {
    icon: svg.pencil,
    text: 'Blogpost',
    textColor: 'text-zinc-700',
    classes: 'shadow bg-white hover:bg-zinc-100 focus:ring-slate-400',
    iconColor: 'text-zinc-400',
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
            strokeWidth={options.icon.strokeWidth}
            clipRule="evenodd"
          />
        </svg>
        <span className={`${options.textColor}  tracking-wide`}>
          {text || options.text}
        </span>
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
