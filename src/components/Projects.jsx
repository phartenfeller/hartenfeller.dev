import PropTypes from 'prop-types';
import React from 'react';
import ImageGetter from './ImageGetter';
import LinkButton from './LinkButton';
import SectionHeader from './SectionHeader';

const projects = {
  minesweeper: {
    name: 'Minesweeper PWA',
    screenshot: 'minesweeper-screenshot.png',
    description: `Minesweeper clone writen in vanilla JS. No Framework used! This is implemented as a PWA so you can install this game and play offline.`,
    githubUrl: 'https://github.com/phartenfeller/minesweeper_js',
    projectUrl: 'https://minesweepergame.de',
    buttonType: 'purple'
  },
  cyf: {
    name: 'Website for CYF',
    screenshot: 'cyftime-screenshot.png',
    description:
      'Website for a friend who makes rap music. Check his music and the site out.',
    githubUrl: 'https://github.com/phartenfeller/cyftime.de',
    projectUrl: 'https://cyftime.de',
    buttonType: 'green'
  }
};

const ProjectComponent = ({ project, reversed = false }) => {
  return (
    <div className="mt-8 lg:mt-0 mx-8 lg:mx-48">
      <h3
        className={`text-xl lg:text-3xl brown-subheader-text brown-subheader-text-shadow font-semibold ${
          reversed ? 'text-right' : null
        }`}
      >
        {project.name}
      </h3>
      <div className={`md:flex ${reversed ? 'flex-row-reverse' : null}`}>
        <div className="md:flex-none w-full md:w-1/2 xl:w-1/3 mt-6">
          <a href={project.projectUrl}>
            <ImageGetter
              filename={project.screenshot}
              classes="rounded-lg object-contain shadow-lg transform duration-150 ease-in-out hover:scale-105"
              alt="screenshot minesweeper webapp"
            />
          </a>
        </div>
        <div className="md:flex-none md:w-1/2 xl:w-1/3 mt-6 md:px-8 text-md lg:text-xl">
          <div className="mb-8 leading-relaxed">{project.description}</div>
          <div className={reversed ? 'text-right' : null}>
            <LinkButton type="github" link={project.githubUrl} />
            <LinkButton type={project.buttonType} link={project.projectUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectComponent.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    screenshot: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string,
    buttonType: PropTypes.string.isRequired
  }).isRequired,
  reversed: PropTypes.bool
};

ProjectComponent.defaultProps = {
  reversed: false
};

const Projects = () => {
  return (
    <div className="my-12 lg:my-32">
      <SectionHeader section="Things I made" />
      <div className="mt-12 lg:mt-32">
        <ProjectComponent project={projects.minesweeper} />
        <ProjectComponent project={projects.cyf} reversed />
      </div>
    </div>
  );
};

export default Projects;
