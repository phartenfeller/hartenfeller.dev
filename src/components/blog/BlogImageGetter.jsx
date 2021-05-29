import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import useImagePreview from '../../state/useImagePreview';
import BlogImagePopup from './BlogImagePopup';

const BlogImageGetter = ({ filename, classes, alt }) => {
  const { open } = useImagePreview();

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
                  src
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
            onClick={() => {
              open({
                imgSrc: filterImage(data).node.original.src,
                alt,
                width: filterImage(data).node.original.width,
                height: filterImage(data).node.original.height,
              });
            }}
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
