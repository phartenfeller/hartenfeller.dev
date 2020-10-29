import PropTypes from 'prop-types';
import React from 'react';
import SectionHeader from './SectionHeader';

const StackInfo = ({ category, technologies }) => {
  return (
    <div className="border-t border-gray-300 sm:border-l">
      <div className="px-8 sm:px-4 py-2 sm:py-5 sm:p-6 text-xl">
        <div className="mb-2 sm:mb-6 text-center text-gray-800 font-semibold">
          {category}
        </div>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          {technologies.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

StackInfo.propTypes = {
  category: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const About = () => {
  return (
    <div className="mt-12 mx-8">
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
          JavaScript. My current preferred stack is:
        </p>
        <div className="my-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow sm:grid-cols-2 xl:grid-cols-4 m-auto">
          <StackInfo category="Frontend" technologies={['React', 'Gatsby']} />
          <StackInfo category="Backend" technologies={['Node.js']} />
          <StackInfo category="APIs" technologies={['GraphQL', 'REST']} />
          <StackInfo
            category="Data"
            technologies={['Postgres', 'Redis', 'leveldb', 'Oracle']}
          />
        </div>
        <p className="text-lg">
          This site is built with Gatsby, TailwindCSS, Traefik and goStatic.
        </p>
      </div>
    </div>
  );
};

export default About;
