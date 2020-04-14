import PropTypes from 'prop-types';
import React from 'react';
import svg from '../images/svg';

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/phartenfeller',
    path: svg.github
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/phartenfeller',
    path: svg.twitter
  },
  {
    name: 'Xing',
    href: 'https://www.xing.com/profile/Philipp_Hartenfeller',
    path: svg.xing
  }
];

const LinkCard = ({ link }) => {
  return (
    <div className="bg-white items-center rounded-md shadow-lg py-10 px-10 transform duration-150 ease-in-out hover:scale-105 hover:opacity-94 blurry">
      <a href={link.href}>
        <div className="m-auto">
          <svg
            className="h-16 w-16 m-auto"
            style={{ color: '#544242' }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          >
            <path d={link.path} />
          </svg>
          <div className="text-center mt-4 text-2xl">{link.name}</div>
        </div>
      </a>
    </div>
  );
};

LinkCard.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

const SocialLinks = () => (
  <div className="-mt-32 px-48 grid gap-10 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
    {links.map(link => (
      <LinkCard link={link} />
    ))}
  </div>
);

export default SocialLinks;
