/* eslint-disable jsx-a11y/media-has-caption */
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { PlayIcon } from '@heroicons/react/solid';
import ImageGetter from '../ImageGetter';

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

const BlogVideoGetter = ({ filename, width = 1280, title, frame }) => {
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
          <div className="flex justify-center my-12">
            <div
              style={{ width: `${width}px`, maxWidth: '90vw' }}
              className="relative overflow-hidden"
            >
              <video
                controls
                width={width}
                preload="none"
                className="m-auto relative z-10"
                ref={videoEl}
              >
                <source src={publicURL} type={mime} />
              </video>
              <div ref={videoOverlay}>
                <button
                  type="button"
                  className="absolute h-full w-full top-0 left-0 mx-auto z-40 text-violet-900 hover:text-violet-600/70 transition-colors duration-150 ease-in-out"
                  onClick={handleClick}
                  aria-label={`Play video "${title}"`}
                >
                  <div>
                    <PlayIcon className="h-24 w-24 mx-auto" />
                  </div>
                </button>
                <div className="absolute h-full w-full top-0 left-0 mx-auto z-30 text-center flex">
                  <div className="pl-3 pb-2 text-2xl text-slate-100 self-end text-center z-30 font-sans font-medium">
                    {title} ({prettySize})
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 opacity-80 z-20"
                  />
                </div>
                <div className="absolute h-full w-full top-0 left-0 mx-auto z-10 text-center">
                  <ImageGetter filename={frame} />
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
  width: PropTypes.number,
  title: PropTypes.string.isRequired,
  frame: PropTypes.string.isRequired,
};

export default BlogVideoGetter;
