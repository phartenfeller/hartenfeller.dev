import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const BlogGifGetter = ({ filename, classes, alt }) => {
  const filterGif = (gifs) =>
    gifs.allFile.edges.find(
      (element) => `${element.node.name}.gif` === filename
    );

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { extension: { eq: "gif" } }) {
            edges {
              node {
                publicURL
                name
              }
            }
          }
        }
      `}
      render={(data) => (
        <img
          src={filterGif(data).node.publicURL}
          alt={alt}
          className={classes}
          loading="lazy"
        />
      )}
    />
  );
};

BlogGifGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BlogGifGetter;
