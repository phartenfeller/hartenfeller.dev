import PropTypes from 'prop-types';
import React from 'react';
import ImageGetter from './ImageGetter';
import LinkButton from './LinkButton';

const ProjectType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  buttonType: PropTypes.string.isRequired,
});

const ProjectDisplay = ({ project, reversed = false }) => (
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
            classes="rounded-lg object-contain shadow-lg transform duration-150 ease-in-out hover:scale-105 motion-reduce:translate-z-0"
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

ProjectDisplay.propTypes = {
  project: ProjectType.isRequired,
  reversed: PropTypes.bool,
};

ProjectDisplay.defaultProps = {
  reversed: false,
};

const ProjectDisplayList = ({ projects }) => (
  <>
    {projects.map((p, i) => (
      <ProjectDisplay project={p} reversed={i % 2 === 0} />
    ))}
  </>
);

ProjectDisplayList.propTypes = {
  projects: PropTypes.arrayOf(ProjectType).isRequired,
};

export default ProjectDisplayList;
