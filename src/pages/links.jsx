import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import links from '../../content/links';

const linkArr = Object.values(links);

const LinkCard = ({ link }) => (
  <a
    href={link.href}
    className=" srounded-md j flex items-center gap-x-10 bg-white px-6 py-4 shadow-lg shadow-red-200/30 transition-all duration-150 ease-in-out hover:scale-105 hover:opacity-[.8] hover:backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-red-200 motion-reduce:translate-z-0 md:px-10 md:py-6"
  >
    <div className="">
      <svg
        className="h8 m-auto w-8 text-title-brown-light md:h-12 md:w-12 lg:h-16 lg:w-16"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentcolor"
      >
        <path d={link.path} />
      </svg>
    </div>
    <div className="select-none text-2xl md:text-3xl">{link.name}</div>
  </a>
);

LinkCard.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const Links = () => (
  <Layout header>
    <SEO title="Links" description="Where to find me online" />

    <div className="mx-4 md:mx-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mt-5 font-merriweather text-2xl text-title-brown md:mt-12 md:text-4xl">
          Finde me here
        </h1>

        <div className="my-6 grid grid-cols-1 gap-y-3 md:my-8 md:gap-y-5 xl:my-12">
          {linkArr.map((link) => (
            <LinkCard link={link} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Links;
