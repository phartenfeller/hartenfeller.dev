import PropTypes from 'prop-types';

export default PropTypes.shape({
  childImageSharp: PropTypes.shape({
    gatsbyImageData: PropTypes.shape({
      images: PropTypes.shape({
        fallback: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;
