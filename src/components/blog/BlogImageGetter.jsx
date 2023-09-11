import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import useImagePreview from '../../state/useImagePreview';
import gatsbyImage from '../../types/gatsbyImage';

const BlogImageGetter = ({
  filename,
  classes,
  alt,
  maxWidthPx,
  images,
  clickPreview = true,
}) => {
  const { open } = useImagePreview();

  const img = images.find(
    (element) =>
      // Match string after final slash
      element.childImageSharp.gatsbyImageData.images.fallback.src
        .split('/')
        .pop() === filename
  ).childImageSharp;

  if (!img) {
    throw new Error(`Could not find image ${filename}`);
  }

  if (clickPreview)
    return (
      <button
        type="button"
        className="m-auto mx-auto my-12 block h-auto w-full cursor-zoom-in xxl:w-3/4"
        style={{
          maxWidth: maxWidthPx ? `${maxWidthPx}px` : `${img.original.width}px`,
        }}
        onClick={() => {
          open({
            imgSrc: img.original.src,
            alt,
            width: img.original.width,
            height: img.original.height,
          });
        }}
      >
        <GatsbyImage
          image={img.gatsbyImageData}
          className={classes}
          alt={alt}
        />
      </button>
    );

  return (
    <GatsbyImage image={img.gatsbyImageData} className={classes} alt={alt} />
  );
};

BlogImageGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  maxWidthPx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  images: PropTypes.arrayOf(gatsbyImage).isRequired,
  clickPreview: PropTypes.bool,
};

BlogImageGetter.defaultProps = {
  maxWidthPx: null,
  clickPreview: true,
};

export default BlogImageGetter;
