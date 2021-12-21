import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import LinkButton from '../components/LinkButton';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/seo';
import ProjectDisplayList from '../components/projectDisplay';

const websites = [
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
    name: 'lct.software',
    screenshot: 'lct-software.png',
    screenshotAlt: 'screenshot lct.software',
    description: `LCT is a testing tool that offers a no code interface for creating tests for Oracle Application Express. I created the Landing page for LCT.`,
    githubUrl: 'https://github.com/mt-ag/LCT-Landingpage',
    projectUrl: 'https://lct.software/',
    buttonType: 'cyan',
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
  {
    name: 'Website for CYF',
    screenshot: 'cyftime-screenshot.png',
    screenshotAlt: 'screenshot cyftime.de',
    description:
      'Website for a friend who makes music. Check his records and the site out.',
    githubUrl: 'https://github.com/phartenfeller/cyftime.de',
    projectUrl: 'https://cyftime.de',
    buttonType: 'green',
  },
];

const gatsbyPlugins = [
  {
    name: 'gatsby-philipps-foam-theme',
    description: 'Gatsby theme for foam notes',
    url: 'https://github.com/phartenfeller/gatsby-philipps-foam-theme',
  },
  {
    name: 'gatsby-source-package-licenses',
    description:
      'Source plugin to make all used npm package licenses queryable',
    url: 'https://github.com/phartenfeller/gatsby-source-package-licenses',
  },
  {
    name: 'gatsby-source-sqlite',
    description:
      'Source plugin for pulling data into Gatsby from a SQLite database file',
    url: 'https://github.com/phartenfeller/gatsby-source-sqlite',
  },
];

const ghTemplates = [
  {
    name: 'Node.js',
    description: 'Preconfigured with ESLint and Prettier',
    url: 'https://github.com/phartenfeller/node-js-template',
  },
  {
    name: 'React',
    description: 'Preconfigured with ESLint and Prettier and TailwindCSS',
    url: 'https://github.com/phartenfeller/react_tailwind_template',
  },
  {
    name: 'Gatsby',
    description: 'Preconfigured with ESLint and Prettier and TailwindCSS',
    url: 'https://github.com/phartenfeller/gatsby-tailwind',
  },
  {
    name: 'Svelte',
    description: 'Preconfigured with ESLint and Prettier and TailwindCSS',
    url: 'https://github.com/phartenfeller/svelte-tailwind-template',
  },
  {
    name: 'Web Components',
    description: 'Vanilla without any Framework',
    url: 'https://github.com/phartenfeller/webcomponents-template',
  },
  {
    name: 'Lit',
    description: 'Web Components with Lit',
    url: 'https://github.com/phartenfeller/lit-webcomponent-template',
  },
];

const apexPlugins = [
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
];

const List = ({ array }) => (
  <div className="shadow overflow-hidden border-b border-zinc-200 sm:rounded-lg">
    <ul className="min-w-full divide-y divide-zinc-200">
      {array.map((t, i) => (
        <li
          key={t.name}
          className={`text-zinc-500 text-md grid grid-cols-1 md:grid-cols-5 ${
            i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'
          }`}
        >
          <span className="px-6 py-4">{t.name}</span>

          <span className="px-6 py-4 col-span-3">{t.description}</span>

          <div className="px-6 py-4 text-center">
            <LinkButton type="github" link={t.url} newWindow />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Projects = () => (
  <Layout header>
    <SEO title="Projects" description="Stuff that I made in my freetime" />
    <div className="pt-16 px-4 bg-red-50">
      <div className="text-center mb-24">
        <h1 className="text-3xl leading-9 brown-header-text font-extrabold sm:text-4xl sm:leading-10">
          Projects
        </h1>
      </div>
      <div className="mb-12">
        <SectionHeader section="Websites" />
        <ProjectDisplayList projects={websites} />
      </div>
      <div className="mb-12">
        <SectionHeader section="Gatsby Plug-Ins" />
        <div className="flex justify-center">
          <div className="lg:w-1/2 ">
            <List array={gatsbyPlugins} />
          </div>
        </div>
      </div>
      <div className="mb-12">
        <SectionHeader section="GitHub Templates" />
        <div className="flex justify-center">
          <div className="lg:w-1/2 ">
            <List array={ghTemplates} />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <SectionHeader section="Oracle APEX Plug-Ins" />
        <ProjectDisplayList projects={apexPlugins} />
      </div>
    </div>
  </Layout>
);

export default Projects;
