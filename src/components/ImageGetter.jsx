import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const ImageGetter = ({ filename, classes, alt }) => {
  const filterImage = (images) => {
    const img = images.allFile.nodes.find(
      (element) =>
        // Match string after final slash
        element.childImageSharp.gatsbyImageData.images.fallback.src
          .split('/')
          .pop() === filename
    );

    if (!img) {
      throw new Error(`Image ${filename} not found`);
    }

    return img.childImageSharp;
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              extension: { regex: "/(jpg|jpeg|png)/" }
              sourceInstanceName: { ne: "blogposts" }
            }
          ) {
            nodes {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      `}
      render={(data) => (
        <GatsbyImage
          image={filterImage(data).gatsbyImageData}
          className={classes}
          alt={alt}
        />
      )}
    />
  );
};

ImageGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGetter;
