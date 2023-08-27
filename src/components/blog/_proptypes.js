import PropTypes from 'prop-types';

export const tagInfo = PropTypes.shape({
  name: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired,
});
