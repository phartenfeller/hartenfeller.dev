import React from 'react';
import { Link } from 'gatsby';
import LinkButton from '../LinkButton';
import ProjectDisplayList from '../projectDisplay';
import SectionHeader from '../SectionHeader';

const projects = [
  {
    name: 'APEX Slideover Plug-In',
    screenshot: 'Slideover-Plugin-Preview.png',
    screenshotAlt: 'screenshot slideover in use',
    description:
      'A Plug-In for Oracle APEX that adds a Slideover region type. In the Slideover normal regions can be placed which then slide in from the side.',
    githubUrl: 'https://github.com/phartenfeller/apex-slide-over-plugin',
    projectUrl: 'https://hartenfeller.dev/blog/apex-slideover-plugin',
    buttonType: 'readBlogpost',
  },
  {
    name: 'F1report.net',
    screenshot: 'f1-report-positions.png',
    screenshotAlt: 'screenshot F1report.net',
    description: `Data analytics Website with insights about Formula 1 races. Do you want to find out which driver had the best average lap times? Then this is a website for you!`,
    githubUrl: 'https://github.com/phartenfeller/f1-stats-page',
    projectUrl: 'https://f1report.net/',
    buttonType: 'red',
  },
  {
    name: 'Minesweeper PWA',
    screenshot: 'minesweeper-screenshot.png',
    screenshotAlt: 'screenshot minesweepergame.de',
    description: `Minesweeper clone writen in vanilla JS. No Framework used! This is implemented as a PWA so you can install this game and play offline.`,
    githubUrl: 'https://github.com/phartenfeller/minesweeper_js',
    projectUrl: 'https://minesweepergame.de',
    buttonType: 'purple',
  },
];

const ProjectsPreview = () => (
  <div className="my-12 lg:my-32">
    <Link
      to="/projects"
      className="grid hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      <SectionHeader section="Things I made" />
    </Link>
    <div className="mt-12 lg:mt-32 mx-auto xxl:w-2/3">
      <ProjectDisplayList projects={projects} />
    </div>
    <div className="text-center mt-8">
      <LinkButton type="talks" link="/talks" text="List of my talks" />
      <LinkButton type="projects" link="/projects" text="More projects" />
    </div>
  </div>
);

export default ProjectsPreview;
