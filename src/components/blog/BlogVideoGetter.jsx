/* eslint-disable jsx-a11y/media-has-caption */
import { PlayIcon } from '@heroicons/react/solid';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import gatsbyImage from '../../types/gatsbyImage';
import BlogImageGetter from './BlogImageGetter';

function getMime(extension) {
  switch (extension) {
    case 'webm':
      return 'video/webm';
    case 'mp4':
      return 'video/mp4';
    case 'mov':
      return 'video/quicktime';
    default:
      // eslint-disable-next-line no-console
      console.warn('No mime type found for extension:', extension);
      return null;
  }
}

const BlogVideoGetter = ({ filename, width = 1280, title, frame, images }) => {
  const extension = filename.split('.').pop();
  const mime = getMime(extension);

  const videoEl = useRef(null);
  const videoOverlay = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    videoEl.current.play();
    videoOverlay.current.classList.add('hidden');
  };

  const filterVideo = (gifs) =>
    gifs.allFile.edges.find(
      (element) => `${element.node.name}.${element.node.extension}` === filename
    );

  return (
    <StaticQuery
      query={graphql`
        {
          allFile(filter: { extension: { in: ["webm", "mp4", "mov"] } }) {
            edges {
              node {
                publicURL
                name
                extension
                prettySize
              }
            }
          }
        }
      `}
      render={(data) => {
        const { publicURL, prettySize } = filterVideo(data).node;
        return (
          <div className="my-12 flex justify-center">
            <div
              style={{ width: `${parseInt(width)}px`, maxWidth: '90vw' }}
              className="relative overflow-hidden"
            >
              <video
                controls
                width={width}
                preload="none"
                className="relative z-10 m-auto"
                ref={videoEl}
              >
                <source src={publicURL} type={mime} />
              </video>
              <div ref={videoOverlay}>
                <button
                  type="button"
                  className="absolute left-0 top-0 z-30 mx-auto h-full w-full text-red-400 transition-colors duration-150 ease-in-out hover:text-red-500"
                  onClick={handleClick}
                  aria-label={`Play video "${title}"`}
                >
                  <div>
                    <PlayIcon className="mx-auto h-24 w-24" />
                  </div>
                </button>
                <div className="absolute left-0 top-0 z-20 mx-auto flex h-full w-full text-center">
                  <div className="z-30 self-end pb-2 pl-3 text-center font-sans text-2xl font-medium text-slate-100">
                    {title} ({prettySize})
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 z-20 h-2/3 bg-gradient-to-t from-black via-black/70 opacity-80"
                  />
                </div>
                <div className="absolute left-0 top-0 z-10 mx-auto h-full w-full text-center">
                  <BlogImageGetter
                    filename={frame}
                    images={images}
                    clickPreview={false}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

BlogVideoGetter.defaultProps = {
  width: 1280,
};

BlogVideoGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string.isRequired,
  frame: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(gatsbyImage).isRequired,
};

export default BlogVideoGetter;
