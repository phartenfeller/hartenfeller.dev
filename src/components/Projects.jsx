import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import LinkButton from './LinkButton';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const imageData = useStaticQuery(graphql`
    query ProfileImage {
      image: file(relativePath: { eq: "minesweeper-screenshot.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <SectionHeader section="Things I made" />
      <div className="mx-48">
        <h3 className="text-3xl brown-subheader-text brown-subheader-text-shadow font-semibold">
          Minesweeper PWA
        </h3>
        <div className="flex">
          <div className="flex-none w-1/3 mt-6">
            <Img
              className="rounded-md object-contain shadow-lg transform duration-150 ease-in-out hover:scale-105"
              fluid={imageData.image.childImageSharp.fluid}
            />
          </div>
          <div className="flex-none w-1/3 mt-6 pl-8 text-xl">
            <div className="mb-8">
              A Minesweeper clone writen in vanilla JS. No Framework used! This
              is implemented as a PWA so you can install this game and play
              offline.
            </div>
            <LinkButton
              type="github"
              link="https://github.com/phartenfeller/minesweeper_js"
            />
            <LinkButton type="open" link="https://minesweepergame.de" />
          </div>
        </div>
      </div>
      <span>Cyftime.de</span>
    </div>
  );
};

export default Projects;
