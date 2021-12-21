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
        className="-ml-1 mr-2 h-5 w-5 text-zinc-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={svg.tag.path} />
      </svg>
      {tags.map((tag, i) => (
        <span key={tag} className="mr-2">
          <Link
            className="rounded hover:decoration-zinc-400 hover:underline focus:outline-none focus:ring-2 focus:ring-red-300"
            to={getTagUrl(tag)}
          >
            {tag}
          </Link>
          {i < tags.length - 1 ? ',' : null}
        </span>
      ))}
    </div>
  );
};

TagsDisplay.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagsDisplay.defaultProps = {
  tags: null,
};

export default TagsDisplay;
