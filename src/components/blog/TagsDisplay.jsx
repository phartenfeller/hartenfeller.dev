import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import svg from '../../images/svg';

const getTagUrl = (tag) => `/blog/tags/${tag.toLowerCase().replace(/ /g, '-')}`;

const TagsDisplay = ({ tags }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="inline-flex ml-1">
      <svg
        className="-ml-1 mr-2 h-5 w-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={svg.tag} />
      </svg>
      {tags.map((tag, i) => {
        return (
          <span key={tag} className="mr-2">
            <Link className="hover:underline" to={getTagUrl(tag)}>
              {tag}
            </Link>
            {i < tags.length - 1 ? ',' : null}
          </span>
        );
      })}
    </div>
  );
};

export const tagsProps = PropTypes.arrayOf(
  PropTypes.shape({ Tag: PropTypes.string })
);

TagsDisplay.propTypes = {
  tags: tagsProps,
};

TagsDisplay.defaultProps = {
  tags: null,
};

export default TagsDisplay;
