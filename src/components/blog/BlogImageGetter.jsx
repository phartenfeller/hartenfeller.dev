import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const BlogImageGetter = ({ filename, classes, alt }) => {
  const filterImage = (images) =>
    images.allImageSharp.edges.find(
      (element) =>
        // Match string after final slash
        element.node.gatsbyImageData.images.fallback.src.split('/').pop() ===
        filename
    );

  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                gatsbyImageData(layout: FULL_WIDTH)
                original {
                  height
                  width
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div
          className="m-auto"
          style={{ maxWidth: `${filterImage(data).node.original.width}px` }}
        >
          <GatsbyImage
            image={filterImage(data).node.gatsbyImageData}
            className={classes}
            alt={alt}
          />
        </div>
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
