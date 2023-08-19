import PropTypes from 'prop-types';
import React from 'react';
import links from '../../../content/links';

const linksArr = [links.github, links.twitter, links.linkedin, links.youtube];

const LinkCard = ({ link }) => (
  <a
    href={link.href}
    className="transform items-center rounded-md bg-white/90 px-10 py-10 shadow-lg shadow-red-200/30  backdrop-blur-sm transition-all duration-150 ease-in-out hover:scale-105 hover:opacity-[.8] hover:backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-red-200 motion-reduce:translate-z-0"
  >
    <div className="m-auto">
      <svg
        className="h8 m-auto w-8 text-title-brown-light md:h-12 md:w-12 lg:h-16 lg:w-16"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentcolor"
      >
        <path d={link.path} />
      </svg>
      <div className="mt-4 text-center text-xl md:text-2xl">{link.name}</div>
    </div>
  </a>
);

LinkCard.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const SocialLinks = () => (
  <div className="mx-auto -mt-64 grid grid-cols-2 gap-4 px-8 md:-mt-32 lg:-mt-32 lg:max-w-none lg:gap-10 lg:px-48 xl:grid-cols-4 xxl:w-2/3">
    {linksArr.map((link) => (
      <LinkCard link={link} key={link.name} />
    ))}
  </div>
);

export default SocialLinks;
