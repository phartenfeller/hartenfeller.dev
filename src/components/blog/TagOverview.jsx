import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import slugify from '../../util/slugify';
import { tagInfo } from './_proptypes';

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-1">
    {tags.map((tag) => (
      <Link
        key={tag.name}
        to={`/blog/tags/${slugify(tag.name)}`}
        className="select-none rounded border border-zinc-200 bg-white px-1 py-0.5 text-xs text-zinc-800 hover:border-zinc-400 focus:border-red-500"
      >
        {tag.name} <span className="text-zinc-500">({tag.totalCount})</span>
      </Link>
    ))}
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(tagInfo).isRequired,
};

const TagOverview = ({ tags, years }) => (
  <>
    <div>
      <h2 className="mb-2 text-xl text-title-brown-light">Tags</h2>
      <TagList tags={tags} />
    </div>
    <div>
      <h2 className="mb-2 mt-5 text-xl text-title-brown-light">Years</h2>
      <TagList tags={years} />
    </div>
  </>
);

TagOverview.propTypes = {
  tags: PropTypes.arrayOf(tagInfo).isRequired,
  years: PropTypes.arrayOf(tagInfo).isRequired,
};

export default TagOverview;
