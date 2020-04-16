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
    github: 'https://github.com/phartenfeller/cyftime_website',
    projectUrl: 'https://cyftime.de',
    buttonType: 'green'
  }
};

const ProjectComponent = ({ project, reversed = false }) => {
  return (
    <div className="mx-48">
      <h3
        className={`text-3xl brown-subheader-text brown-subheader-text-shadow font-semibold ${
          reversed ? 'text-right' : null
        }`}
      >
        {project.name}
      </h3>
      <div className={`flex ${reversed ? 'flex-row-reverse' : null}`}>
        <div className="flex-none w-1/3 mt-6">
          <a href={project.projectUrl}>
            <ImageGetter
              filename={project.screenshot}
              classes="rounded-lg object-contain shadow-lg transform duration-150 ease-in-out hover:scale-105"
              alt="screenshot minesweeper webapp"
            />
          </a>
        </div>
        <div className="flex-none w-1/3 mt-6 px-8 text-xl">
          <div className={`mb-8 `}>{project.description}</div>
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
    <div className="my-32">
      <SectionHeader section="Things I made" />
      <div className="mt-32">
        <ProjectComponent project={projects.minesweeper} />
        <ProjectComponent project={projects.cyf} reversed />
      </div>
    </div>
  );
};

export default Projects;
