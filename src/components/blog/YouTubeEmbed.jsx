import PropTypes from 'prop-types';
import React from 'react';

const YouTubeEmbed = ({ videoID }) => (
  <div className="video-wrapper my-6">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${videoID}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

YouTubeEmbed.propTypes = {
  videoID: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
