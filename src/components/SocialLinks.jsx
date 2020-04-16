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
            className="w-8 h8 md:w-12 md:h-12 lg:h-16 lg:w-16 m-auto"
            style={{ color: '#544242' }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          >
            <path d={link.path} />
          </svg>
          <div className="text-center mt-4 text-xl md:text-2xl">
            {link.name}
          </div>
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
  <div className="-mt-64 md:-mt-32 lg:-mt-32 px-8 lg:px-48 grid gap-4 lg:gap-10 mx-auto grid-cols-2 md:grid-cols-3 lg:max-w-none">
    {links.map(link => (
      <LinkCard link={link} key={link.name} />
    ))}
  </div>
);

export default SocialLinks;
