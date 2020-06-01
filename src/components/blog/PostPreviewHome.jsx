import { Link } from 'gatsby';
import React from 'react';
import TagsDisplay from './TagsDisplay';

const PostPreviewHome = ({ post }) => {
  return (
    <div className="py-8 px-4 bg-white shadow rounded-lg">
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-700 pb-2 mb-2 border-b-2 border-gray-300">
            {post.PublishDateFormattedMonth}
          </span>
          <span className="font-medium text-xl text-gray-800 title-font">
            {post.PublishDateFormattedDay}
          </span>
        </div>
        <div className="flex-grow pl-6">
          <TagsDisplay tags={post.tags} />
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
            CATEGORY
          </h2> */}
          <h1 className="title-font text-xl font-medium text-gray-900 mb-3 text-title-brown brown-subheader-text-shadow">
            {post.Title}
          </h1>
          <p className="leading-relaxed mb-5 text-gray-700">
            {post.Description}
          </p>
          <Link
            to={`/blog/${post.Slug}`}
            className="text-red-700 uppercase hover:text-red-900 hover:underline"
          >
            read post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreviewHome;
