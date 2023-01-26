import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const SeriesTeaser = ({ items, ytLink }) => (
  <div className="bg-white rounded-md p-4 m-8 border border-slate-200">
    <span className="text-semibold text-xl text-slate-800">
      This post is part of a series
    </span>
    <div className="ml-4">
      <ul>
        {items.map((item, i) => (
          <li key={item}>
            {item === 'this' ? (
              `Part ${i + 1}`
            ) : (
              <Link to={`/blog/${item}`}>{`Part ${i + 1}`}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
    {ytLink && (
      <div>
        <a href={ytLink} target="_blank" rel="noopener noreferrer">
          You can also watch a video version of this series on YouTube
        </a>
      </div>
    )}
  </div>
);

SeriesTeaser.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  ytLink: PropTypes.string,
};

SeriesTeaser.defaultProps = {
  ytLink: null,
};

export default SeriesTeaser;
