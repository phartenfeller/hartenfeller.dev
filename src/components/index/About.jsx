import PropTypes from 'prop-types';
import React from 'react';
import SectionHeader from '../SectionHeader';

const NewTabLink = ({ text, link }) => (
  <a
    href={link}
    className="px-1 underline hover:text-red-600 focus:text-red-800"
    target="_blank"
    rel="noreferrer"
  >
    {text}
  </a>
);

NewTabLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const StackInfo = ({ category, technologies }) => (
  <div className="border-t border-zinc-300 sm:border-l">
    <div className="px-8 sm:px-4 py-2 sm:py-5 sm:p-6 text-xl">
      <div className="mb-2 sm:mb-6 text-center text-zinc-800 font-semibold">
        {category}
      </div>
      <ul className="list-disc list-inside text-zinc-700 text-lg">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  </div>
);

StackInfo.propTypes = {
  category: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const About = () => (
  <div className="mt-24 mx-8">
    <SectionHeader section="About" />
    <div className="md:m-auto lg:w-1/2 text-2xl leading-relaxed">
      <p className="mb-2">
        Hi my name is{' '}
        <span className="text-red-700 font-merriweather text-xl tracking-wider mx-1">
          Philipp Hartenfeller
        </span>{' '}
        and I am a software engineer from Germany.
      </p>
      <p>
        I am mostly interested in full stack web dev, databases and especially
        JavaScript. I like to work with:
      </p>
      <div className="my-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow sm:grid-cols-2 xl:grid-cols-4 m-auto">
        <StackInfo
          category="Frontend"
          technologies={['React', 'Gatsby', 'Web Components']}
        />
        <StackInfo category="Backend" technologies={['Node.js', 'Go']} />
        <StackInfo category="APIs" technologies={['GraphQL', 'REST']} />
        <StackInfo
          category="Data"
          technologies={['Postgres', 'Redis', 'Oracle', 'SQLite']}
        />
      </div>
      <p className="text-lg">
        <span>This site is built and hosted with</span>
        <NewTabLink text="Gatsby" link="https://www.gatsbyjs.com/" />
        <span>,</span>
        <NewTabLink text="TailwindCSS" link="https://tailwindcss.com/" />
        <span>,</span>
        <NewTabLink text="Traefik" link="https://traefik.io/" />
        <span>and</span>
        <NewTabLink
          text="goStatic"
          link="https://github.com/PierreZ/goStatic"
        />
      </p>
    </div>
  </div>
);

export default About;
