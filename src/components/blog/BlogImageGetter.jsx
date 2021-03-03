import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const BlogImageGetter = ({ filename, classes, alt }) => {
  const filterImage = (images) =>
    images.allImageSharp.edges.find(
      (element) =>
        // Match string after final slash
        element.node.fluid.src.split('/').pop() === filename
    );

  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Img
          className={classes}
          fluid={filterImage(data).node.fluid}
          alt={alt}
        />
      )}
    />
  );
};

BlogImageGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BlogImageGetter;
