import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import svg from '../../images/svg';

const getTagUrl = (tag) => `/blog/tags/${tag.toLowerCase().replace(/ /g, '-')}`;

const TagsDisplay = ({ tags, icon = true }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="ml-1 flex items-center">
      {icon ? (
        <svg
          className="-ml-1 mr-2 h-5 w-5 text-zinc-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d={svg.tag.path} />
        </svg>
      ) : (
        <span>#</span>
      )}
      {tags.map((tag, i) => (
        <span key={tag} className="mr-2">
          <Link
            className="rounded text-sm hover:underline hover:decoration-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-300 md:text-base"
            to={getTagUrl(tag)}
            key={tag}
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
  icon: PropTypes.bool,
};

TagsDisplay.defaultProps = {
  tags: null,
  icon: true,
};

export default TagsDisplay;
