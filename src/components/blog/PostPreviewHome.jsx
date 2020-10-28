import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TagsDisplay from './TagsDisplay';

const PostPreviewHome = ({ postData }) => {
  const {
    title,
    date,
    dateFormattedMonth,
    dateFormattedDay,
    description,
    slug,
    tags,
  } = postData;

  return (
    <div className="py-8 px-4 bg-white shadow rounded-lg my-4">
      <div className="h-full flex items-start">
        <time
          className="w-12 flex-shrink-0 flex flex-col text-center leading-none"
          dateTime={date}
        >
          <span className="text-gray-700 pb-2 mb-2 border-b-2 border-gray-300">
            {dateFormattedMonth}
          </span>
          <span className="font-medium text-xl text-gray-800 title-font">
            {dateFormattedDay}
          </span>
        </time>
        <div className="h-full pl-6 flex flex-col justify-between">
          <div>
            <TagsDisplay tags={tags} />
            <h3 className="title-font text-xl font-medium mb-3 text-title-brown brown-subheader-text-shadow">
              {title}
            </h3>
            <p className="leading-relaxed mb-5 text-gray-700">{description}</p>
          </div>
          <Link
            to={`/blog/${slug}`}
            className="py-3 pr-3 text-red-700 uppercase hover:text-red-900 hover:underline"
          >
            read post
          </Link>
        </div>
      </div>
    </div>
  );
};

PostPreviewHome.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dateFormattedMonth: PropTypes.string.isRequired,
    dateFormattedDay: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PostPreviewHome;
